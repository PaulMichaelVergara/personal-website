const { Resend } = require('resend');

console.log('API Route: send-email.js loaded');
console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  console.log('Request received:', {
    method: req.method,
    url: req.url,
    body: req.body
  });
  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method);
    return res.status(405).json({ 
      error: 'Method not allowed',
      allowed: ['POST']
    });
  }

  const { email, message } = req.body;

  if (!email || !message) {
    console.log('Missing required fields:', { email: !!email, message: !!message });
    return res.status(400).json({ 
      error: 'Missing required fields',
      required: ['email', 'message']
    });
  }

  try {
    console.log('Sending email...');
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'paulmichaelrvergara@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Email: ${email}\n\nMessage: ${message}`,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(400).json({ 
        error: 'Failed to send email',
        details: error
      });
    }

    console.log('Email sent successfully:', data);
    return res.status(200).json({ 
      success: true, 
      data 
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
};
