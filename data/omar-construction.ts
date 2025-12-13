import { CaseStudy } from './types';

export const omarConstruction: CaseStudy = {
    id: 'omar-construction',
    name: 'Omar',
    role: 'Construction Planning Engineer',
    title: 'Breaking Industry Barriers: From Local Engineer to High-Demand Strategist',

    // List View
    shortDesc: 'Improving a standard engineering profile to secure 7 interview offers including Dubai C-Suite outreach.',
    icon: 'fas fa-drafting-compass',
    route: 'Cairo → Dubai/Cairo (Stepping Stone)',
    salaryIncrease: 'Nearly Double Previous Salary',
    offers: '7 Offers (Cairo, Dubai, Abu Dhabi)',
    quote: '"The opportunities for him started rolling in, with the offers steadily increasing afterward."',

    // Detail View
    location: 'Cairo → Gulf (Targeted)',
    salary: '2x Salary Increase',
    challenge: 'Omar had just 2 years of experience as a Construction Planning Engineer. He was targeting the Gulf market (Dubai/Saudi) but was struggling to get noticed against more senior candidates. The challenge was to prove the system works outside of Tech, for a "Standard" engineering profile.',
    strategy: [
        'Enrolled in the high-tier "Consulting Program" to completely overhaul his positioning.',
        'Reframed "2 Years Experience" as "High-Impact Project Control" to appeal to senior management.',
        'Targeted decision makers (CEOs/COOs) directly rather than applying through HR portals.',
        'Broadened the search to include "Project Controls" and "Contracts Manager" roles to leverage transferable skills.'
    ],
    results: [
        'Received 3 interview invitations within the first 10 days.',
        'Approached by COOs and CEOs of multinational firms in Dubai and Canada.',
        'Accepted a role at a top Egyptian firm with nearly double the salary, strategically using it as a stepping stone.'
    ],
    testimonial: "The system worked faster than expected. I went from zero responses to having CEOs message me on LinkedIn.",
    evidence: [
        {
            id: 'cairo-contracts-manager',
            type: 'linkedin',
            label: 'Opportunity #1: Cairo Contracts Manager',
            desc: 'Connect with a clear opportunity for a Construction Contracts Manager role in Cairo.',
            image: '/screenshots/omar/evidence-omar-1.png'
        },
        {
            id: 'dubai-planner-journey',
            type: 'linkedin', // Changed to represent the role
            label: 'Opportunity #2: Dubai Multinational Journey',
            desc: 'Full recruitment journey: Interview Invitation -> Role Details -> Shortlisted status.',
            image: '/screenshots/omar/evidence-omar-2-1.png', // Main thumbnail
            images: [
                '/screenshots/omar/evidence-omar-2-1.png',
                '/screenshots/omar/evidence-omar-2-2.png',
                '/screenshots/omar/evidence-omar-2-3.png'
            ]
        },
        {
            id: 'cairo-planning-eng',
            type: 'linkedin',
            label: 'Opportunity #3: Major Egyptian Firm',
            desc: 'Outreach for a Construction Planning Engineer position.',
            image: '/screenshots/omar/evidence-omar-3.png'
        },

        {
            id: 'dubai-coo-outreach',
            type: 'linkedin',
            label: 'Opportunity #4: COO Outreach',
            desc: 'A COO of a Dubai firm reached out directly to initiate the hiring process.',
            image: '/screenshots/omar/evidence-omar-4.png'
        },
        {
            id: 'dubai-canada-ceo',
            type: 'linkedin',
            label: 'Opportunity #5: CEO Outreach',
            desc: 'CEO of a firm with branches in Canada and UAE contacted Omar for a Planning Engineer role.',
            image: '/screenshots/omar/evidence-omar-5.png'
        },
        {
            id: 'cairo-project-controls',
            type: 'linkedin',
            label: 'Opportunity #6: Project Controls',
            desc: 'Opportunity with a company operating in both Egypt and Germany.',
            image: '/screenshots/omar/evidence-omar-6.png',
            images: [
                '/screenshots/omar/evidence-omar-6.png',
                '/screenshots/omar/evidence-omar-6-2.jpg'
            ]
        },
        {
            id: 'cairo-head-cost',
            type: 'linkedin',
            label: 'Opportunity #7: Head of Cost Control',
            desc: 'Recruited for a senior "Head of Cost Control" position despite only having 2 years experience.',
            image: '/screenshots/omar/evidence-omar-7.png'
        },
        {
            id: 'abudhabi-oil-gas',
            type: 'linkedin',
            label: 'Opportunity #8: Abu Dhabi Oil & Gas',
            desc: 'WhatsApp discussion regarding an Oil & Gas opportunity in Abu Dhabi.',
            image: '/screenshots/omar/evidence-omar-8.jpeg'
        }
    ]
};
