# EmailJS Setup Instructions

## Quick Setup (5 minutes)

The contact form currently uses a mailto fallback (opens your email client). To enable direct email sending to kk3777096@gmail.com, follow these steps:

## Option 1: Quick Setup with EmailJS (Recommended)

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (allows 200 emails/month)

## Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account (kk3777096@gmail.com)
5. Copy the **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
From: {{from_name}}
Email: {{from_email}}
Reply To: {{reply_to}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Copy the **Template ID**

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## Step 5: Update Contact Component
Open `components/Contact.tsx` and replace these values:

```typescript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

## Alternative: Using Environment Variables (Recommended)
1. Create a `.env` file in the root directory:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update Contact.tsx to use environment variables:
```typescript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

## Testing
1. Fill out the contact form
2. Click "Send Message"
3. Check your email (kk3777096@gmail.com) for the message

## Notes
- Free tier allows 200 emails/month
- All emails will be sent to kk3777096@gmail.com
- The sender's email will be in the "Reply To" field for easy responses

