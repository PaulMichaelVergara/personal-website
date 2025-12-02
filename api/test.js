console.log('Test endpoint loaded');

module.exports = (req, res) => {
  console.log('Test endpoint hit');
  return res.status(200).json({
    status: 'API is working',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
    nodeVersion: process.version,
    resendKeyConfigured: !!process.env.RESEND_API_KEY
  });
};
