const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'src', 'data', 'posts');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.ts'));

console.log('Checking word counts for', files.length, 'posts...\n');

let totalWords = 0;
let passCount = 0;

files.forEach(file => {
    const content = fs.readFileSync(path.join(postsDir, file), 'utf8');

    // Extract content between backticks after "content:"
    // Matches content: `...` including newlines
    const match = content.match(/content:\s*`([\s\S]*?)`\s*,/);

    if (match && match[1]) {
        let rawContent = match[1];

        // Remove HTML tags
        const textContent = rawContent.replace(/<[^>]*>/g, ' ');

        // Remove extra whitespace and newlines
        const cleanText = textContent.replace(/\s+/g, ' ').trim();

        const wordCount = cleanText.split(' ').length;
        totalWords += wordCount;

        const status = wordCount >= 1200 ? 'PASS' : 'LOW'; // Using 1200 as a soft lower bound for "~1500"
        if (status === 'PASS') passCount++;

        console.log(`${status.padEnd(4)} | ${file.padEnd(40)} | ${wordCount} words`);
    } else {
        console.log(`ERR  | ${file.padEnd(40)} | Could not parse content`);
    }
});

const average = Math.round(totalWords / files.length);
console.log('\n----------------------------------------');
console.log(`Average Word Count: ${average}`);
console.log(`Posts Meeting Target (>1200): ${passCount}/${files.length}`);
