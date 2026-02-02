const fs = require('fs');
const path = require('path');

const postsDir = path.join(process.cwd(), 'src', 'data', 'posts');
const files = fs.readdirSync(postsDir);

files.forEach(file => {
    if (!file.endsWith('.ts')) return;
    const content = fs.readFileSync(path.join(postsDir, file), 'utf8');
    const match = content.match(/image:\s*['"]([^'"]+)['"]/);
    if (match) {
        console.log(`${file}: ${match[1]}`);
    } else {
        console.log(`${file}: NO_IMAGE`);
    }
});
