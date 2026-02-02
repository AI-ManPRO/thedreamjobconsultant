
import fs from 'fs';
import path from 'path';

// Manual .env parser (reusing from previous script)
function parseEnv(filePath) {
    if (!fs.existsSync(filePath)) return {};
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const result = {};
    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const [key, ...values] = trimmed.split('=');
        if (key && values.length > 0) {
            let val = values.join('=');
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                val = val.slice(1, -1);
            }
            result[key.trim()] = val.trim();
        }
    }
    return result;
}

const envLocalPath = path.resolve(process.cwd(), '.env.local');
const envConfig = parseEnv(envLocalPath);
const apiKey = envConfig.MAILERLITE_API_KEY;

if (!apiKey) {
    console.error('Error: MAILERLITE_API_KEY not found in .env.local');
    process.exit(1);
}

console.log('Fetching recent subscribers...');

try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers?limit=5', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
    });

    const data = await response.json();

    if (!response.ok) {
        console.error('Error fetching subscribers:', data);
        process.exit(1);
    }

    console.log('--- Recent Subscribers ---');
    data.data.forEach(sub => {
        console.log(`Email: ${sub.email}, Created: ${sub.created_at}, Status: ${sub.status}`);
    });

} catch (err) {
    console.error('Request failed:', err);
    process.exit(1);
}
