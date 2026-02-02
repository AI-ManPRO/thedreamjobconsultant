
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogPosts } from '../src/data/blog-posts';
import { caseStudiesList } from '../src/data/index';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://www.thedreamjobconsultant.com'; // Adjust if needed or keep relative

const staticRoutes = [
    '/',
    '/services',
    '/services/career-coaching',
    '/services/resume-writing',
    '/services/cover-letter',
    '/services/linkedin-profile',
    '/services/networking',
    '/services/interview-prep',
    '/services/salary-negotiation',
    '/services/hidden-job-market',
    '/services/market-research',
    '/services/application-management',
    '/services/digital-presence',
    '/process',
    '/case-studies',
    '/outplacement',
    '/pricing',
    '/three-models',
    '/faq',
    '/booking',
    '/booking-full',
    '/about',
    '/contact',
    '/terms-and-conditions',
    '/privacy-policy',
    '/refund-policy',
    '/cookies-policy',
    '/sitemap',
    '/blog',
    '/competitors-comparison',
    '/competitors-comparison/reverse-recruiting',
    '/competitors-comparison/resume-writing',
    '/competitors-comparison/linkedin-optimization',
    '/competitors-comparison/job-search'
];

const allUrls: string[] = [];

// Add static routes
staticRoutes.forEach(route => {
    allUrls.push(`${DOMAIN}${route}`);
});

// Add Blog Posts
blogPosts.forEach(post => {
    allUrls.push(`${DOMAIN}/blog/${post.slug}`);
});

// Add Case Studies and Evidence
caseStudiesList.forEach(study => {
    allUrls.push(`${DOMAIN}/case-studies/${study.id}`);

    // Add Evidence URLs
    if (study.evidence) {
        study.evidence.forEach(ev => {
            allUrls.push(`${DOMAIN}/case-studies/${study.id}/evidence/${ev.id}`);
        });
    }
});

// Write to file
const outputPath = path.join(__dirname, '..', 'all_urls.txt');
fs.writeFileSync(outputPath, allUrls.join('\n'));

console.log(`Successfully generated ${allUrls.length} URLs to ${outputPath}`);
