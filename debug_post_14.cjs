const fs = require('fs');
const path = require('path');

const file = 'executive-bio-vs-resume.ts';
const postsDir = path.join(__dirname, 'src', 'data', 'posts');
const content = fs.readFileSync(path.join(postsDir, file), 'utf8');

console.log('File size:', content.length, 'bytes');

const startMarker = 'content: `';
const startIndex = content.indexOf(startMarker);

if (startIndex !== -1) {
    const contentStart = startIndex + startMarker.length;
    const rest = content.substring(contentStart);

    const endMatch = rest.match(/`,\s*\r?\n\s*[a-z]+:/);

    if (endMatch) {
        let rawContent = rest.substring(0, endMatch.index);
        console.log('Extracted Content Length:', rawContent.length);
        console.log('--- START ---');
        console.log(rawContent.substring(0, 50));
        console.log('--- END ---');
        console.log(rawContent.substring(rawContent.length - 50));

        const textContent = rawContent.replace(/<[^>]*>/g, ' ');
        const cleanText = textContent.replace(/\s+/g, ' ').trim();
        console.log('Word Count:', cleanText.split(' ').length);
    } else {
        console.log('End match not found.');
    }
}
