# Simple Web App

A basic web application for demonstrating platform workflow capabilities.

## Features

- 🎲 Random number generator
- 🧮 Simple calculator
- 💚 Health check endpoint
- 🐳 Docker containerized
- ☸️ Kubernetes ready

## Quick Start

### Local Development
```bash
npm install
npm run dev
```

### Docker Build
```bash
docker build -f docker/Dockerfile -t simple-web-app .
docker run -p 3000:3000 simple-web-app
```

### Kubernetes Deployment
```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

## API Endpoints

- `GET /` - Main application page
- `GET /api/random` - Generate random number
- `POST /api/calculate` - Calculator endpoint
- `GET /health` - Health check

## Environment Variables

- `PORT` - Server port (default: 3000)

## Platform Integration

This application is designed to work with the platform workflows:
- Feature development cycle
- Customer demo environments
- New engineer onboarding 