import nodemailer from 'nodemailer';
import { ContactFormData } from '../types/contact';

export const sendEmail = async ({ name, email, message }: ContactFormData) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: process.env.SMTP_USER,
    subject: 'New Contact Form Message',
    html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`
  });
};
