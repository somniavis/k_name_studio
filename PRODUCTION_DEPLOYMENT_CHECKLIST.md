# 🚀 Production Deployment Checklist

## ⚠️ CRITICAL: Gumroad Test Mode Issue

### Problem
Your production site shows **TEST PAYMENT** mode from Gumroad because either:
1. Your Gumroad product is in TEST mode, or
2. The `NODE_ENV` environment variable is set incorrectly

---

## ✅ Step-by-Step Fix

### 1. Fix Gumroad Product Mode (MOST IMPORTANT!)

**Go to Gumroad Dashboard:**
1. Visit: https://app.gumroad.com/products
2. Click on your product: "Korean Name Studio Premium" or "pay"
3. Look for the **"Test mode"** toggle/switch
4. **MAKE SURE IT'S OFF** (should show "Live mode")
5. If it says "Test mode is ON", click to turn it OFF
6. Save changes

**⚠️ This is the #1 reason for test payments showing in production!**

---

### 2. Verify Gumroad Product URL

Your current URL: `https://knamestudio.gumroad.com/l/pay`

**Verify this is correct:**
1. Go to https://app.gumroad.com/products
2. Click on your product
3. Copy the "Share link" or "Product URL"
4. It should match: `https://knamestudio.gumroad.com/l/pay`
5. If different, update `.env.local` and Vercel environment variables

---

### 3. Set Vercel Environment Variables

**Go to Vercel Dashboard:**
1. Visit: https://vercel.com/dashboard
2. Select your project: `k-name-studio`
3. Go to: Settings → Environment Variables
4. Add/Update these variables:

```bash
# Required Variables
NEXT_PUBLIC_GUMROAD_PRODUCT_URL=https://knamestudio.gumroad.com/l/pay
GUMROAD_WEBHOOK_SECRET=your_actual_webhook_secret_from_gumroad
NEXT_PUBLIC_BASE_URL=https://www.k-name-studio.com

# Optional (for debugging)
# NODE_ENV=production  # Let Vercel set this automatically
```

**How to get GUMROAD_WEBHOOK_SECRET:**
1. Go to: https://app.gumroad.com/settings/advanced
2. Scroll to "Webhooks" section
3. Find your webhook for: `https://www.k-name-studio.com/api/gumroad/webhook`
4. Copy the "Secret" value
5. Paste it in Vercel environment variables

**⚠️ IMPORTANT:** After adding variables, click "Redeploy" in Vercel!

---

### 4. Verify Webhook Configuration

**In Gumroad Dashboard:**
1. Go to: https://app.gumroad.com/settings/advanced
2. Scroll to "Webhooks" section
3. Verify webhook URL is: `https://www.k-name-studio.com/api/gumroad/webhook`
4. NOT: `https://k-name-studio.vercel.app/api/gumroad/webhook`
5. Update if needed

**Webhook Events to Enable:**
- ✅ `sale` (when payment completes)
- ✅ `refund` (optional, for handling refunds)

---

### 5. Test in Production

**After deploying:**

1. **Clear your browser cache** (important!)
2. Go to: https://www.k-name-studio.com
3. Generate a free Korean name
4. Click "Unlock Premium"
5. Payment modal should open
6. Click "Pay on Gumroad"
7. **Verify it says "LIVE PAYMENT" not "TEST PAYMENT"**

**If still showing TEST:**
- Double-check Gumroad product is in Live mode (Step 1)
- Clear browser cache completely
- Try incognito/private browsing mode
- Wait 5 minutes for Vercel deployment to complete

---

### 6. Test Complete Payment Flow

**Full end-to-end test:**

1. Generate Korean name
2. Click "Unlock Premium"
3. Complete payment (you'll be charged for real!)
4. Click "Confirm Payment" button
5. Premium names should unlock immediately

**⚠️ You will be charged! Request refund after testing:**
- Go to: https://app.gumroad.com/sales
- Find your test sale
- Click "Refund"

---

## 🔍 Debugging

### If still showing TEST payments:

**Check Gumroad Product:**
```bash
# In browser console on payment page:
console.log(process.env.NEXT_PUBLIC_GUMROAD_PRODUCT_URL)
# Should output: https://knamestudio.gumroad.com/l/pay
```

**Check Vercel Deployment:**
1. Go to Vercel dashboard
2. Click on latest deployment
3. Go to "Environment Variables" tab
4. Verify `NEXT_PUBLIC_GUMROAD_PRODUCT_URL` is correct
5. If changed, click "Redeploy"

**Check Browser Console:**
1. Open payment modal
2. Open browser DevTools (F12)
3. Go to Console tab
4. Look for Gumroad URL being loaded
5. Verify it doesn't have `?wanted=true` parameter (that's test mode)

---

## 📝 Common Issues

### Issue: "Test mode" appears in production

**Solution:**
1. ✅ Gumroad product must be in Live mode (not Test)
2. ✅ Clear browser cache
3. ✅ Redeploy in Vercel after env variable changes

### Issue: Webhook not received

**Solution:**
1. ✅ Verify webhook URL: `https://www.k-name-studio.com/api/gumroad/webhook`
2. ✅ Check Gumroad webhook logs (Settings → Advanced → Webhooks)
3. ✅ Verify `GUMROAD_WEBHOOK_SECRET` matches in Vercel

### Issue: "Confirm Payment" doesn't work

**Solution:**
1. ✅ Check Vercel function logs for errors
2. ✅ Verify payment session was created
3. ✅ Test webhook manually with Gumroad ping

---

## ✨ After Successful Deployment

**Checklist:**
- [ ] Gumroad product is in LIVE mode
- [ ] Test payment shows "LIVE" not "TEST"
- [ ] Webhook receives payment notifications
- [ ] "Confirm Payment" button works
- [ ] Premium content unlocks correctly
- [ ] Mobile devices work correctly
- [ ] All 10 languages tested

---

## 🆘 Need Help?

**Gumroad Support:**
- Help Center: https://help.gumroad.com
- Webhook Docs: https://help.gumroad.com/article/264-webhooks

**Vercel Support:**
- Documentation: https://vercel.com/docs
- Environment Variables: https://vercel.com/docs/projects/environment-variables

---

**Last Updated:** 2025-10-20
**Domain:** https://www.k-name-studio.com
**Previous Domain:** https://k-name-studio.vercel.app
