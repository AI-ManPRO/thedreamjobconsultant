const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'src/data/posts');

// List of slugs we have images for
const targetSlugs = [
    'fractional-c-suite-guide',
    'art-of-resignation',
    'employee-to-consultant-mindset',
    'digital-hygiene-job-search',
    'emotional-intelligence-interview',
    'leading-remote-teams-guide',
    'return-to-office-negotiation',
    'decoding-company-culture',
    'analyzing-rejection-feedback',
    'alumni-network-advantage',
    'cv-vs-resume-difference',
    'types-of-resumes-explained',
    'resumes-and-cover-letters-guide',
    'soft-skills-vs-hard-skills',
    'linkedin-profile-optimization',
    'hiring-process-black-box-revealed',
    'recruiter-vs-reverse-recruiter',
    'job-boards-vs-niche-sites',
    'applicant-numbers-truth',
    'job-search-strategy-funnel',
    'types-of-interviews-explained',
    'mastering-phone-screen',
    'ultimate-interview-prep-checklist',
    'fresh-grad-no-experience-guide',
    'do-you-need-career-coach',
    'job-search-is-full-time-job',
    'stigma-of-unemployment',
    'mental-health-job-search-depression',
    'why-you-struggle-to-ask-for-help',
    'who-are-you-without-job-title'
];

targetSlugs.forEach(slug => {
    const filePath = path.join(postsDir, `${slug}.ts`);
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Regex to find the placeholder block
    // Matches from <!-- Placeholder to the closing </div>
    // We use [\s\S]*? to match across newlines
    const regex = /(<!-- Placeholder[\s\S]*?<div[\s\S]*?\(Image:([\s\S]*?)\)[\s\S]*?<\/div>)/g;

    if (regex.test(content)) {
        content = content.replace(regex, (match, fullBlock, description) => {
            // Clean up description
            const altText = description.trim().replace(/"/g, '&quot;');
            const imagePath = `/images/blog/${slug}-inner-1.png`;

            console.log(`Replacing in ${slug}: ${altText}`);

            // Return only the image tag, ensuring we replace the entire block
            return `    <img src="${imagePath}" alt="${altText}" class="w-full rounded-lg shadow-lg my-8" />`;
        });

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${slug}.ts`);
    } else {
        console.log(`No placeholder found in ${slug}.ts`);
        // Debug: print a snippet to see what's there
        const snippet = content.match(/<!-- Placeholder[\s\S]{0,100}/);
        if (snippet) console.log(`Found snippet: ${snippet[0]}`);
    }
});
