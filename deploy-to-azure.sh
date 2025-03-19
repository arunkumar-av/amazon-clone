#!/bin/bash

# Azure Deployment Script for Amazon Clone E-commerce Website

# Set variables
APP_NAME="amazon-clone-app"
RESOURCE_GROUP="amazon-clone-rg"
LOCATION="eastus"
SKU="P1V2"
RUNTIME="NODE:18-lts"

echo "Starting deployment process for $APP_NAME..."

# Login to Azure (uncomment when running manually)
# az login

# Create resource group if it doesn't exist
echo "Creating resource group $RESOURCE_GROUP..."
az group create --name $RESOURCE_GROUP --location $LOCATION

# Create App Service plan
echo "Creating App Service plan..."
az appservice plan create --name "${APP_NAME}-plan" \
                         --resource-group $RESOURCE_GROUP \
                         --location $LOCATION \
                         --sku $SKU \
                         --is-linux

# Create Web App
echo "Creating Web App..."
az webapp create --name $APP_NAME \
                --resource-group $RESOURCE_GROUP \
                --plan "${APP_NAME}-plan" \
                --runtime $RUNTIME

# Configure Web App settings
echo "Configuring Web App settings..."
az webapp config set --name $APP_NAME \
                    --resource-group $RESOURCE_GROUP \
                    --startup-file "node_modules/next/dist/bin/next start"

# Set environment variables
echo "Setting environment variables..."
az webapp config appsettings set --name $APP_NAME \
                               --resource-group $RESOURCE_GROUP \
                               --settings NODE_ENV=production

# Build the Next.js application
echo "Building Next.js application..."
npm run build

# Create a ZIP deployment package
echo "Creating deployment package..."
cd build
zip -r ../deployment.zip .
cd ..

# Deploy the application
echo "Deploying application to Azure..."
az webapp deployment source config-zip --name $APP_NAME \
                                     --resource-group $RESOURCE_GROUP \
                                     --src deployment.zip

echo "Deployment completed successfully!"
echo "Your application is available at: https://${APP_NAME}.azurewebsites.net"
