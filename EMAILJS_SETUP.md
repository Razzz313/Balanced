# EmailJS Setup Guide — Balance Website

This guide walks you through connecting the contact form to your email inbox.
Total setup time: ~10 minutes. No backend server required.

---

## What You Need to Provide

| Item | Example |
|------|---------|
| **Company email address** | hello@balance.ae |
| **Company phone number** | +971 4 123 4567 |

---

## Step 1 — Create a Free EmailJS Account

1. Go to **https://www.emailjs.com**
2. Click **Sign Up** → create an account with your company email
3. You're on the **Free plan** by default (200 emails/month — plenty for a catering inquiry form)

---

## Step 2 — Add an Email Service

1. In your EmailJS dashboard, go to **Email Services** → **Add New Service**
2. Choose your email provider:
   - **Gmail** (recommended if using Google Workspace / Gmail)
   - **Outlook / Office 365**
   - **Yahoo Mail**
   - **Custom SMTP** (for any other provider)
3. Follow the on-screen instructions to connect your inbox
4. Click **Send Test Email** to verify it works
5. Copy your **Service ID** — looks like `service_abc1234`

---

## Step 3 — Create an Email Template

1. Go to **Email Templates** → **Create New Template**
2. Set the **To Email** field to your company email (e.g. `hello@balance.ae`)
3. Set the **Subject** to something like:
   ```
   New Inquiry from {{from_name}} — Balance Website
   ```
4. Paste this as the **Body** (HTML or plain text):

```
New catering inquiry received from the Balance website.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:             {{from_name}}
Phone:            {{from_phone}}
Email:            {{from_email}}
Service Required: {{service}}
Event Date:       {{event_date}}
Number of Guests: {{guests}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Reply directly to this email to respond to {{from_name}}.
Sent via Balance Website Contact Form
```

5. Set **Reply To** to `{{reply_to}}` — this means when you hit Reply in your inbox, it goes directly to the customer
6. Click **Save** → Copy your **Template ID** — looks like `template_xyz9876`

---

## Step 4 — Get Your Public Key

1. In EmailJS dashboard → **Account** → **General**
2. Copy your **Public Key** — looks like `abc123XYZxxxxxxxxxxxx`

---

## Step 5 — Configure the Website

### Option A — Local Development (.env.local)

Edit the file `/balance-website/.env.local`:

```env
VITE_EMAILJS_SERVICE_ID=service_abc1234
VITE_EMAILJS_TEMPLATE_ID=template_xyz9876
VITE_EMAILJS_PUBLIC_KEY=abc123XYZxxxxxxxxxxxx

VITE_COMPANY_PHONE=+971 4 123 4567
VITE_COMPANY_EMAIL=hello@balance.ae
```

Then run: `npm run dev`

### Option B — Vercel Deployment (Production)

1. In your Vercel project → **Settings** → **Environment Variables**
2. Add each variable:

| Variable Name | Your Value |
|--------------|------------|
| `VITE_EMAILJS_SERVICE_ID` | `service_abc1234` |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_xyz9876` |
| `VITE_EMAILJS_PUBLIC_KEY` | `abc123XYZxxxxxxxxxxxx` |
| `VITE_COMPANY_PHONE` | `+971 4 123 4567` |
| `VITE_COMPANY_EMAIL` | `hello@balance.ae` |

3. Set **Environment** to `Production` (and optionally Preview)
4. Click **Save** → **Redeploy**

---

## Step 6 — Test It

1. Open the website
2. Fill in the contact form with your own name/email
3. Submit
4. Check your inbox — the inquiry should arrive within seconds

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Form submits but no email arrives | Check spam folder; verify Service ID and Template ID are correct |
| Console error: "The public key is invalid" | Re-copy your Public Key from EmailJS Account → General |
| Form shows error state | Open browser DevTools → Console for the exact error message |
| Emails stop after 200/month | Upgrade to EmailJS Personal plan ($15/month for 1,000 emails) |

---

## Security Notes

- Your EmailJS Public Key is safe to expose in frontend code — it's designed to be public
- EmailJS rate-limits abuse automatically
- The `.env.local` file is in `.gitignore` and will NOT be committed to GitHub
- Only add keys to Vercel dashboard, not to any public file

---

## Optional Enhancements

- **Auto-reply to customer:** Create a second template in EmailJS that sends a confirmation to `{{from_email}}` when they submit
- **WhatsApp notifications:** Use Make.com or Zapier to forward EmailJS notifications to WhatsApp Business
- **CRM integration:** Connect EmailJS to HubSpot or Notion via Zapier

