
import { Handler } from '@netlify/functions';

const headers = {
    'Access-Control-Allow-Origin': '*', // Adjust in production
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

export const handler: Handler = async (event) => {
    // Handle preflight OPTIONS request
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: '',
        };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: 'Method Not Allowed',
        };
    }

    try {
        const apiKey = process.env.MAILERLITE_API_KEY;
        const groupId = process.env.MAILERLITE_GROUP_ID;

        if (!apiKey) {
            console.error('MAILERLITE_API_KEY is missing');
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ error: 'Server configuration error' }),
            };
        }

        const body = JSON.parse(event.body || '{}');
        const { email } = body;

        if (!email) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Email is required' }),
            };
        }

        // 1. Create Subscriber
        const subscriberResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                email: email,
                groups: groupId ? [groupId] : [],
            }),
        });

        const subscriberData = await subscriberResponse.json();

        if (!subscriberResponse.ok) {
            console.error('MailerLite Error:', subscriberData);
            return {
                statusCode: subscriberResponse.status,
                headers,
                body: JSON.stringify({ error: subscriberData.message || 'Failed to subscribe' }),
            };
        }

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ success: true, daa: subscriberData }),
        };

    } catch (error) {
        console.error('Error processing subscription:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Failed to process request' }),
        };
    }
};
