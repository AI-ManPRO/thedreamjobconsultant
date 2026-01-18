const fs = require('fs');
const path = require('path');
const postsDir = path.join(__dirname, 'src', 'data', 'posts');

try {
    const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.ts'));
    console.log(`Found ${files.length} files`);

    files.forEach(f => {
        const c = fs.readFileSync(path.join(postsDir, f), 'utf8');
        const idM = c.match(/id:\s*['"](\d+)['"]/);
        const id = idM ? idM[1] : '?';
        const titleM = c.match(/title:\s*['"](.*?)['"]/);
        const title = titleM ? titleM[1].substring(0, 30) : f;

        // Simple word count
        const words = c.split(/\s+/).length;
        console.log(`${id} | ${words} | ${title}`);
    });
} catch (e) {
    console.error(e);
}
