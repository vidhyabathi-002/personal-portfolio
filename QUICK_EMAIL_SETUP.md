# Quick Email Setup Guide

## Current Status
✅ The contact form is working with a mailto fallback (opens email client)
⚠️ To enable direct email sending, configure EmailJS (takes 5 minutes)

## Quick EmailJS Setup (5 minutes)

### Step 1: Sign Up (1 minute)
1. Go to https://www.emailjs.com/
2. Click "Sign Up" (free account - 200 emails/month)
3. Verify your email

### Step 2: Add Email Service (2 minutes)
1. In dashboard, click "Email Services" → "Add New Service"
2. Choose "Gmail"
3. Click "Connect Account" and sign in with: **kk3777096@gmail.com**
4. Click "Create Service"
5. **Copy the Service ID** (looks like: `service_xxxxxxx`)

### Step 3: Create Template (1 minute)
1. Click "Email Templates" → "Create New Template"
2. **Template Name:** Contact Form
3. **Subject:** `New Contact: {{from_name}}`
4. **Content:**
```
From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from portfolio contact form
Reply to: {{reply_to}}
```
5. Click "Save"
6. **Copy the Template ID** (looks like: `template_xxxxxxx`)

### Step 4: Get Public Key (30 seconds)
1. Click "Account" → "General"
2. Scroll to "API Keys"
3. **Copy the Public Key** (looks like: `xxxxxxxxxxxxx`)

### Step 5: Add to Project (30 seconds)
1. Create `.env` file in project root (same folder as package.json)
2. Add these lines:
```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```
3. Replace the values with your actual IDs from steps 2-4
4. Save the file

### Step 6: Restart Dev Server
```bash
# Stop the current server (Ctrl+C)
npm run dev
```

## Test It!
1. Fill out the contact form
2. Click "Send Message"
3. Check kk3777096@gmail.com inbox
4. You should receive the email!

## Troubleshooting

**Error: "Email service not configured"**
- Make sure `.env` file exists in project root
- Check that all three variables are set
- Restart the dev server after creating `.env`

**Emails not arriving**
- Check spam folder
- Verify Gmail account is connected in EmailJS
- Check EmailJS dashboard for sent emails

## Alternative: Keep Using Mailto
The form works with mailto (opens email client). If you prefer this, no setup needed!


