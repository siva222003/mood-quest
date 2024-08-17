import nodemailer from "nodemailer";
import { env } from "../config/config";

export interface MailerI {
  to: string;
  html: string;
}

export const sendMail = (options: MailerI) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: env.SERVICE_MAIL,
      pass: env.SERVICE_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"MoodQuest" <${env.SERVICE_MAIL}>`,
    to: options.to,
    subject: "MoodQuest Reminder",
    html: options.html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};
