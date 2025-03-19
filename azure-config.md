# Azure Deployment Configuration for Next.js

This file contains the configuration settings for deploying the Amazon clone e-commerce website to Azure.

## Prerequisites
- Azure account
- Azure CLI installed
- Node.js and npm installed

## Build Configuration
```json
{
  "name": "amazon-clone",
  "version": "1.0.0",
  "scripts": {
    "build": "next build",
    "start": "next start",
    "export": "next build && next export"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
```

## Azure App Service Configuration
```json
{
  "name": "amazon-clone-app",
  "location": "East US",
  "sku": "Standard",
  "os": "Linux",
  "runtimeStack": "Node|18-lts"
}
```

## Environment Variables
```
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.example.com
```
