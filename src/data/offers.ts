// ==========================================
// CONFIGURATION:
// Set this to TRUE to show the "Active Offers" page.
// Set this to FALSE to show the "No Offers / Waitlist" page.
// ==========================================
export const showOffers = true;

export interface Offer {
    id: string;
    title: string;
    description: string;
    discountPercentage?: number;
    originalPrice?: number;
    discountedPrice?: number;
    expiryDate?: string; // ISO string
    link: string;
    image?: string;
    features?: string[];
}


// Helper to calculate discount percentage or discounted price automatically
function createOffer(
    data: Omit<Offer, 'discountPercentage' | 'discountedPrice'> & {
        originalPrice: number;
        discountPercentage?: number;
        discountedPrice?: number;
    }
): Offer {
    const { originalPrice, discountPercentage, discountedPrice, ...rest } = data;

    let finalDiscountedPrice = discountedPrice;
    let finalDiscountPercentage = discountPercentage;

    // Logic: 
    // 1. If discountedPrice is provided, calculate the percentage.
    // 2. If discountPercentage is provided (and no price), calculate the price.

    if (discountedPrice !== undefined) {
        // Calculate percentage: (Original - Discounted) / Original * 100
        finalDiscountPercentage = Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
    } else if (discountPercentage !== undefined) {
        // Calculate price: Original * (1 - Percentage/100)
        finalDiscountedPrice = Math.round(originalPrice * (1 - discountPercentage / 100));
    }

    return {
        ...rest,
        originalPrice,
        discountPercentage: finalDiscountPercentage,
        discountedPrice: finalDiscountedPrice,
    };
}

export const activeOffers: Offer[] = [
    createOffer({
        id: '1',
        title: 'Executive Resume Revamp',
        description: 'Get a completely rewritten, ATS-optimized executive resume that highlights your leadership impact. Limited slots available for this month.',
        originalPrice: 449,
        discountedPrice: 349, // Will calculate percentage ~22%
        expiryDate: '2026-03-15T23:59:59',
        link: '/services/resume-writing',
        features: ['ATS Optimization', 'Executive Summary', 'Unlimited Revisions', '48h Turnaround', 'Support For Up To One Month'],
        image: '/images/services/resume-writing.jpg'
    }),
    createOffer({
        id: '2',
        title: 'LinkedIn Profile Optimization',
        description: 'Transform your LinkedIn profile into a magnet for recruiters. Includes banner design, headline optimization, and SEO keyword strategy.',
        originalPrice: 599,
        discountedPrice: 469, // Will calculate percentage ~22%
        expiryDate: '2026-03-07T23:59:59',
        link: '/services/linkedin-profile',
        features: ['Headline Optimization', 'Banner Design', 'SEO Keyword Strategy', 'Profile Audit', 'Support For Up To One Month'],
        image: '/images/services/linkedin-profile.jpg'
    }),
    createOffer({
        id: '3',
        title: 'Interview Mastery Sessions',
        description: 'One-on-one mock interview coaching with real-time feedback. Master the "Tell me about yourself" question and behavioral interviews.',
        originalPrice: 599,
        discountedPrice: 419, // Will calculate percentage ~30%
        expiryDate: '2026-02-21T23:59:59',
        link: '/services/interview-prep',
        features: ['Mock Interview', 'Real-time Feedback', 'Answer Strategy', 'Body Language Tips', 'Support For Up To One Month'],
        image: '/images/services/interview-preparation.jpg'
    }),
    createOffer({
        id: '4',
        title: 'Strategic Networking & Hidden Job Market',
        description: 'Learn how to build a powerful professional network on LinkedIn and access the 80% of jobs that are never advertised.',
        originalPrice: 599,
        discountedPrice: 499, // Will calculate percentage ~25%
        expiryDate: '2026-02-28T23:59:59', // Active
        link: '/services/networking',
        features: ['Network Building Strategy', 'Outreach Scripts', 'Hidden Job Market Access', 'Informational Interview Guide', 'Support For Up To One Month'],
        image: '/images/services/professional-network.jpg'
    })
];
