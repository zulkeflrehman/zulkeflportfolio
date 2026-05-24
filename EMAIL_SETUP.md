# Portfolio Contact Form Setup Guide

## Quick Setup (2 Minutes)

### Step 1: Create .env File
Copy the `.env.example` file to `.env`:

**Windows (PowerShell):**
```powershell
Copy-Item .env.example .env
```

**Mac/Linux:**
```bash
cp .env.example .env
```

### Step 2: Get Your Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** if not already enabled
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Select:
   - **App**: Mail
   - **Device**: Windows PC (or your device)
5. Google will show you a **16-character password**
6. Copy this password (it looks like: `abcd efgh ijkl mnop`)

### Step 3: Update .env File

Open the `.env` file and replace:
```
GMAIL_PASSWORD=your_16_character_app_password_here
```

With your actual password (remove spaces):
```
GMAIL_PASSWORD=abcdefghijklmnop
```

### Step 4: Start the Server

**Windows (PowerShell):**
```powershell
npm start
```

You should see:
```
✓ Email service configured
✓ Emails will be sent to: zulkeflrehman@gmail.com
```

### Step 5: Test the Contact Form

1. Open http://localhost:3000 in your browser
2. Scroll to "Get In Touch" section
3. Fill in the form and click "Send Message"
4. You should receive an email at zulkeflrehman@gmail.com

## Features

✅ **Automatic Email Delivery** - Messages are sent instantly to your Gmail  
✅ **Confirmation Emails** - Visitors get a thank you email  
✅ **Beautiful HTML Emails** - Professional formatted email design  
✅ **Error Handling** - User-friendly error messages if something goes wrong  

## Troubleshooting

### "Username and Password not accepted" Error
- Make sure you're using an **App Password**, not your regular Gmail password
- App Passwords only work with 2-Step Verification enabled
- Remove any spaces from the password in .env

### Emails not sending
- Check that .env file exists with correct password
- Make sure your Gmail account has 2-Step Verification enabled
- Check the server console for detailed error messages

### "EAUTH" Error
- Your App Password is incorrect or has spaces
- Regenerate a new App Password from Google Account settings

## Security Notes

⚠️ **Important:**
- Never commit `.env` file to git
- The `.env` file is already in `.gitignore`
- App Passwords are specific to your account and can be revoked anytime
- Use App Passwords instead of your main Gmail password for security

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `GMAIL_USER` | Your Gmail address | `zulkeflrehman@gmail.com` |
| `GMAIL_PASSWORD` | 16-char App Password | `abcdefghijklmnop` |
| `EMAIL_SUBJECT_PREFIX` | Email subject prefix | `[Portfolio Contact]` |
| `PORT` | Server port | `3000` |

---

**Need help?** Check the server console output for detailed error messages.
