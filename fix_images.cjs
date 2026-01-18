const fs = require('fs');
const path = require('path');

const filesToFix = [
    'hiring-process-black-box-revealed.ts',
    'recruiter-vs-reverse-recruiter.ts',
    'job-boards-vs-niche-sites.ts',
    'applicant-numbers-truth.ts',
    'job-search-strategy-funnel.ts',
    'types-of-interviews-explained.ts',
    'mastering-phone-screen.ts',
    'ultimate-interview-prep-checklist.ts',
    'fresh-grad-no-experience-guide.ts',
    'do-you-need-career-coach.ts',
    'job-search-is-full-time-job.ts',
    'stigma-of-unemployment.ts',
    'mental-health-job-search-depression.ts',
    'why-you-struggle-to-ask-for-help.ts',
    'who-are-you-without-job-title.ts'
];

const dir = path.join(__dirname, 'src/data/posts');
const placeholder = "'/images/blog/career-coach-cover.jpg'";

filesToFix.forEach(file => {
    const filePath = path.join(dir, file);
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        // Regex to find image: '...'
        const regex = /image:\s*'\/images\/blog\/[^']+'/;
        if (regex.test(content)) {
            const newContent = content.replace(regex, `image: ${placeholder}`);
            fs.writeFileSync(filePath, newContent);
            console.log(`Updated ${file}`);
        } else {
            console.log(`No image match in ${file}`);
        }
    } catch (err) {
        console.error(`Error processing ${file}: ${err.message}`);
    }
});
