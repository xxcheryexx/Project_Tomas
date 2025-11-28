/**
 * DeepSeek API Proxy Server
 * 
 * This server acts as a proxy between your frontend and the DeepSeek API
 * to avoid CORS issues and keep your API key secure.
 * 
 * Setup:
 * 1. Install dependencies: npm install
 * 2. Copy .env.example to .env and add your DeepSeek API key
 * 3. Run: node server.js
 * 
 * The server will run on http://localhost:3000
 */

const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: '*', // In production, specify your frontend URL: 'http://127.0.0.1:5500'
    credentials: true
}));
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'DeepSeek Proxy Server is running' });
});

// DeepSeek API proxy endpoint
app.post('/api/deepseek-proxy', async (req, res) => {
    try {
        // Get API key from environment variable or request body
        const apiKey = process.env.DEEPSEEK_API_KEY || req.body.apiKey;
        
        if (!apiKey) {
            return res.status(400).json({ 
                error: 'API key is required. Set DEEPSEEK_API_KEY in .env file or send it in the request body.' 
            });
        }

        // Extract request parameters
        const { model, messages, max_tokens, temperature, stream } = req.body;

        if (!model || !messages) {
            return res.status(400).json({ 
                error: 'Missing required parameters: model and messages are required' 
            });
        }

        // Forward request to DeepSeek API
        const response = await fetch('https://api.deepseek.com/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: model || 'deepseek-chat',
                messages: messages,
                max_tokens: max_tokens || 1000,
                temperature: temperature || 0.7,
                stream: stream || false
            })
        });

        // Check if response is ok
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
            return res.status(response.status).json(errorData);
        }

        // Return the response data
        const data = await response.json();
        res.json(data);

    } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).json({ 
            error: 'Internal server error', 
            message: error.message 
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 DeepSeek Proxy Server running on http://localhost:${PORT}`);
    console.log(`📡 Proxy endpoint: http://localhost:${PORT}/api/deepseek-proxy`);
    console.log(`🔑 API Key configured: ${process.env.DEEPSEEK_API_KEY ? 'Yes' : 'No (using request body)'}`);
});

