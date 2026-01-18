const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'src', 'data', 'posts');
const imagesDir = path.join(__dirname, 'public', 'images', 'blog');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.ts'));
const availableImages = fs.readdirSync(imagesDir);

// Manual mapping for posts without standard *-body.jpg pattern
const overrides = {
    'optimizing-your-linkedin-profile.ts': 'linkedin-content-body.jpg', // Post 2
    'mastering-the-technical-interview.ts': 'coding-session.jpg',      // Post 3 (Reuse main)
    'resume-stand-out-2026.ts': 'resume-2026.jpg',                     // Post 5 (Reuse main if needed, but it has YES)
    'resume-skills-guide.ts': 'resume-skills.jpg'                      // Post 6 (Reuse main if needed, but it has YES)
};

console.log('Starting Image Injection...');

files.forEach(file => {
    let content = fs.readFileSync(path.join(postsDir, file), 'utf8');

    // Skip if already has image
    if (content.includes('<img') || content.includes('<figure')) {
        console.log(`[SKIP] ${file} already has image.`);
        return;
    }

    // Determine Image to use
    // Extract Slug
    const slugMatch = content.match(/slug:\s*['"](.*?)['"]/);
    const slug = slugMatch ? slugMatch[1] : '';

    let bodyImgCandidate = `${slug}-body.jpg`;
    let bodyImgToUse = '';

    // Check if standard body image exists
    if (availableImages.includes(bodyImgCandidate)) {
        bodyImgToUse = bodyImgCandidate;
    } else if (overrides[file]) {
        bodyImgToUse = overrides[file];
    } else {
        // Try finding by main image name convention
        const imgMatch = content.match(/image:\s*['"](.*?)['"]/);
        if (imgMatch) {
            const mainBase = path.basename(imgMatch[1]).replace(/\.[^/.]+$/, "");
            const try2 = `${mainBase}-body.jpg`;
            if (availableImages.includes(try2)) {
                bodyImgToUse = try2;
            } else {
                // Final Fallback: Reuse Main Image
                bodyImgToUse = path.basename(imgMatch[1]);
            }
        }
    }

    if (!bodyImgToUse) {
        console.log(`[WARN] No image found for ${file}`);
        return;
    }

    console.log(`[FIX] Injecting ${bodyImgToUse} into ${file}`);

    // Injection Logic: content is inside backticks.
    // Try to find the Key Takeaways div closing tag </div>
    // Then find the next closing paragraph </p>
    // Insert after that.

    // Find the end of Key Takeaways div
    const keyTakeawaysEnd = content.indexOf('rounded-r-lg mb-8">');
    if (keyTakeawaysEnd !== -1) {
        // Find closing div for it (it starts with <div class... so we look for first </div> after the header?)
        // Actually, the structure is <div ...> ... </div>.
        // Let's just look for the first </div> after `content: \``
        const contentStart = content.indexOf('content: `');
        const searchArea = content.substring(contentStart);
        const firstDivClose = searchArea.indexOf('</div>'); // This closes the takeaways

        if (firstDivClose !== -1) {
            const absoluteDivClose = contentStart + firstDivClose + 6; // include </div>

            // Now look for the next </p> (Introduction paragraph)
            const nextP = content.indexOf('</p>', absoluteDivClose);
            const secondP = content.indexOf('</p>', nextP + 4);
            const thirdP = content.indexOf('</p>', secondP + 4);

            let insertPoint = -1;
            // Ideally after 2nd or 3rd paragraph
            if (thirdP !== -1) insertPoint = thirdP + 4;
            else if (secondP !== -1) insertPoint = secondP + 4;
            else if (nextP !== -1) insertPoint = nextP + 4;
            else insertPoint = absoluteDivClose;

            const htmlToInject = `
    <figure class="my-10">
      <img src="/images/blog/${bodyImgToUse}" alt="Guide illustration for ${slug}" class="rounded-xl shadow-lg w-full" />
      <figcaption class="text-center text-sm text-slate-500 mt-3">Visual guide for ${slug.replace(/-/g, ' ')}</figcaption>
    </figure>
`;

            const newContent = content.slice(0, insertPoint) + htmlToInject + content.slice(insertPoint);
            fs.writeFileSync(path.join(postsDir, file), newContent, 'utf8');
        } else {
            console.log(`[ERR] Could not find Key Takeaways div in ${file}`);
        }
    } else {
        // Fallback for posts without Key Takeaways (if any)
        // Just insert after first <p>...</p>
        const firstP = content.indexOf('</p>');
        if (firstP !== -1) {
            const insertPoint = firstP + 4;
            const htmlToInject = `
    <figure class="my-10">
      <img src="/images/blog/${bodyImgToUse}" alt="Guide illustration for ${slug}" class="rounded-xl shadow-lg w-full" />
      <figcaption class="text-center text-sm text-slate-500 mt-3">Visual guide for ${slug.replace(/-/g, ' ')}</figcaption>
    </figure>
`;
            const newContent = content.slice(0, insertPoint) + htmlToInject + content.slice(insertPoint);
            fs.writeFileSync(path.join(postsDir, file), newContent, 'utf8');
            console.log(`[FIX] Injected after first paragraph in ${file}`);
        } else {
            console.log(`[ERR] Could not find any paragraph in ${file}`);
        }
    }

});
