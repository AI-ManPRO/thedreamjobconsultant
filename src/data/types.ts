export interface EvidenceItem {
    id: string; // Unique URL ID
    type: string; // 'email' | 'linkedin' | 'document' | 'stats'
    label: string;
    desc: string;
    image?: string;
    images?: string[]; // Optional array for multi-image evidence
}

export interface CaseStudy {
    id: string; // URL Slug

    // List View properties
    name: string;
    role: string;
    shortDesc: string;
    icon: string;
    route: string;
    salaryIncrease: string;
    offers: string;
    quote: string;

    // Detail View properties
    title: string;
    location: string;
    salary: string; // Detailed compensation text
    challenge: string;
    strategy: string[];
    results: string[];
    testimonial: string;
    evidence: EvidenceItem[];
}
