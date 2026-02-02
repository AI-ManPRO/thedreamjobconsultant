const fs = require('fs');
const path = require('path');
const glob = require('glob');

const postsDir = path.join(__dirname, 'src/data/posts');
const excludedFiles = ['5-signs-you-need-a-career-coach.ts'];

const sidebarAdsConfig = `
  sidebarAds: {
    ad1: {
      type: 'placeholder',
      title: 'Affiliate Ad Space',
      description: 'Reserved for future partnerships'
    },
    ad2: {
      type: 'placeholder',
      title: 'Affiliate Ad Space',
      description: 'Reserved for future partnerships'
    }
  },`;

function updateFile(filePath) {
    const fileName = path.basename(filePath);
    if (excludedFiles.includes(fileName)) {
        console.log(`Skipping excluded file: ${fileName}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Check if sidebarAds already exists
    if (content.includes('sidebarAds:')) {
        console.log(`Skipping ${fileName}: sidebarAds already exists`);
        return;
    }

    // Try to insert before affiliateBooks
    if (content.includes('affiliateBooks:')) {
        content = content.replace('affiliateBooks:', `${sidebarAdsConfig}\n  affiliateBooks:`);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${fileName} (before affiliateBooks)`);
    } else {
        // Fallback: insert before the last closing brace of the object
        // Assuming the file ends with }; or similar
        const lastBraceIndex = content.lastIndexOf('};');
        if (lastBraceIndex !== -1) {
            const beforeBrace = content.substring(0, lastBraceIndex);
            const afterBrace = content.substring(lastBraceIndex);
            // Ensure we have a comma on the previous property if needed
            // Simple hack: add a comma to the insertion string start if we think we might need it, 
            // but simpler to just rely on the previous line having one or adding one.
            // Most reliable: Just insert before the last }

            // Let's try to match the last closing brace of the export object more robustly
            content = content.replace(/(\n)(\s*)\};(\s*)$/, `$1$2${sidebarAdsConfig}\n};$3`);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${fileName} (before end)`);
        } else {
            console.error(`Could not find insertion point for ${fileName}`);
        }
    }
}

// Find all .ts files in the directory
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
    updateFile(path.join(postsDir, file));
});
