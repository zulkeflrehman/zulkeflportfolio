require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the project root
app.use(express.static(path.join(__dirname)));

// Check if .env file exists with valid credentials
const envPath = path.join(__dirname, '.env');
if (!fs.existsSync(envPath)) {
    console.log('\n⚠️  .env file not found!');
    console.log('📋 Setup Instructions:');
    console.log('1. Copy .env.example to .env');
    console.log('2. Replace "your_16_character_app_password_here" with your actual Gmail App Password');
    console.log('3. Visit: https://myaccount.google.com/apppasswords to generate your password\n');
}

// Email configuration using Gmail
// Note: You'll need to use an "App Password" if 2FA is enabled
const emailUser = process.env.GMAIL_USER || 'zulkeflrehman@gmail.com';
const emailPass = process.env.GMAIL_PASSWORD;

if (!emailPass) {
    console.log('⚠️  Gmail App Password not configured in .env file');
    console.log('📧 Email functionality will not work until credentials are set up.\n');
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: emailUser,
        pass: emailPass
    }
});

// Test email configuration on startup
transporter.verify((error, success) => {
    if (error) {
        console.log('Email configuration error:', error);
    } else {
        console.log('✓ Email server is ready to send messages');
    }
});

// Contact form submission endpoint
app.post('/api/send-email', async (req, res) => {
    try {
        // Check if email credentials are configured
        if (!emailPass) {
            return res.status(503).json({
                success: false,
                error: 'Email service is not configured. Please set up Gmail App Password in .env file.'
            });
        }

        const { name, email, subject, message } = req.body;

        // Validate input
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                error: 'All fields are required'
            });
        }

        // Email to portfolio owner
        const mailOptions = {
            from: emailUser,
            to: emailUser,
            subject: `${process.env.EMAIL_SUBJECT_PREFIX || '[Portfolio Contact]'} ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <h2 style="color: #6b21a8;">New Portfolio Contact Message</h2>
                    <hr style="border: none; border-top: 1px solid #ddd;">
                    
                    <p><strong>From:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    
                    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 15px;">
                        <p><strong>Message:</strong></p>
                        <p>${message.replace(/\n/g, '<br>')}</p>
                    </div>
                    
                    <hr style="border: none; border-top: 1px solid #ddd; margin-top: 20px;">
                    <p style="font-size: 12px; color: #999;">
                        This message was sent from your portfolio website at ${new Date().toLocaleString()}
                    </p>
                </div>
            `
        };

        // Confirmation email to visitor
        const confirmationEmail = {
            from: emailUser,
            to: email,
            subject: 'Message Received - Zulkefl Rehman',
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <h2 style="color: #6b21a8;">Thank You for Reaching Out!</h2>
                    <p>Hi ${name},</p>
                    <p>I have received your message and will get back to you as soon as possible. Your inquiry is important to me!</p>
                    
                    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 15px;">
                        <p><strong>Your Message Details:</strong></p>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <p><strong>Received at:</strong> ${new Date().toLocaleString()}</p>
                    </div>
                    
                    <p style="margin-top: 20px;">Best regards,<br><strong>Zulkefl Rehman</strong><br>AI & Machine Learning Developer</p>
                </div>
            `
        };

        // Send both emails
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(confirmationEmail);

        res.json({
            success: true,
            message: 'Email sent successfully! Check your inbox for a confirmation.'
        });

    } catch (error) {
        console.error('Email sending error:', error.message);
        
        // Provide helpful error messages
        let errorMessage = 'Failed to send email.';
        if (error.code === 'EAUTH') {
            errorMessage = 'Gmail authentication failed. Please check your App Password in .env file.';
        }
        
        res.status(500).json({
            success: false,
            error: errorMessage
        });
    }
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`\n${'═'.repeat(60)}`);
    console.log(`🚀 Portfolio Server running at http://localhost:${PORT}`);
    console.log(`${'═'.repeat(60)}\n`);
    
    if (!emailPass) {
        console.log('⚠️  EMAIL SERVICE NOT CONFIGURED');
        console.log('━'.repeat(60));
        console.log('To enable email functionality:\n');
        console.log('1. Copy .env.example to .env');
        console.log('   Command: cp .env.example .env\n');
        console.log('2. Open .env file and add your Gmail App Password');
        console.log('3. Get App Password from: https://myaccount.google.com/apppasswords');
        console.log('4. Save the file and restart the server\n');
        console.log('━'.repeat(60) + '\n');
    } else {
        console.log(`✓ Email service configured`);
        console.log(`✓ Emails will be sent to: ${emailUser}\n`);
    }
});
