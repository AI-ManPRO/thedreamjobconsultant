export const showDiscountedPricing = true;

export const pricingData = {
    flatFee: {
        title: "Flat Fee",
        originalPrice: 4000,
        discountedPrice: 2999, // Example discount
        priceSuffix: "/ one time",
        description: "Full service without the salary percentage.",
        paymentLink: "https://www.paypal.com/ncp/payment/96EML8KPWVN4E"
    },
    retainer: {
        title: "Retainer Model",
        originalPrice: 2000,
        discountedPrice: 1499, // Example discount
        priceSuffix: "/ first month",
        monthlyPrice: 1000, // This part is static in the text "then $1000 per month" but good to have if needed later
        paymentLink: "https://www.paypal.com/ncp/payment/WQHDH9X6YRSD4"
    },
    partnership: {
        title: "Partnership Model",
        originalPrice: 1500,
        discountedPrice: 999, // Example discount
        priceSuffix: "Upfront + 1 Month",
        paymentLink: "https://www.paypal.com/ncp/payment/RJW7MLTXJURN8"
    },
    tiered: {
        title: "Tiered Services",
        originalPrice: 600,
        discountedPrice: 499, // Example discount
        priceSuffix: "/ service",
        paymentLink: "/purchase-services" // Internal link
    }
};
