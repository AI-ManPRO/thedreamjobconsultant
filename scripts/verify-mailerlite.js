
import fs from 'fs';
import path from 'path';

// Manual .env parser
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
            // Remove quotes if present
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
const groupId = envConfig.MAILERLITE_GROUP_ID;

console.log('Testing MailerLite Integration...');

if (!apiKey) {
    console.error('Error: MAILERLITE_API_KEY not found in .env.local');
    process.exit(1);
}

const testEmail = `test.antigravity.${Date.now()}@example.com`;
console.log(`Attempting to subscribe: ${testEmail}`);

try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            email: testEmail,
            groups: groupId ? [groupId] : [],
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        console.error('MailerLite API Error:', JSON.stringify(data, null, 2));
        process.exit(1);
    }

    console.log('Success! Subscriber created.');
    console.log('Response:', JSON.stringify(data, null, 2));

} catch (err) {
    console.error('Network or Script Error:', err);
    process.exit(1);
}
