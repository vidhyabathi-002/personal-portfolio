# Personal Portfolio

A modern, interactive personal portfolio website built with React, TypeScript, and Vite. Showcasing projects, skills, experience, and professional achievements with smooth animations and a responsive design.

## ✨ Features

- **Responsive Design** - Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Theme** - Toggle between dark and light themes with persistent preferences
- **Smooth Animations** - Beautiful animations powered by Framer Motion
- **Interactive Components** - Engaging UI elements with Lucide React icons
- **Project Showcase** - Display and filter projects with visual cards
- **Skills Visualization** - Interactive skill level representation
- **Experience Timeline** - Professional experience with detailed descriptions
- **Certifications** - Showcase your certifications and credentials
- **Contact Form** - EmailJS integration for direct contact messaging
- **Analytics Ready** - Built with performance and SEO in mind

## 🚀 Tech Stack

- **Frontend Framework**: React 19.2.1
- **Language**: TypeScript 5.8.2
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion 12.23.25
- **Icons**: Lucide React 0.556.0
- **Charts**: Recharts 3.5.1
- **Email Service**: EmailJS 4.4.1
- **Development**: Node.js & npm

## 📁 Project Structure

```
├── App.tsx                    # Main application component
├── index.tsx                  # Entry point
├── index.html                 # HTML template
├── constants.ts               # Constants and configuration
├── types.ts                   # TypeScript type definitions
├── metadata.json              # Metadata configuration
├── package.json               # Project dependencies
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
├── components/
│   ├── Navbar.tsx             # Navigation bar
│   ├── Hero.tsx               # Hero/landing section
│   ├── About.tsx              # About me section
│   ├── Experience.tsx         # Work experience timeline
│   ├── Skills.tsx             # Skills showcase
│   ├── Projects.tsx           # Projects portfolio
│   ├── Certifications.tsx     # Certifications display
│   ├── Contact.tsx            # Contact form
│   └── Education.tsx          # Education history
└── public/                    # Static assets
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vidhyabathi-002/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup** (Optional)
   - Create a `.env.local` file if using EmailJS
   - Add your EmailJS public key: `VITE_EMAILJS_PUBLIC_KEY=your_key_here`

## 🚀 Getting Started

### Development Mode

Run the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 🎨 Customization

### Colors & Theme
Update theme colors in `constants.ts` and Tailwind configuration to match your brand.

### Content
Edit individual component files in the `components/` directory to customize:
- Personal information in `Hero.tsx`
- About section in `About.tsx`
- Work history in `Experience.tsx`
- Technical skills in `Skills.tsx`
- Project details in `Projects.tsx`
- Certifications in `Certifications.tsx`
- Contact information in `Contact.tsx`

### Metadata
Update `metadata.json` with your personal information for SEO and meta tags.

## 📧 Contact Form Setup

The contact form uses EmailJS for sending emails:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Add your `Public Key` to environment variables
4. Update the service ID and template ID in `Contact.tsx`

## 🌐 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Then drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
Configure Vite for GitHub Pages deployment and push to the `gh-pages` branch.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report issues
- Suggest improvements
- Submit pull requests

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Vidhyabathi K**
- GitHub: [@vidhyabathi-002](https://github.com/vidhyabathi-002)
- Email: vidhyabathi.k@example.com

## 🙏 Acknowledgments

- React community for excellent documentation
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- Vite for blazing fast build times

## 📞 Support

If you have any questions or need assistance, feel free to open an issue on GitHub or reach out via the contact form in the portfolio.

---

**Last Updated**: December 6, 2025

