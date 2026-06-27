const Razorpay = require('razorpay');

let razorpayInstance = null;

try {
    if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
        razorpayInstance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });
    } else {
        console.warn('⚠️  Razorpay keys not configured. Payment features will be unavailable.');
    }
} catch (error) {
    console.warn('⚠️  Failed to initialize Razorpay:', error.message);
}

module.exports = razorpayInstance; 