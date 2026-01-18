const fs = require('fs');
const path = require('path');

const file = 'mastering-the-technical-interview.ts';
const postsDir = path.join(__dirname, 'src', 'data', 'posts');
const content = fs.readFileSync(path.join(postsDir, file), 'utf8');

console.log('File size:', content.length, 'bytes');

const startMarker = 'content: `';
const startIndex = content.indexOf(startMarker);
console.log('Start Index:', startIndex);

if (startIndex !== -1) {
    const contentStart = startIndex + startMarker.length;
    const rest = content.substring(contentStart);

    // Regex for end
    const endMatch = rest.match(/`,\s*\n\s*[a-z]+:/);
    console.log('End Match Index:', endMatch ? endMatch.index : 'Not found');

    if (endMatch) {
        let rawContent = rest.substring(0, endMatch.index);
        console.log('Extracted Content Length:', rawContent.length);
        console.log('--- START OF CONTENT ---');
        console.log(rawContent.substring(0, 200));
        console.log('--- END OF CONTENT ---');
        console.log(rawContent.substring(rawContent.length - 200));

        const textContent = rawContent.replace(/<[^>]*>/g, ' ');
        const cleanText = textContent.replace(/\s+/g, ' ').trim();
        console.log('Word Count:', cleanText.split(' ').length);
    } else {
        console.log('Using fallback lastIndexOf(`)');
        const lastBacktick = rest.lastIndexOf('`');
        console.log('Last Backtick Index:', lastBacktick);
        if (lastBacktick !== -1) {
            let rawContent = rest.substring(0, lastBacktick);
            console.log('Extracted Content Length:', rawContent.length);
            const textContent = rawContent.replace(/<[^>]*>/g, ' ');
            const cleanText = textContent.replace(/\s+/g, ' ').trim();
            console.log('Word Count:', cleanText.split(' ').length);
        }
    }
}
