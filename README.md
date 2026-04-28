# Chatty

Chatty is a full-stack real-time chat application built with a React frontend and an Express backend. It includes authentication, profile image uploads, one-to-one messaging, image sharing in chat, and live online user updates powered by Socket.IO.

## Overview

This project is split into two applications:

- `frontend`: React + Vite client
- `backend`: Express + MongoDB API with Socket.IO

In development, the frontend runs on `http://localhost:5173` and the backend runs on `http://localhost:5001`. In production, the backend serves the built frontend from `frontend/dist`.

## Features

- User sign up and login
- JWT authentication with cookies
- Protected routes
- Real-time messaging with Socket.IO
- Online user presence
- Image messages via Cloudinary
- Profile photo upload
- Theme support on the frontend
- MongoDB persistence with Mongoose

## Tech Stack

### Frontend

- React 18
- Vite
- React Router
- Zustand
- Axios
- Socket.IO Client
- Tailwind CSS
- DaisyUI
- React Hot Toast

### Backend

- Node.js
- Express
- MongoDB + Mongoose
- Socket.IO
- JWT
- bcryptjs
- cookie-parser
- Cloudinary
- dotenv

## Project Structure

```text
Chatty/
	backend/
		src/
			controllers/
			lib/
			middleware/
			models/
			routes/
	frontend/
		src/
			components/
			lib/
			pages/
			store/
	package.json
	README.md
```

## Requirements

- Node.js
- npm
- MongoDB database
- Cloudinary account

## Environment Variables

Create a `.env` file inside `backend/`.

Example:

```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

NODE_ENV=development
```

## Installation

Install dependencies for the root project, backend, and frontend:

```bash
npm install
npm install --prefix backend
npm install --prefix frontend
```

## Running Locally

Start the backend:

```bash
cd backend
npm run dev
```

Start the frontend in another terminal:

```bash
cd frontend
npm run dev
```

## Available Scripts

### Root

```bash
npm run build
npm start
```

- `npm run build`: installs backend and frontend dependencies, then builds the frontend
- `npm start`: starts the backend in production mode

### Backend

```bash
npm run dev
npm start
```

- `npm run dev`: runs the server with Nodemon
- `npm start`: runs the server with Node.js

### Frontend

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## API Summary

### Auth

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/check`
- `PUT /api/auth/update-profile`

### Messages

- `GET /api/messages/users`
- `GET /api/messages/:id`
- `POST /api/messages/send/:id`

## Development Notes

- The backend currently allows CORS from `http://localhost:5173`.
- Authentication is handled with an HTTP cookie named `jwt`.
- Socket connections are created after authentication and used to broadcast live messages and online users.
- Image uploads are sent as Base64 from the client and stored through Cloudinary.

## Production Build

To build the app for production:

```bash
npm run build
```

After building, start the backend:

```bash
npm start
```

When `NODE_ENV=production`, the backend serves the compiled frontend.

## Future Improvements

- Add message status indicators
- Add group chats
- Add typing indicators
- Add tests for API routes and frontend stores

## License

This project currently uses the `ISC` license.
