import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-7ba61365/health", (c) => {
  return c.json({ status: "ok" });
});

// Feedback submission endpoint
app.post("/make-server-7ba61365/feedback", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, feedback } = body;

    if (!feedback || !feedback.trim()) {
      return c.json({ error: "Feedback is required" }, 400);
    }

    // Store feedback in the database
    const feedbackId = `feedback_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const feedbackData = {
      id: feedbackId,
      name: name || "Anonymous",
      email: email || "Not provided",
      feedback: feedback.trim(),
      timestamp: new Date().toISOString(),
    };

    await kv.set(feedbackId, feedbackData);

    // Send email notification using Resend API
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (resendApiKey) {
      try {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "CodeQuest Feedback <onboarding@resend.dev>",
            to: ["karthik.raja@huschennai.in"],
            subject: `New CodeQuest Feedback from ${feedbackData.name}`,
            html: `
              <h2>New Feedback Received</h2>
              <p><strong>From:</strong> ${feedbackData.name}</p>
              <p><strong>Email:</strong> ${feedbackData.email}</p>
              <p><strong>Time:</strong> ${new Date(feedbackData.timestamp).toLocaleString()}</p>
              <hr>
              <h3>Feedback:</h3>
              <p>${feedbackData.feedback.replace(/\n/g, '<br>')}</p>
            `,
          }),
        });

        if (!emailResponse.ok) {
          const errorText = await emailResponse.text();
          console.log(`Email sending failed: ${errorText}`);
        } else {
          console.log("Email sent successfully");
        }
      } catch (emailError) {
        console.log(`Email sending error: ${emailError}`);
      }
    } else {
      console.log("RESEND_API_KEY not configured - feedback saved but email not sent");
    }

    return c.json({ 
      success: true, 
      message: "Feedback submitted successfully",
      id: feedbackId 
    });

  } catch (error) {
    console.log(`Error submitting feedback: ${error}`);
    return c.json({ error: "Failed to submit feedback", details: String(error) }, 500);
  }
});

Deno.serve(app.fetch);