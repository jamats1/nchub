# Vercel Deployment

## Required Environment Variables

Add these in **Vercel Dashboard → Project → Settings → Environment Variables** (for Production, Preview, and Development):

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | ✅ | Your Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | ✅ | Dataset name (e.g. `production`) |
| `NEXT_PUBLIC_SANITY_ORG_ID` | ✅ | Sanity organization ID |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | ✅ | Clerk publishable key |
| `CLERK_SECRET_KEY` | ✅ | Clerk secret key |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | For checkout | Stripe publishable key |
| `STRIPE_SECRET_KEY` | For checkout | Stripe secret key |
| `STRIPE_WEBHOOK_SECRET` | For checkout | Stripe webhook signing secret |
| `NEXT_PUBLIC_APP_URL` | Optional | Production URL (Vercel sets `VERCEL_URL`) |
| `SANITY_API_WRITE_TOKEN` | For webhooks | Sanity write token (if using webhooks) |

**The build will fail** if `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, or `NEXT_PUBLIC_SANITY_ORG_ID` are not set.

## Post-Deploy Checklist

- [ ] Update Stripe webhook URL to `https://yourdomain.com/api/webhooks/stripe`
- [ ] Add production domain to Clerk allowed origins
- [ ] Seed Sanity: `pnpm run seed:sanity` (run locally with production dataset)
