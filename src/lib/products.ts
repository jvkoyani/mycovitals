export interface Product {
  id: string;
  name: string;
  slug: string;
  mushroomType: string;
  description: string;
  shortDescription: string;
  benefits: string[];
  ingredients: string;
  usage: string;
  nutritionalInfo: {
    servingSize: string;
    calories: string;
    protein: string;
    fiber: string;
    carbs: string;
  };
  weightOptions: {
    weight: string;
    price: number;
    discountPrice?: number;
  }[];
  images: string[];
  category: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured: boolean;
  bestSeller: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Lion's Mane Focus Blend",
    slug: "lions-mane-focus-blend",
    mushroomType: "Lion's Mane",
    description: "Unlock your cognitive potential with our premium Lion's Mane mushroom powder. Sourced from pristine mountain forests, this powerful adaptogen has been used for centuries to support mental clarity, focus, and memory. Each serving contains concentrated fruiting body extract with verified beta-glucan content for maximum efficacy.",
    shortDescription: "Premium cognitive support for enhanced focus and mental clarity",
    benefits: [
      "Supports cognitive function and memory",
      "Promotes nerve growth factor (NGF) production",
      "Enhances mental clarity and focus",
      "Supports healthy brain aging",
      "Natural stress relief"
    ],
    ingredients: "100% Organic Lion's Mane (Hericium erinaceus) Fruiting Body Extract",
    usage: "Add 1 teaspoon (2g) to your morning coffee, smoothie, or warm beverage. Can also be mixed into soups or recipes. Best taken consistently for optimal results.",
    nutritionalInfo: {
      servingSize: "2g (1 tsp)",
      calories: "5",
      protein: "0.5g",
      fiber: "0.3g",
      carbs: "1g"
    },
    weightOptions: [
      { weight: "50g", price: 699, discountPrice: 599 },
      { weight: "100g", price: 1199, discountPrice: 999 },
      { weight: "200g", price: 2099, discountPrice: 1799 }
    ],
    images: ["/products/lions-mane-1.jpg"],
    category: "Cognitive Health",
    tags: ["brain health", "focus", "memory", "adaptogen"],
    rating: 4.9,
    reviewCount: 328,
    inStock: true,
    featured: true,
    bestSeller: true
  },
  {
    id: "2",
    name: "Reishi Calm & Immunity",
    slug: "reishi-calm-immunity",
    mushroomType: "Reishi",
    description: "Experience the ancient wisdom of the 'Mushroom of Immortality'. Our Reishi powder is carefully extracted to preserve its powerful triterpenes and polysaccharides. Known as the ultimate stress-relief and immune-supporting mushroom, Reishi helps you find balance in our modern world.",
    shortDescription: "The queen of mushrooms for stress relief and immune support",
    benefits: [
      "Powerful immune system modulation",
      "Promotes relaxation and quality sleep",
      "Supports healthy stress response",
      "Rich in antioxidants",
      "Supports liver health"
    ],
    ingredients: "100% Organic Red Reishi (Ganoderma lucidum) Fruiting Body Extract",
    usage: "Mix 1 teaspoon into warm water, tea, or your favorite evening beverage. Best taken in the evening or before bed for optimal relaxation benefits.",
    nutritionalInfo: {
      servingSize: "2g (1 tsp)",
      calories: "5",
      protein: "0.3g",
      fiber: "0.4g",
      carbs: "1.2g"
    },
    weightOptions: [
      { weight: "50g", price: 749, discountPrice: 649 },
      { weight: "100g", price: 1299, discountPrice: 1099 },
      { weight: "200g", price: 2299, discountPrice: 1999 }
    ],
    images: ["/products/reishi-1.jpg"],
    category: "Immunity",
    tags: ["immune support", "sleep", "stress relief", "adaptogen"],
    rating: 4.8,
    reviewCount: 256,
    inStock: true,
    featured: true,
    bestSeller: true
  },
  {
    id: "3",
    name: "Cordyceps Energy Boost",
    slug: "cordyceps-energy-boost",
    mushroomType: "Cordyceps",
    description: "Fuel your active lifestyle with our potent Cordyceps militaris powder. Prized by athletes and high performers, this remarkable mushroom supports natural energy production, endurance, and oxygen utilization. Perfect for pre-workout or whenever you need sustained, clean energy.",
    shortDescription: "Natural energy and endurance for peak performance",
    benefits: [
      "Enhances natural energy production",
      "Supports athletic performance",
      "Improves oxygen utilization",
      "Supports respiratory health",
      "Promotes healthy stamina"
    ],
    ingredients: "100% Organic Cordyceps (Cordyceps militaris) Fruiting Body Extract",
    usage: "Add 1 teaspoon to your pre-workout drink, morning smoothie, or coffee. Take 30-60 minutes before exercise for best results.",
    nutritionalInfo: {
      servingSize: "2g (1 tsp)",
      calories: "6",
      protein: "0.6g",
      fiber: "0.2g",
      carbs: "0.9g"
    },
    weightOptions: [
      { weight: "50g", price: 799, discountPrice: 699 },
      { weight: "100g", price: 1399, discountPrice: 1199 },
      { weight: "200g", price: 2499, discountPrice: 2199 }
    ],
    images: ["/products/cordyceps-1.jpg"],
    category: "Energy",
    tags: ["energy", "athletic performance", "endurance", "pre-workout"],
    rating: 4.9,
    reviewCount: 412,
    inStock: true,
    featured: true,
    bestSeller: false
  },
  {
    id: "4",
    name: "Chaga Antioxidant Shield",
    slug: "chaga-antioxidant-shield",
    mushroomType: "Chaga",
    description: "Harness the protective power of Chaga, the 'King of Mushrooms'. Wild-harvested from birch trees in pristine forests, our Chaga powder is one of nature's most potent sources of antioxidants. Support your body's natural defenses with this ancient superfood.",
    shortDescription: "Nature's most powerful antioxidant protection",
    benefits: [
      "Extremely high in antioxidants (ORAC)",
      "Supports healthy immune function",
      "Promotes skin health and radiance",
      "Supports digestive wellness",
      "Natural anti-inflammatory properties"
    ],
    ingredients: "100% Wild-Harvested Chaga (Inonotus obliquus) Extract",
    usage: "Stir 1 teaspoon into hot water for a coffee-like beverage, or add to smoothies and recipes. Pairs well with cacao and cinnamon.",
    nutritionalInfo: {
      servingSize: "2g (1 tsp)",
      calories: "4",
      protein: "0.2g",
      fiber: "0.5g",
      carbs: "0.8g"
    },
    weightOptions: [
      { weight: "50g", price: 849, discountPrice: 749 },
      { weight: "100g", price: 1499, discountPrice: 1299 },
      { weight: "200g", price: 2699, discountPrice: 2399 }
    ],
    images: ["/products/chaga-1.jpg"],
    category: "Antioxidant",
    tags: ["antioxidant", "immune support", "skin health", "wild-harvested"],
    rating: 4.7,
    reviewCount: 189,
    inStock: true,
    featured: false,
    bestSeller: false
  },
  {
    id: "5",
    name: "Turkey Tail Gut Health",
    slug: "turkey-tail-gut-health",
    mushroomType: "Turkey Tail",
    description: "Support your gut-immune connection with our premium Turkey Tail powder. Rich in prebiotic fibers and polysaccharopeptides (PSP and PSK), this colorful mushroom is renowned for its profound effects on digestive and immune health.",
    shortDescription: "Prebiotic power for gut health and immunity",
    benefits: [
      "Supports healthy gut microbiome",
      "Rich in prebiotic fibers",
      "Powerful immune modulation",
      "Contains PSP and PSK compounds",
      "Supports digestive wellness"
    ],
    ingredients: "100% Organic Turkey Tail (Trametes versicolor) Fruiting Body Extract",
    usage: "Mix 1 teaspoon into water, juice, or your favorite beverage. Can be taken any time of day with or without food.",
    nutritionalInfo: {
      servingSize: "2g (1 tsp)",
      calories: "5",
      protein: "0.4g",
      fiber: "0.6g",
      carbs: "0.7g"
    },
    weightOptions: [
      { weight: "50g", price: 699, discountPrice: 599 },
      { weight: "100g", price: 1199, discountPrice: 999 },
      { weight: "200g", price: 2099, discountPrice: 1799 }
    ],
    images: ["/products/turkey-tail-1.jpg"],
    category: "Gut Health",
    tags: ["gut health", "prebiotic", "immune support", "digestive"],
    rating: 4.8,
    reviewCount: 234,
    inStock: true,
    featured: false,
    bestSeller: false
  },
  {
    id: "6",
    name: "5 Mushroom Daily Blend",
    slug: "5-mushroom-daily-blend",
    mushroomType: "Blend",
    description: "Experience the synergistic power of five medicinal mushrooms in one convenient blend. Combining Lion's Mane, Reishi, Cordyceps, Chaga, and Turkey Tail, this comprehensive formula supports whole-body wellness with balanced benefits for mind, body, and spirit.",
    shortDescription: "Complete daily wellness with five powerful mushrooms",
    benefits: [
      "Comprehensive full-body support",
      "Balanced cognitive and immune benefits",
      "Natural energy without jitters",
      "Stress adaptation support",
      "Daily wellness optimization"
    ],
    ingredients: "Organic Lion's Mane, Reishi, Cordyceps, Chaga, Turkey Tail Fruiting Body Extracts (Equal parts)",
    usage: "Add 1-2 teaspoons to your morning routine. Perfect in coffee, smoothies, or simply mixed with warm water. Consistent daily use recommended.",
    nutritionalInfo: {
      servingSize: "2g (1 tsp)",
      calories: "5",
      protein: "0.4g",
      fiber: "0.4g",
      carbs: "0.9g"
    },
    weightOptions: [
      { weight: "50g", price: 899, discountPrice: 749 },
      { weight: "100g", price: 1599, discountPrice: 1349 },
      { weight: "200g", price: 2899, discountPrice: 2499 }
    ],
    images: ["/products/blend-1.jpg"],
    category: "Daily Wellness",
    tags: ["daily wellness", "full spectrum", "adaptogen", "immune support"],
    rating: 4.9,
    reviewCount: 567,
    inStock: true,
    featured: true,
    bestSeller: true
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getBestSellers = (): Product[] => {
  return products.filter(p => p.bestSeller);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};

export const formatPrice = (price: number): string => {
  return `₹${price.toLocaleString('en-IN')}`;
};

export const getDiscountPercentage = (price: number, discountPrice: number): number => {
  return Math.round(((price - discountPrice) / price) * 100);
};
