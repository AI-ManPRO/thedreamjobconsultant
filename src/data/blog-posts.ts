// IMPORTANT: When adding new blog posts, ensure the date is at least 1 month in the past relative to the current date.
// DO NOT use future dates.
// Ensure there is at least 1 week between published dates of any two posts.
import { post1 } from './posts/5-signs-you-need-a-career-coach';
import { post2 } from './posts/optimizing-your-linkedin-profile';
import { post3 } from './posts/mastering-the-technical-interview';
import { post4 } from './posts/5-common-interview-mistakes';
import { post5 } from './posts/resume-stand-out-2026';
import { post6 } from './posts/resume-skills-guide';
import { post7 } from './posts/job-search-social-media';
import { post8 } from './posts/what-is-reverse-recruiting';
import { post9 } from './posts/ai-in-job-search';
import { post10 } from './posts/salary-negotiation-strategies';
import { post11 } from './posts/navigating-career-transition';
import { post12 } from './posts/hidden-job-market';
import { post13 } from './posts/linkedin-content-strategy';
import { post14 } from './posts/executive-bio-vs-resume';
import { post15 } from './posts/answer-tell-me-about-yourself';
import { post16 } from './posts/dealing-with-employment-gaps';
import { post17 } from './posts/networking-for-introverts';
import { post18 } from './posts/first-90-days-success';
import { post19 } from './posts/remote-work-strategies';
import { post20 } from './posts/overcoming-ageism';
import { post21 } from './posts/personal-branding-guide';
import { post22 } from './posts/toxic-workplace-signs';
import { post23 } from './posts/modern-cover-letter-strategies';
import { post24 } from './posts/demystifying-headhunters';
import { post25 } from './posts/ats-proof-resume-format';
import { post26 } from './posts/2-hour-job-search';
import { post27 } from './posts/executive-compensation-guide';
import { post28 } from './posts/navigating-office-politics';
import { post29 } from './posts/backchannel-reference-check';
import { post30 } from './posts/landing-your-first-board-seat';
import { post31 } from './posts/high-performance-recovery';
import { post32 } from './posts/cold-email-playbook';
import { post33 } from './posts/career-portfolio-guide';
import { post34 } from './posts/fractional-c-suite-guide';
import { post35 } from './posts/art-of-resignation';
import { post36 } from './posts/employee-to-consultant-mindset';
import { post37 } from './posts/digital-hygiene-job-search';
import { post38 } from './posts/emotional-intelligence-interview';
import { post39 } from './posts/leading-remote-teams-guide';
import { post40 } from './posts/return-to-office-negotiation';
import { post41 } from './posts/decoding-company-culture';
import { post42 } from './posts/analyzing-rejection-feedback';
import { post43 } from './posts/alumni-network-advantage';
import { post44 } from './posts/cv-vs-resume-difference';
import { post45 } from './posts/types-of-resumes-explained';
import { post46 } from './posts/resumes-and-cover-letters-guide';
import { post47 } from './posts/soft-skills-vs-hard-skills';
import { post48 } from './posts/linkedin-profile-optimization';
import { post49 } from './posts/hiring-process-black-box-revealed';
import { post50 } from './posts/recruiter-vs-reverse-recruiter';
import { post51 } from './posts/job-boards-vs-niche-sites';
import { post52 } from './posts/applicant-numbers-truth';
import { post53 } from './posts/job-search-strategy-funnel';
import { post54 } from './posts/types-of-interviews-explained';
import { post55 } from './posts/mastering-phone-screen';
import { post56 } from './posts/ultimate-interview-prep-checklist';
import { post57 } from './posts/fresh-grad-no-experience-guide';
import { post58 } from './posts/do-you-need-career-coach';
import { post59 } from './posts/job-search-is-full-time-job';
import { post60 } from './posts/stigma-of-unemployment';
import { post61 } from './posts/mental-health-job-search-depression';
import { post62 } from './posts/why-you-struggle-to-ask-for-help';
import { post63 } from './posts/who-are-you-without-job-title';

export interface AffiliateBook {
  title: string;
  author: string;
  description: string;
  image: string;
  link: string;
  rating?: number;
  reviews?: number;
  paragraphIndex?: number;
}

export interface SidebarAdData {
  type: 'amazon' | 'custom' | 'image' | 'placeholder';
  title?: string;
  author?: string; // for book style
  description?: string;
  image?: string;
  link?: string;
  ctaText?: string;
  rating?: number;
  reviews?: number; // number of reviews
  bgColor?: string; // optional background override
}

export interface SmallAd {
  type: 'amazon' | 'placeholder';
  title?: string;
  image?: string;
  url?: string;
  price?: string;
  rating?: number;
  reviews?: number;
  id?: string; // For tracking
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  imagePosition?: string;
  affiliateBooks?: AffiliateBook[];
  sidebarAds?: {
    ad1?: SidebarAdData;
    ad2?: SidebarAdData;
  };
  smallAds?: SmallAd[];
}

export const blogPosts: BlogPost[] = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8,
  post9,
  post10,
  post11,
  post12,
  post13,
  post14,
  post15,
  post16,
  post17,
  post18,
  post19,
  post20,
  post21,
  post22,
  post23,
  post24,
  post25,
  post26,
  post27,
  post28,
  post29,
  post30,
  post31,
  post32,
  post33,
  post34,
  post35,
  post36,
  post37,
  post38,
  post39,
  post40,
  post41,
  post42,
  post43,
  post44,
  post45,
  post46,
  post47,
  post48,
  post49,
  post50,
  post51,
  post52,
  post53,
  post54,
  post55,
  post56,
  post57,
  post58,
  post59,
  post60,
  post61,
  post62,
  post63
];
