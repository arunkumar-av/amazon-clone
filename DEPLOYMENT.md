# Amazon Clone E-commerce Website - Azure Deployment Guide

This guide provides step-by-step instructions for deploying the Amazon Clone e-commerce website to Microsoft Azure.

## Prerequisites

Before you begin, ensure you have the following:

1. An active Azure account
2. Azure CLI installed on your local machine
3. Node.js (v18 or later) and npm installed
4. Git installed

## Step 1: Clone the Repository

```bash
git clone <your-repository-url>
cd amazon-clone
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Build the Application

```bash
npm run build
```

This will create an optimized production build of your application.

## Step 4: Deploy to Azure

You can deploy the application to Azure using the provided deployment script:

```bash
./deploy-to-azure.sh
```

This script will:
1. Create a resource group if it doesn't exist
2. Create an App Service plan
3. Create a Web App
4. Configure the Web App settings
5. Build the Next.js application
6. Create a deployment package
7. Deploy the application to Azure

### Manual Deployment Steps

If you prefer to deploy manually, follow these steps:

1. **Login to Azure**:
   ```bash
   az login
   ```

2. **Create a Resource Group**:
   ```bash
   az group create --name amazon-clone-rg --location eastus
   ```

3. **Create an App Service Plan**:
   ```bash
   az appservice plan create --name amazon-clone-plan \
                           --resource-group amazon-clone-rg \
                           --location eastus \
                           --sku P1V2 \
                           --is-linux
   ```

4. **Create a Web App**:
   ```bash
   az webapp create --name amazon-clone-app \
                  --resource-group amazon-clone-rg \
                  --plan amazon-clone-plan \
                  --runtime "NODE:18-lts"
   ```

5. **Configure Web App Settings**:
   ```bash
   az webapp config set --name amazon-clone-app \
                      --resource-group amazon-clone-rg \
                      --startup-file "node_modules/next/dist/bin/next start"
   ```

6. **Set Environment Variables**:
   ```bash
   az webapp config appsettings set --name amazon-clone-app \
                                 --resource-group amazon-clone-rg \
                                 --settings NODE_ENV=production
   ```

7. **Deploy the Application**:
   ```bash
   npm run build
   cd build
   zip -r ../deployment.zip .
   cd ..
   az webapp deployment source config-zip --name amazon-clone-app \
                                       --resource-group amazon-clone-rg \
                                       --src deployment.zip
   ```

## Step 5: Verify Deployment

After deployment, your application will be available at:
```
https://amazon-clone-app.azurewebsites.net
```

Visit this URL to ensure your Amazon Clone e-commerce website is running correctly.

## Step 6: Configure Custom Domain (Optional)

If you want to use a custom domain:

1. **Add Custom Domain in Azure Portal**:
   - Go to your App Service in Azure Portal
   - Navigate to "Custom domains"
   - Click "Add custom domain"
   - Follow the instructions to add and verify your domain

2. **Configure SSL Certificate**:
   - In the Azure Portal, go to your App Service
   - Navigate to "TLS/SSL settings"
   - You can use a free Azure-managed certificate or upload your own

## Troubleshooting

If you encounter issues during deployment:

1. **Check Application Logs**:
   ```bash
   az webapp log tail --name amazon-clone-app --resource-group amazon-clone-rg
   ```

2. **Verify Environment Variables**:
   ```bash
   az webapp config appsettings list --name amazon-clone-app --resource-group amazon-clone-rg
   ```

3. **Restart the Web App**:
   ```bash
   az webapp restart --name amazon-clone-app --resource-group amazon-clone-rg
   ```

## Maintenance and Updates

To update your application after making changes:

1. Make your changes to the codebase
2. Build the application: `npm run build`
3. Deploy using the same deployment command:
   ```bash
   ./deploy-to-azure.sh
   ```

## Cost Management

Monitor your Azure costs through the Azure Portal. The P1V2 App Service Plan used in this deployment has associated costs. Consider:

- Scaling down to a lower tier for development/testing
- Setting up cost alerts
- Reviewing usage regularly

## Security Considerations

- Enable Azure Application Insights for monitoring
- Configure Azure Security Center
- Set up Azure Key Vault for storing sensitive information
- Implement proper authentication and authorization
