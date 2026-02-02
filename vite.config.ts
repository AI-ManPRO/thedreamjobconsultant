import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [
      react(),
      {
        name: 'netlify-functions-mock',
        configureServer(server) {
          server.middlewares.use('/.netlify/functions/newsletter-signup', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end('Method Not Allowed');
              return;
            }

            let body = '';
            req.on('data', chunk => { body += chunk.toString(); });
            req.on('end', async () => {
              try {
                const { email } = JSON.parse(body);

                if (!email) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'Email is required' }));
                  return;
                }

                const apiKey = env.MAILERLITE_API_KEY;
                const groupId = env.MAILERLITE_GROUP_ID;

                if (!apiKey) {
                  console.error('Missing MAILERLITE_API_KEY');
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'Server configuration error' }));
                  return;
                }

                // Forward to MailerLite
                const mlResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
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

                const mlData = await mlResponse.json();
                res.statusCode = mlResponse.status;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(mlData));

              } catch (error) {
                console.error('Proxy Error:', error);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
              }
            });
          });
        }
      }
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
