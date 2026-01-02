# INITX Portfolio Platform - MERN Stack

A modern portfolio and collaboration platform for UI/UX designers built with MongoDB, Express.js, React, and Node.js.

## Features

### Core Functionality
- **User Authentication** - Secure registration/login for designers and clients
- **Portfolio Showcase** - Public gallery of design projects
- **Project Management** - CRUD operations for design projects
- **Real-time Collaboration** - Client feedback and project updates
- **Responsive Design** - Modern glassmorphism UI with animations

### Technical Features
- JWT-based authentication
- MongoDB with Mongoose ODM
- Styled Components for CSS-in-JS
- Framer Motion animations
- File upload support (ready for Cloudinary)
- RESTful API architecture

## Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone and setup**
   ```bash
   cd UI
   npm run install-deps
   ```

2. **Configure environment**
   ```bash
   # Backend environment (backend/.env)
   MONGODB_URI=mongodb://localhost:27017/initx-platform
   JWT_SECRET=your-secret-key
   PORT=5000
   ```

3. **Start development servers**
   ```bash
   npm run dev
   ```

   This runs:
   - Backend: http://localhost:5000
   - Frontend: http://localhost:3000

## Project Structure

```
UI/
├── backend/                 # Node.js/Express API
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API endpoints
│   ├── middleware/         # Auth middleware
│   └── server.js           # Entry point
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Route components
│   │   ├── hooks/          # Custom hooks
│   │   └── utils/          # Utilities
│   └── public/
└── package.json           # Root scripts
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Projects
- `GET /api/projects/public` - Public projects
- `GET /api/projects/my` - User's projects
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project

### Users
- `GET /api/users/profile` - Get profile
- `PUT /api/users/profile` - Update profile

## Usage

1. **Register** as Designer or Client
2. **Create Projects** with title, description, category
3. **Manage Status** (draft → in-progress → review → completed)
4. **Toggle Public** visibility for portfolio showcase
5. **Browse Portfolio** on home page

## Next Steps

- File upload integration (Cloudinary)
- Real-time notifications (Socket.io)
- Advanced search and filtering
- Client feedback system
- Design tool integrations (Figma API)
- Payment processing for freelance work

## Tech Stack

- **Frontend**: React 18, Styled Components, Framer Motion
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT, bcryptjs
- **Development**: Concurrently, Nodemon