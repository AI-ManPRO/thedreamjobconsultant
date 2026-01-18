const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'src', 'data', 'posts');
const imagesDir = path.join(__dirname, 'public', 'images', 'blog');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.ts'));
const availableImages = fs.readdirSync(imagesDir);

console.log('| ID | File | Has Inline Img | Main Image | Potential Body Image |');
console.log('|---:|:---|:---:|:---|:---|');

files.forEach(file => {
    const content = fs.readFileSync(path.join(postsDir, file), 'utf8');

    // Extract ID
    const idMatch = content.match(/id:\s*['"](\d+)['"]/);
    const id = idMatch ? parseInt(idMatch[1]) : 999;

    // Extract Slug (to guess body image)
    const slugMatch = content.match(/slug:\s*['"](.*?)['"]/);
    const slug = slugMatch ? slugMatch[1] : '';

    // Check for inline img
    const hasImg = content.includes('<img');

    // Extract Main Image
    const imgMatch = content.match(/image:\s*['"](.*?)['"]/);
    const mainImgPath = imgMatch ? imgMatch[1] : '';
    const mainImgName = path.basename(mainImgPath);

    // Guess Body Image
    // Pattern 1: [slug]-body.jpg
    let bodyImgCandidate = `${slug}-body.jpg`;
    let foundBody = availableImages.find(i => i === bodyImgCandidate);

    // Pattern 2: [main_image_name_no_ext]-body.jpg
    if (!foundBody && mainImgName) {
        const base = mainImgName.replace(/\.[^/.]+$/, "");
        const candidate2 = `${base}-body.jpg`;
        foundBody = availableImages.find(i => i === candidate2);
        if (foundBody) bodyImgCandidate = candidate2;
    }

    // Specific Overrides based on file list analysis
    if (!foundBody) {
        if (file.includes('5-signs')) bodyImgCandidate = 'team-meeting.jpg'; // Post 1
        if (file.includes('interview-mistakes')) bodyImgCandidate = 'interview-body.jpg'; // Post 4
        // Add more heuristics if needed
    }

    // Check if the guessed body image actually exists
    const bodyExists = availableImages.includes(bodyImgCandidate) || availableImages.includes(bodyImgCandidate.replace('.jpg', '.png'));

    console.log(`| ${id} | ${file} | ${hasImg ? 'YES' : 'NO'} | ${mainImgName} | ${bodyExists ? bodyImgCandidate : 'MISSING'} |`);
});
