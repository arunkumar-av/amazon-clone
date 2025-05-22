# Amazon Clone E-commerce Website

A fully functional Amazon-like e-commerce website built with Next.js, TypeScript, and Tailwind CSS. This project includes all essential e-commerce features and is ready for deployment to Microsoft Azure.

## Features

- **Amazon-like UI Components**
  - Header with search bar, navigation, and cart icon
  - Footer with organized link sections
  - Product cards with images, pricing, and ratings
  - Carousel for featured products
  - Sidebar with category filters

- **Key Pages**
  - Homepage with featured products and banners
  - Product listing page with filters and sorting
  - Product detail pages with images and descriptions
  - Search results page with filtering

- **Shopping Cart and Checkout**
  - Add to cart functionality with state management (Zustand)
  - Shopping cart page with item listing and quantity adjustment
  - Multi-step checkout process with shipping and payment forms

- **Azure Deployment Ready**
  - Deployment scripts for Azure App Service
  - Comprehensive deployment documentation

## Technologies Used

- **Frontend**
  - Next.js 15
  - React 19
  - TypeScript
  - Tailwind CSS
  - Zustand (State Management)

- **Deployment**
  - Azure App Service
  - Azure CLI

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/arunkumar-av/amazon-clone.git
   cd amazon-clone
   ```

2. Install dependencies
   ```bash
   npm install
   npm run install-offline
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## Project Structure

```
amazon-clone/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js pages
│   ├── components/      # React components
│   │   ├── layout/      # Layout components (Header, Footer, Sidebar)
│   │   ├── product/     # Product-related components
│   │   └── ui/          # UI components (Carousel, etc.)
│   └── lib/             # Utilities and data
├── DEPLOYMENT.md        # Deployment instructions
├── deploy-to-azure.sh   # Azure deployment script
└── azure-config.md      # Azure configuration
```

## License

This project is for demonstration purposes only.

## Acknowledgements

- This project was created as a demonstration of e-commerce website development with Next.js
- Inspired by Amazon's user interface and functionality
