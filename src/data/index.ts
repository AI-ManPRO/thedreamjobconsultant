import { islamTech } from './islam-tech';
import { essamConstruction } from './essam-construction';
import { omarConstruction } from './omar-construction';
import { CaseStudy } from './types';

// Export Types for easy access
export * from './types';

// Registry Map for Details Page (O(1) lookup)
export const caseStudiesData: Record<string, CaseStudy> = {
    [islamTech.id]: islamTech,
    [essamConstruction.id]: essamConstruction,
    [omarConstruction.id]: omarConstruction,
};

// List for Case Studies Page (Preserves order)
export const caseStudiesList: CaseStudy[] = [
    islamTech,
    essamConstruction,
    omarConstruction,
];
