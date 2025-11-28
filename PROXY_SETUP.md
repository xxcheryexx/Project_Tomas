# DeepSeek API Proxy Server Setup

This proxy server solves the CORS issue by acting as a middleman between your frontend and the DeepSeek API.

## Quick Start

### 1. Install Node.js
Make sure you have Node.js installed (version 14 or higher).
Download from: https://nodejs.org/

### 2. Install Dependencies
Open a terminal in the project root directory and run:
```bash
npm install
```

### 3. Configure API Key
Create a `.env` file in the project root:
```bash
# Copy the example file (Windows)
copy env.example.txt .env

# Or on Mac/Linux
cp env.example.txt .env
```

Then edit `.env` and add your DeepSeek API key:
```
DEEPSEEK_API_KEY=sk-4d95e61f6fc941dfb4b49a0dcaf4bb49
PORT=3000
```

**Note:** Make sure the `.env` file is in the same directory as `server.js`

### 4. Start the Server

**Easy way (Windows):**
Double-click `start-proxy.bat` or run it from terminal:
```bash
start-proxy.bat
```

**Easy way (Mac/Linux):**
```bash
chmod +x start-proxy.sh
./start-proxy.sh
```

**Manual way:**
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

The server will start on `http://localhost:3000`

**Important:** Keep the server running while using the AI chat feature!

### 5. Update Frontend Code
The frontend code in `index.html` has been updated to use the proxy endpoint.

## How It Works

1. **Frontend** → Sends request to your proxy server (`http://localhost:3000/api/deepseek-proxy`)
2. **Proxy Server** → Forwards request to DeepSeek API with your API key
3. **DeepSeek API** → Returns response to proxy server
4. **Proxy Server** → Returns response to frontend

## Security Notes

- ✅ API key is stored on the server (in `.env` file), not exposed to the browser
- ✅ CORS is handled by the proxy server
- ✅ The `.env` file is in `.gitignore` to prevent committing your API key

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, change it in `.env`:
```
PORT=3001
```

### API Key Not Working
- Verify your API key is correct in the `.env` file
- Make sure there are no extra spaces or quotes around the key
- Check that the `.env` file is in the project root directory

### CORS Still Blocking
- Make sure the proxy server is running
- Check that the frontend is using the correct proxy URL
- Verify the proxy server logs show incoming requests

## Production Deployment

For production:
1. Set `CORS_ORIGIN` in `.env` to your production frontend URL
2. Use a process manager like PM2: `npm install -g pm2 && pm2 start server.js`
3. Set up HTTPS for secure connections
4. Consider using environment variables from your hosting provider instead of `.env`

