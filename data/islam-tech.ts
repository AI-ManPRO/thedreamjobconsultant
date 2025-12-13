import { CaseStudy } from './types';

export const islamTech: CaseStudy = {
    id: 'islam-tech',
    name: 'Islam',
    role: 'Senior Laravel Developer',
    title: 'From Cairo Freelancer to Senior European Tech Lead',

    // List View
    shortDesc: 'A strategic pivot from local freelance work to high-paying remote European contracts.',
    icon: 'fas fa-laptop-code',
    route: 'Cairo → Europe (Remote)',
    salaryIncrease: 'Secured €100k Annual Salary Offer',
    offers: 'Offers from Munich, UK, & Canada',
    quote: '"Within days of optimizing the profile, Islam received opportunities in Germany and the UK."',

    // Detail View
    location: 'Cairo → Remote (Germany/UK)',
    salary: '€100k+ Total Compensation',
    challenge: 'Islam was a highly skilled developer stuck in the local market salary cap. Despite having senior-level skills, his resume was cluttered with freelance projects that didn\'t communicate "Enterprise Leader" to European recruiters.',
    strategy: [
        'Reframed freelance history as "Consultancy Leadership" to show ownership and scale.',
        'Optimized LinkedIn for "Remote" and "Laravel" keywords in the DACH (Germany/Austria/Switzerland) region.',
        'Targeted CTOs directly using cold outreach scripts focusing on immediate value delivery.'
    ],
    results: [
        '3 Interviews in the first week.',
        'Offers from a Munich startup and a UK Fintech.',
        'Accepted a fully remote role with a €100k package.'
    ],
    testimonial: "I never thought a remote role in Europe was possible without relocating. The strategy changed how I viewed my own career. I'm not just a coder anymore; I'm a consultant.",
    evidence: [
        {
            id: 'cairo-lead',
            type: 'linkedin',
            label: 'Opportunity #1: Cairo Lead',
            desc: 'Recruitment Consultant "Hossam" reaching out for a PHP-Laravel full-stack role in Cairo.',
            image: '/screenshots/islam/evidence-islam-1.png'
        },
        {
            id: 'germany-offer',
            type: 'linkedin',
            label: 'Opportunity #2: Germany (€100k)',
            desc: 'Recruiter "Reece" offering Senior PHP role in Munich. Package: €75k-€100k + Relocation & Visa.',
            image: '/screenshots/islam/evidence-islam-2.png'
        },
        {
            id: 'contract-role',
            type: 'linkedin',
            label: 'Opportunity #3: Contract Role',
            desc: 'Founder "Tamer" discussing a contract-to-hire Lead Developer role for a marketing platform.',
            image: '/screenshots/islam/evidence-islam-3.png'
        },
        {
            id: 'hr-inquiry',
            type: 'linkedin',
            label: 'Opportunity #4: HR Inquiry',
            desc: 'HR Executive "Prabu" requesting CV and WhatsApp details for immediate submission.',
            image: '/screenshots/islam/evidence-islam-4.png'
        },
        {
            id: 'noida-remote',
            type: 'linkedin',
            label: 'Opportunity #5: Noida/Remote',
            desc: 'HR Executive "Jagriti" offering React/Vue profile. Islam negotiated for full remote options.',
            image: '/screenshots/islam/evidence-islam-5.png'
        },
        {
            id: 'uk-lead',
            type: 'linkedin',
            label: 'Opportunity #6: UK Lead Role',
            desc: 'Recruitment Manager "Karen" discussing a London-based role. Salary negotiation around £4,000/month.',
            image: '/screenshots/islam/evidence-islam-6.png'
        },
        {
            id: 'mumbai-senior',
            type: 'linkedin',
            label: 'Opportunity #7: Mumbai Senior',
            desc: 'IT Recruiter "Basavaraj" seeking Senior Backend Developer. Islam positioned for remote work.',
            image: '/screenshots/islam/evidence-islam-7.png'
        },
        {
            id: 'ceo-outreach',
            type: 'linkedin',
            label: 'Opportunity #8: CEO Outreach',
            desc: 'CEO "Matthias" reached out directly: "Your tech stack is a great fit." Encouraged application.',
            image: '/screenshots/islam/evidence-islam-8.png'
        },
        {
            id: 'saudi-remote',
            type: 'email',
            label: 'Opportunity #9: Saudi Remote',
            desc: 'Managing Director "Soha" offering a Senior Full Stack role for a Saudi company, working remotely from Egypt.',
            image: '/screenshots/islam/evidence-islam-9.png'
        }
    ]
};
