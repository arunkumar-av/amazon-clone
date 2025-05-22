export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  hasPrime?: boolean;
}

// Mock product data for our Amazon clone
export const products: Product[] = [  {
    id: "1",
    title: "Echo Dot (4th Gen) | Smart speaker with Alexa",
    price: 49.99,
    description: "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small spaces.",
    category: "Electronics",
    image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: {
      rate: 4.7,
      count: 12543
    },
    hasPrime: true
  },  {
    id: "2",
    title: "Kindle Paperwhite (8 GB) – Now with a 6.8\" display",
    price: 139.99,
    description: "The thinnest, lightest Kindle Paperwhite yet—with a flush-front design and 300 ppi glare-free display that reads like real paper even in bright sunlight.",
    category: "Electronics",
    image: "https://images.pexels.com/photos/1482061/pexels-photo-1482061.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: {
      rate: 4.8,
      count: 8765
    },
    hasPrime: true
  },  {
    id: "3",
    title: "Apple AirPods Pro (2nd Generation)",
    price: 249.00,
    description: "Active Noise Cancellation reduces unwanted background noise. Adaptive Transparency lets outside sounds in while reducing loud environmental noise.",
    category: "Electronics",
    image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: {
      rate: 4.6,
      count: 15678
    },
    hasPrime: true
  },  {
    id: "4",
    title: "Logitech MX Master 3S Wireless Mouse",
    price: 99.99,
    description: "MAGSPEED SCROLLING - Scroll 1,000 lines in 1 second. The electromagnetic wheel provides precision when you need it and speed when you want it.",
    category: "Electronics",
    image: "https://images.pexels.com/photos/3829227/pexels-photo-3829227.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: {
      rate: 4.5,
      count: 3421
    },
    hasPrime: false
  },  {
    id: "5",
    title: "Samsung 32-inch Odyssey G5 Gaming Monitor",
    price: 329.99,
    description: "UNMATCHED IMMERSION: Get your head in the game with Odyssey's 1000R panel, which matches the curvature of the human eye for maximum immersion and minimal eye strain.",
    category: "Electronics",
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: {
      rate: 4.4,
      count: 2876
    },
    hasPrime: true
  },
  {
    id: "6",
    title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    price: 99.95,
    description: "7-IN-1 APPLIANCES: pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, sterilizer, and food warmer.",
    category: "Home & Kitchen",
    image: "https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: {
      rate: 4.7,
      count: 32456
    },
    hasPrime: true
  },
  {
    id: "7",
    title: "Fitbit Charge 5 Advanced Fitness & Health Tracker",
    price: 149.95,
    description: "Optimize your workout routine with a Daily Readiness Score that reveals if you're ready to exercise or should focus on recovery.",
    category: "Sports & Outdoors",
    image: "https://images.pexels.com/photos/437038/pexels-photo-437038.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: {
      rate: 4.3,
      count: 5432
    },
    hasPrime: false
  },
  {
    id: "8",
    title: "Bose QuietComfort 45 Bluetooth Wireless Noise Cancelling Headphones",
    price: 329.00,
    description: "Noise cancelling wireless headphones – The perfect balance of quiet, comfort, and sound. Bose uses tiny microphones to measure, compare, and react to outside noise.",
    category: "Electronics",
    image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: {
      rate: 4.6,
      count: 7654
    },
    hasPrime: true
  },
  {
    id: "9",
    title: "COSORI Air Fryer, 5 QT, 9-in-1 Airfryer",
    price: 119.99,
    description: "9 COOKING FUNCTIONS: Enjoy the crispiness of fried food with 85% less oil with 9 one-touch cooking functions.",
    category: "Home & Kitchen",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: {
      rate: 4.7,
      count: 18765
    },
    hasPrime: true
  },
  {
    id: "10",
    title: "Kindle Scribe (16 GB) – The first Kindle for reading and writing",
    price: 339.99,
    description: "Read and write as naturally as you do on paper – Features the world's first 10.2-inch 300 ppi glare-free Paperwhite display and included Premium Pen.",
    category: "Electronics",
    image: "https://images.pexels.com/photos/1261857/pexels-photo-1261857.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: {
      rate: 4.5,
      count: 3456
    },
    hasPrime: true
  }
];

// Categories for sidebar filtering
export const categories = [
  {
    title: "Electronics",
    items: ["Computers", "Cell Phones", "Cameras", "TV & Video", "Audio", "Wearable Technology"]
  },
  {
    title: "Home & Kitchen",
    items: ["Kitchen & Dining", "Bedding", "Bath", "Furniture", "Home Decor", "Storage & Organization"]
  },
  {
    title: "Clothing & Fashion",
    items: ["Women", "Men", "Kids", "Shoes", "Jewelry", "Watches", "Handbags"]
  },
  {
    title: "Books & Media",
    items: ["Books", "Movies", "Music", "Video Games"]
  }
];

// Banner data for carousel
export const banners = [
  {
    backgroundColor: "#FF9900", // Amazon Orange fallback
    textColor: "#FFFFFF",
    text: "Amazon Sale Banner",
    imageUrl: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    backgroundColor: "#146EB4", // Blue fallback
    textColor: "#FFFFFF",
    text: "Electronics Deals",
    imageUrl: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    backgroundColor: "#232F3E", // Dark Blue fallback
    textColor: "#FFFFFF",
    text: "Prime Day Coming Soon",
    imageUrl: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    backgroundColor: "#00A8E1", // Light Blue fallback
    textColor: "#FFFFFF",
    text: "New Releases",
    imageUrl: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];
