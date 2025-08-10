import { Request, Response } from 'express';
import { sendEmail } from '../services/email.service';
import { ContactFormData } from '../types/contact';

export const sendContactMessage = async (req: Request, res: Response) => {
  const { name, email, message } = req.body as ContactFormData;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await sendEmail({ name, email, message });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};
