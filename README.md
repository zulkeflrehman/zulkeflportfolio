# Zulkefl Rehman - AI & NLP Developer Portfolio

A modern, interactive portfolio website showcasing AI/ML and NLP expertise, featuring a fully functional contact form with email delivery and project portfolio.

**Live Demo:** [Your Portfolio URL]

## 🚀 Features

- **Responsive Design** - Mobile-friendly layout with beautiful animations
- **Interactive Elements** - Typewriter text, particle background, smooth scrolling
- **Project Showcase** - Highlight your best work (TalentMatch AI, etc.)
- **Contact Form** - Automated email delivery to your Gmail inbox
- **Skills Section** - Visual progress bars showing technical proficiencies
- **Certifications** - Display your AI/ML certifications and qualifications
- **Dark Theme** - Modern aesthetic with gradient accents

## 📁 Project Structure

```
zulkefl-portfolio/
├── index.html                 # Main portfolio page
├── server.js                  # Node.js backend with email functionality
├── package.json               # Dependencies and scripts
├── .env.example               # Email configuration template
├── .gitignore                 # Git ignore rules
├── EMAIL_SETUP.md             # Email setup guide
│
├── css/
│   └── style.css              # Complete styling
│
├── js/
│   └── script.js              # Interactive features (animations, form handling)
│
├── assets/
│   ├── profile-main.jpg       # Your profile photo
│   ├── profile-workspace.png  # Workspace image
│   ├── resume-match.png       # TalentMatch project screenshot
│   └── ai-visual.png          # AI visualization
│
└── data/
    └── ats_resume_dataset.csv # Sample dataset
```

## 🛠️ Tech Stack

**Frontend:**
- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- FontAwesome Icons

**Backend:**
- Node.js
- Express.js
- Nodemailer (Gmail SMTP)
- dotenv (environment management)

**Tools & Services:**
- Gmail API (for email delivery)
- GitHub (version control)

## ⚙️ Installation & Setup

### Prerequisites
- Node.js v14+ installed
- npm (comes with Node.js)
- Gmail account with 2-Step Verification enabled

### Step 1: Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/zulkefl-portfolio.git
cd zulkefl-portfolio
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Email (Optional)
For email functionality, see [EMAIL_SETUP.md](EMAIL_SETUP.md)

```bash
# Copy the example env file
cp .env.example .env

# Edit .env and add your Gmail App Password
# Get it from: https://myaccount.google.com/apppasswords
```

### Step 4: Run the Server
```bash
npm start
```

The portfolio will be available at: **http://localhost:3000**

## 📧 Email Configuration

To enable the contact form to send emails:

1. Enable 2-Step Verification on your Gmail account
2. Go to [App Passwords](https://myaccount.google.com/apppasswords)
3. Generate a 16-character app password
4. Add it to your `.env` file:
   ```
   GMAIL_PASSWORD=your_16_character_password
   ```
5. Restart the server

See [EMAIL_SETUP.md](EMAIL_SETUP.md) for detailed instructions.

## 🎨 Customization

### Update Your Information
Edit `index.html` to customize:
- Profile photo (replace `assets/profile-main.jpg`)
- Project links and descriptions
- Skills and proficiencies
- Certifications
- Contact email (currently: zulkeflrehman@gmail.com)

### Modify Styling
Edit `css/style.css` to customize:
- Color scheme
- Font sizes and families
- Animation speeds
- Responsive breakpoints

### Add Interactive Features
Edit `js/script.js` to add:
- New animations
- Additional functionality
- Analytics tracking
- Social media integrations

## 📦 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Heroku
```bash
heroku create your-app-name
git push heroku main
```

### Deploy to Netlify
- Connect your GitHub repository
- Set build command: (none needed for static)
- Set publish directory: `./`

## 📝 Environment Variables

Create a `.env` file with:
```env
GMAIL_USER=your-email@gmail.com
GMAIL_PASSWORD=your_16_char_app_password
EMAIL_SUBJECT_PREFIX=[Portfolio Contact]
PORT=3000
```

## 🔒 Security Notes

⚠️ **Important:**
- Never commit `.env` file (it's in `.gitignore`)
- Use Gmail App Passwords, not your main password
- Keep credentials confidential
- Use HTTPS when deploying publicly

## 📞 Contact & Links

- **Email:** zulkeflrehman@gmail.com
- **GitHub:** [github.com/Zulkefl](https://github.com/Zulkefl)
- **LinkedIn:** [linkedin.com/in/zulkefl-rehman](https://linkedin.com/in/zulkefl-rehman-327130280)
- **Phone:** +92 331 9856454
- **Location:** Islamabad, Pakistan

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- NAVTTC AI Course
- Huawei Cloud Certification
- Open source libraries and frameworks

---

**Built with ❤️ by Zulkefl Rehman**

*Last Updated: May 2026*
