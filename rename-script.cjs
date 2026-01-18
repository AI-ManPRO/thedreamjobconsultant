
const fs = require('fs');
const path = require('path');

const renames = [
    {
        oldPath: 'public/screenshots/essam/Assystem Radicon (ASR) - KSA/FireShot Capture 001 - Job Opportunity - EPC Project Manager - essam.elshaer.jh@gmail.com - _ - mail.google.com.png',
        newPath: 'public/screenshots/essam/Assystem Radicon (ASR) - KSA/assystem-email.png'
    },
    {
        oldPath: 'public/screenshots/essam/Assystem Radicon (ASR) - KSA/FireShot Capture 001 - Daniel Aznar - LinkedIn - www.linkedin.com.png',
        newPath: 'public/screenshots/essam/Assystem Radicon (ASR) - KSA/assystem-linkedin.png'
    },
    {
        oldPath: 'public/screenshots/essam/Hill International/Project Manager position- Saudi Arabia- Hill International - essam.el_ - mail.google.com.png',
        newPath: 'public/screenshots/essam/Hill International/hill-pm-email-1.png'
    },
    {
        oldPath: 'public/screenshots/essam/Hill International/Hill International_ Application Received - essam.elshaer.jh@gmail.com_ - mail.google.com.png',
        newPath: 'public/screenshots/essam/Hill International/hill-application-received.png'
    },
    {
        oldPath: 'public/screenshots/essam/Al Nasr Contracting UAE - Project Director - Arzé Sakhat - LinkedIn - www.linkedin.com.png',
        newPath: 'public/screenshots/essam/al-nasr-contracting-linkedin.png'
    },
    {
        oldPath: 'public/screenshots/essam/Project Director - GHD - Abu Dhabi, UAE - Alfredo Rivera - 2023-10-10 14 39 04   .png',
        newPath: 'public/screenshots/essam/ghd-alfredo.png'
    },
    {
        oldPath: 'public/screenshots/essam/Construction Operations Manager - UCC - Taif, KSA - Muhammed Shakeel - 2024-01-27 22 09 12.png',
        newPath: 'public/screenshots/essam/ucc-shakeel.png'
    },
    {
        oldPath: 'public/screenshots/essam/Job opportunity as Engineering Department Director - Saudi location (_ - mail.google.com.png',
        newPath: 'public/screenshots/essam/engineering-director-email.png'
    },
    {
        oldPath: 'public/screenshots/essam/Head PM - Construction - Riyadh, KSA - George Semaan - 2024-01-28 11 35 51.png',
        newPath: 'public/screenshots/essam/head-pm-semaan.png'
    },
    {
        oldPath: 'public/screenshots/essam/Program Manager - Ahsa - Toufic Elkawam - 2023-12-07 19 46 08.png',
        newPath: 'public/screenshots/essam/program-manager-toufic.png'
    }
];

// Additional check for the GHD file which might have spaces at the end
// It appeared as "2023-10-10 14 39 04   .png" in the file view.

renames.forEach(file => {
    const oldFullPath = path.resolve(process.cwd(), file.oldPath);
    const newFullPath = path.resolve(process.cwd(), file.newPath);

    if (fs.existsSync(oldFullPath)) {
        fs.renameSync(oldFullPath, newFullPath);
        console.log(`Renamed: ${file.oldPath} -> ${file.newPath}`);
    } else {
        // Try trimming / adjusting for spaces
        const dir = path.dirname(oldFullPath);
        const base = path.basename(file.oldPath);

        // Try to match file roughly
        if (fs.existsSync(dir)) {
            const files = fs.readdirSync(dir);
            const match = files.find(f => f.startsWith(base.substring(0, 20))); // Match start
            if (match) {
                const matchedOldPath = path.join(dir, match);
                fs.renameSync(matchedOldPath, newFullPath);
                console.log(`Renamed (fuzzy match): ${match} -> ${file.newPath}`);
                return;
            }
        }
        console.log(`File not found: ${file.oldPath}`);
    }
});
