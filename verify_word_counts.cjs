const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'src', 'data', 'posts');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.ts'));

console.log('Generating Blog Post Word Count Report...\n');

const posts = [];

files.forEach(file => {
    const content = fs.readFileSync(path.join(postsDir, file), 'utf8');

    // Extract ID
    const idMatch = content.match(/id:\s*['"](\d+)['"]/);
    const id = idMatch ? parseInt(idMatch[1]) : 999;

    // Extract Title
    const titleMatch = content.match(/title:\s*['"](.*?)['"]/);
    const title = titleMatch ? titleMatch[1] : file;

    let wordCount = 0;
    const startMarker = 'content: `';
    const startIndex = content.indexOf(startMarker);

    if (startIndex !== -1) {
        const contentStart = startIndex + startMarker.length;
        const rest = content.substring(contentStart);

        // Robust end matching: Look for the closing backtick followed by a comma
        const endMatch = rest.match(/`,\s*\r?\n\s*[a-z]+:/);

        if (endMatch) {
            let rawContent = rest.substring(0, endMatch.index);
            // Remove HTML tags
            const textContent = rawContent.replace(/<[^>]*>/g, ' ');
            // Remove extra whitespace/newlines
            const cleanText = textContent.replace(/\s+/g, ' ').trim();
            wordCount = cleanText.split(' ').length;
        } else {
            // Fallback
            const lastBacktick = rest.lastIndexOf('`');
            if (lastBacktick !== -1) {
                let rawContent = rest.substring(0, lastBacktick);
                const textContent = rawContent.replace(/<[^>]*>/g, ' ');
                const cleanText = textContent.replace(/\s+/g, ' ').trim();
                wordCount = cleanText.split(' ').length;
            }
        }
    }

    posts.push({ id, title, file, wordCount });
});

// Sort by Word Count (Ascending)
posts.sort((a, b) => a.wordCount - b.wordCount);

// Output Markdown Table
console.log('| ID | Word Count | Post Title | File Name |');
console.log('|---:|-----------:|:-----------|:----------|');

posts.forEach(p => {
    console.log(`| ${p.id} | ${p.wordCount} | ${p.title} | ${p.file} |`);
});

console.log('\nTotal Posts:', posts.length);
