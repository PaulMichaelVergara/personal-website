import { Resend } from 'resend';

const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'paulmichaelrvergara@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Email: ${email}\n\nMessage: ${message}`,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ error: error.message });
  }
}
