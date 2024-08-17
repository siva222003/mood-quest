export const html = (name: string) => {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>MoodQuest Reminder</title><style>body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
      color: #333;
    }

    .container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 02px4pxrgba(0, 0, 0, 0.1);
    }

    .header {
      text-align: center;
      padding: 20px0;
      background-color: #007bff;
      color: #ffffff;
      border-radius: 8px8px00;
    }

    .headerh1 {
      margin: 0;
      font-size: 24px;
    }

    .content {
      padding: 20px;
    }

    .contenth2 {
      font-size: 20px;
      margin-bottom: 20px;
      color: #007bff;
    }

    .contentp {
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .button {
      text-align: center;
      margin-bottom: 20px;
    }

    .buttona {
      background-color: #007bff;
      color: #ffffff;
      padding: 12px24px;
      border-radius: 4px;
      text-decoration: none;
      font-size: 16px;
    }

    .buttona:hover {
      background-color: #0056b3;
    }

    .footer {
      text-align: center;
      padding: 20px0;
      font-size: 12px;
      color: #777;
      border-top: 1px solid #eeeeee;
    }

    .footerp {
      margin: 0;
    }

    .footera {
      color: #007bff;
      text-decoration: none;
    }

    .footera:hover {
      text-decoration: underline;
    }
  </style></head><body><div class="container"><div class="header"><h1>MoodQuest</h1></div><div class="content"><h2>It's Time for Your Mood Assessment!</h2><p>Dear ${name},</p><p>We hope you're doing well! This is a friendly reminder from MoodQuest to take a moment and assess your mood today.</p><p>Your well-being is important to us, and regular mood assessments help us better understand how you're feeling and provide the support you need.</p><div class="button"><a href="https://mood-quest.vercel.app/questionnaire" target="_blank">Take Your Mood Assessment</a></div><p>Thank you for being a part of MoodQuest. We're here to support you every step of the way.</p><p>Best regards,<br>The MoodQuest Team</p></div><div class="footer"><p>If you have any questions or need assistance, feel free to <ahref="[Contact Link]">contact us</a>.</p><p>&copy; 2024 MoodQuest. All rights reserved.</p></div></div></body></html>`;
};
