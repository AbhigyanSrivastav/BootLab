# 🚀 BootLab

BootLab is a full-stack project that provides instant cloud environments (browsers, OS, dev tools, games) using a modern tech stack.

## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js + Express + TypeScript
- **Orchestration**: Docker + Redis

---

## 📦 Prerequisites

- Node.js (v18+)
- npm (comes with Node.js)
- Docker
- Docker Compose

---


## 🐳 Required Docker Images

Before starting the backend, ensure all Docker images listed in  
`backend/src/docker/dockerImages/` are **pulled and available locally**.  
You can pull them manually using:

```bash
docker pull <image-name>
```

Replace `<image-name>` with each image specified in the directory above.

## 🔧 Setup Instructions

### Backend

1. Create a `.env` file in `backend/`:

    ```env
    PORT=5000
    PORT_RANGE_START=8000
    PORT_RANGE_END=9000
    HOST=localhost
    REDIS_URL=redis://redis:6379
    ```

2. Install dependencies and run:

    ```bash
    cd backend
    npm install
    npm run start
    ```

> Backend runs at **http://localhost:5000**

---

### Frontend

1. Install dependencies and run:

    ```bash
    cd frontend
    npm install
    npm run dev
    ```

> Frontend runs at **http://localhost:5173**

---

## 🐳 Run with Docker Compose (Recommended)

```bash
docker-compose up --build
```

Backend: http://localhost:5000  
Redis: localhost:6379  
(Frontend runs separately)