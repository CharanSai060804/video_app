VideoStream Pro - MERN Stack Video Processing App

A full-stack application that allows users to upload videos, processes them asynchronously (simulated AI analysis), and streams them back using efficient chunk-based delivery.

## 🚀 Features
- **User Authentication:** Secure Login & Registration (JWT).
- **Video Upload:** Drag-and-drop upload to local server storage.
- **Real-Time Processing:** Socket.io updates for "Processing" status bars.
- **Smart Streaming:** Supports HTTP Range Requests (scrubbing/seeking works).
- **Dashboard:** View, track, and play personal video library.

## 🛠️ Tech Stack
- **Frontend:** React + Vite, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Real-Time:** Socket.io
- **Storage:** Local Disk Storage (Multer)

## ⚙️ Installation & Run Guide

### 1. Backend Setup
```bash
cd backend
npm install
# Create a .env file with:
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_secret_key
# PORT=5000

# Start the Server
npm start
2. Frontend Setup
Bash

cd frontend
npm install
npm run dev
3. Usage
Open http://localhost:5173.

Register a new account.

Upload a video file (MP4).

Watch the real-time progress bar.

Once "Safe", click Watch Video to stream.

📂 Project Structure
/backend: API, Database models, and Video Streaming logic.

/frontend: React UI, Video Player component, and Authentication.
