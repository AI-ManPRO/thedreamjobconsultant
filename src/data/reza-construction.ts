import { CaseStudy } from './types';

export const rezaConstruction: CaseStudy = {
    id: 'reza-construction',
    name: 'Reza',
    role: 'Construction Project Manager',
    title: 'Strategic Relocation: Securing Top Opportunities in the Water Sector',

    // List View
    shortDesc: 'Secured a $190k-$200k opportunity within 5 weeks of starting the reverse recruiting program.',
    icon: 'fas fa-hard-hat',
    route: 'Sydney → Gulf/Australia',
    salaryIncrease: '$190k - $200k Annual Package',
    offers: 'High-Value Opportunity in 5 Weeks',
    quote: '"This case shows the power of a strategic approach to job searching."',

    // Detail View
    location: 'Australia → Gulf/Australia',
    salary: '$190,000 - $200,000 Annually',
    challenge: 'Reza, a Construction Project Manager in the Water Sector with 10+ years of experience, wanted to explore relocation opportunities in the Gulf area and Australia. He needed a targeted approach to identify high-potential roles that matched his seniority and expertise.',
    strategy: [
        'Conducted in-depth industry and sector job market research.',
        'Optimized Resume and LinkedIn profile to highlight Water Sector expertise.',
        'Built a targeted professional network to uncover hidden opportunities.',
        'Executed a reverse recruiting strategy focused on high-value roles.'
    ],
    results: [
        'Secured an incredible job opportunity within just 5 weeks.',
        'Landed a position in Perth, Australia, despite the initial broad search.',
        'Achieved a salary range of $190,000 - $200,000 annually.'
    ],
    testimonial: "I saw an incredible job opportunity within 5 weeks of starting the journey.",
    evidence: [
        {
            id: 'reza-chat',
            type: 'whatsapp',
            label: 'Client Success Conversation',
            desc: 'Discussion demonstrating the effectiveness of the reverse recruiting strategy.',
            image: '/screenshots/reza/evidence-reza-chat.png'
        },
        {
            id: 'reza-opportunity',
            type: 'linkedin',
            label: 'Opportunity: $200k Role in Perth',
            desc: 'Details of the high-value opportunity secured in Perth, Australia, offering $190k-$200k annually.',
            image: '/screenshots/reza/evidence-reza-opportunity.png'
        }
    ]
};
