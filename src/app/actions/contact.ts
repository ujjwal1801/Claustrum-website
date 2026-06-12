"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  details: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const { name, company, email, phone, details } = data;

  if (!name.trim() || !email.trim() || !details.trim()) {
    return { success: false, error: "Missing required fields" };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Invalid email address" };
  }

  const subject = `WEBSITE ENQUIRY - ${name}${company ? ` (${company})` : ""}`;

  try {
    await resend.emails.send({
      from: "Claustrum Website <onboarding@resend.dev>",
      to: "contact@claustrum-tech.com",
      replyTo: email,
      subject,
      html: `
        <h2>New Website Enquiry</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px 12px;font-weight:bold;vertical-align:top;">Name</td><td style="padding:8px 12px;">${name}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;vertical-align:top;">Company</td><td style="padding:8px 12px;">${company || "—"}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;vertical-align:top;">Email</td><td style="padding:8px 12px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;vertical-align:top;">Phone</td><td style="padding:8px 12px;">${phone || "—"}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;vertical-align:top;">Project Details</td><td style="padding:8px 12px;">${details}</td></tr>
        </table>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Resend error:", error);
    return { success: false, error: "Failed to send email. Please try again." };
  }
}
