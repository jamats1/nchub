import React from "react";

export const PAYMENT_ICONS = {
  visa: "/svg-logos/payment/visa.png",
  visaFallback: "https://img.icons8.com/color/48/visa.png",
  mastercard: "/svg-logos/payment/mastercard.png",
  mastercardFallback: "https://img.icons8.com/color/48/mastercard.png",
  applePay: "/svg-logos/payment/apple-pay.png",
  applePayFallback: "https://img.icons8.com/color/48/apple-pay.png",
  googlePay: "/svg-logos/payment/google-pay.png",
  googlePayFallback: "https://img.icons8.com/color/48/google-pay.png",
  unionPay: "/svg-logos/payment/union-pay.png",
  unionPayFallback: "https://img.icons8.com/color/48/credit-card.png",
};

export const PARTNER_ICONS = {
  partner1: "/svg-logos/partners/partner-logo-1.png",
  partner1Fallback: "https://img.icons8.com/color/48/company.png",
  partner2: "/svg-logos/partners/partner-logo-2.png",
  partner2Fallback: "https://img.icons8.com/color/48/business.png",
  amazon: "/svg-logos/partners/amazon.png",
  amazonFallback: "https://img.icons8.com/color/48/amazon.png",
  dewalt: "/svg-logos/partners/dewalt.png",
  dewaltFallback: "https://img.icons8.com/color/48/drill.png",
  coastline: "/svg-logos/partners/coastline.png",
  coastlineFallback: "https://img.icons8.com/color/48/coast.png",
  formedFiber: "/svg-logos/partners/formed-fiber.png",
  formedFiberFallback: "https://img.icons8.com/color/48/fiber.png",
  eiffage: "/svg-logos/partners/eiffage.png",
  eiffageFallback: "https://img.icons8.com/color/48/construction.png",
  construtora: "/svg-logos/partners/construtora.png",
  construtoraFallback: "https://img.icons8.com/color/48/architectural.png",
  tsmc: "/svg-logos/partners/tsmc.png",
  tsmcFallback: "https://img.icons8.com/color/48/computer-chip.png",
};

export const PaymentIconsWithFallbacks = {
  visa: {
    src: PAYMENT_ICONS.visa,
    fallbackSrc: PAYMENT_ICONS.visaFallback,
    alt: "Visa",
  },
  mastercard: {
    src: PAYMENT_ICONS.mastercard,
    fallbackSrc: PAYMENT_ICONS.mastercardFallback,
    alt: "Mastercard",
  },
  applePay: {
    src: PAYMENT_ICONS.applePay,
    fallbackSrc: PAYMENT_ICONS.applePayFallback,
    alt: "Apple Pay",
  },
  googlePay: {
    src: PAYMENT_ICONS.googlePay,
    fallbackSrc: PAYMENT_ICONS.googlePayFallback,
    alt: "Google Pay",
  },
  unionPay: {
    src: PAYMENT_ICONS.unionPay,
    fallbackSrc: PAYMENT_ICONS.unionPayFallback,
    alt: "Union Pay",
  },
};

export const InlineSocialIcons = {
  Facebook: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Twitter: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  ),
  Instagram: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  YouTube: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  ),
};
