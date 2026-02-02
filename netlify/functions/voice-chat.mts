
import { Handler } from '@netlify/functions';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { COMPANY_KNOWLEDGE } from '../src/data/company-knowledge';
import { PERSONA_PROMPT } from '../src/data/persona-prompt';

// CORS headers to allow requests from your domain
const headers = {
    'Access-Control-Allow-Origin': '*', // Replace with specific domain in production for better security
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
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            console.error('GEMINI_API_KEY is missing');
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ error: 'Server configuration error' }),
            };
        }

        const body = JSON.parse(event.body || '{}');
        const { message, history } = body;

        if (!message) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Message is required' }),
            };
        }

        // Initialize Gemini
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        // Construct the system prompt
        // We combine the Persona + Knowledge Base
        // Note: In a real production app with massive data, you might use RAG (Retrieval Augmented Generation).
        // For this size, passing the context directly usually works well if it fits in the context window (1M tokens for 1.5 flash).
        const systemPrompt = `
      ${PERSONA_PROMPT}

      Here is the complete knowledge base about the company "The Dream Job Consultant". 
      Use this information to answer the user's questions accurately.
      If the answer is not in this knowledge base, politely say you don't know but can help with general job search/resume advice based on your persona expertise.

      --- COMPANY KNOWLEDGE BASE START ---
      ${COMPANY_KNOWLEDGE}
      --- COMPANY KNOWLEDGE BASE END ---
    `;

        // Start chat with history
        const chat = model.startChat({
            history: [
                {
                    role: 'user',
                    parts: [{ text: systemPrompt }],
                },
                {
                    role: 'model',
                    parts: [{ text: "Understood. I am Anna, ready to help." }],
                },
                ...(history || []).map((msg: any) => ({
                    role: msg.role === 'assistant' ? 'model' : 'user',
                    parts: [{ text: msg.content }],
                })),
            ],
        });

        const result = await chat.sendMessage(message);
        const response = result.response;
        const text = response.text();

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ response: text }),
        };

    } catch (error) {
        console.error('Error processing request:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Failed to process request' }),
        };
    }
};
