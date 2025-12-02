const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
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

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
};
