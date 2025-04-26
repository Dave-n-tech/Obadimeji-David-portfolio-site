"use server";
import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as String; // ideally, form validation should be done on formData
  const email = formData.get("email") as String;
  const message = formData.get("message") as String;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: process.env.SERVER_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: `${email}`,
    to: process.env.RECIEVER_EMAIL,
    subject: `New Email from ${name} via Porfolio site`,
    html: `${message}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Error sending email: ", err);
    } else {
      console.log("Email sent:", info);
    }
  });
}
