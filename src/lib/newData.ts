import { NewTypeProduct,RelatedProduct } from "./utils";



export const relatedProducts: RelatedProduct[] = [
  { id: 2, name: "Polo with Contrast Trims", price: 212, oldPrice: 242, rating: 4.3, image: "/placeholder.svg" },
  { id: 3, name: "Gradient Graphic T-shirt", price: 145, oldPrice: 165, rating: 4.5, image: "/placeholder.svg" },
  { id: 4, name: "Polo with Tipping Details", price: 180, oldPrice: 200, rating: 4.8, image: "/placeholder.svg" },
  { id: 5, name: "Black Striped T-shirt", price: 120, oldPrice: 150, rating: 4.4, image: "/placeholder.svg" },
]


export const nproducts: NewTypeProduct[] = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      price: 145,
      oldPrice: 0,
      discount: 0,
      rating: 4.5,
      reviewCount: 25,
      description: "Stylish gradient graphic T-shirt, perfect for casual wear.",
      colors: ["Blue", "Grey"],
      sizes: ["S", "M", "L", "XL"],
      images: [
        "/images/products/gradient-graphic-t-shirt.png",
        "/images/products/gradient-graphic-t-shirt-alt1.png",
      ],
      reviews: [
        { author: "JohnDoe", rating: 5, content: "Love the style and fit!" },
        { author: "JaneSmith", rating: 4, content: "Comfortable but could be cheaper."},
      ],
    },
    {
      id: 2,
      name: "Polo with Tipping Details",
      price: 180,
      oldPrice: 260,
      discount: 30.77,
      rating: 4.8,
      reviewCount: 32,
      description: "Classic polo shirt with tipping details for a smart look.",
      colors: ["White", "Black"],
      sizes: ["M", "L", "XL"],
      images: [
        "/images/products/polo-with-tipping-details.png",
        "/images/products/polo-with-tipping-details-alt1.png",
      ],
      reviews: [
        { author: "AlexC", rating: 5, content: "Perfect fit and high quality." },
        { author: "MikeB", rating: 4, content: "Nice shirt but a bit expensive." },
      ],
    },
    {
      id: 3,
      name: "Black Striped T-shirt",
      price: 120,
      oldPrice: 150,
      discount: 20.0,
      rating: 4.2,
      reviewCount: 18,
      description: "Comfortable black striped T-shirt, great for everyday use.",
      colors: ["Black", "White"],
      sizes: ["S", "M", "L"],
      images: [
        "/images/products/black-striped-t-shirt.png",
        "/images/products/black-striped-t-shirt-alt1.png",
      ],
      reviews: [
        { author: "SarahM", rating: 4, content: "Looks great, but a bit tight." },
        { author: "TomH", rating: 5, content: "Excellent quality for the price." },
      ],
    },
    {
      id: 4,
      name: "Skinny Fit Jeans",
      price: 240,
      oldPrice: 260,
      discount: 7.69,
      rating: 4.7,
      reviewCount: 40,
      description: "Trendy skinny fit jeans with a sleek design.",
      colors: ["Blue", "Black"],
      sizes: ["32", "34", "36"],
      images: [
        "/images/products/skinny-fit-jeans.png",
        "/images/products/skinny-fit-jeans-alt1.png",
      ],
      reviews: [
        { author: "EmilyW", rating: 5, content: "Fits perfectly, very stylish!" },
        { author: "JakeT", rating: 4, content: "Good quality but runs a bit long."},
      ],
    },
    {
      id: 5,
      name: "Checkered Shirt",
      price: 180,
      oldPrice: 0,
      discount: 0,
      rating: 4.5,
      reviewCount: 22,
      description: "Casual checkered shirt for a relaxed look.",
      colors: ["Red", "Blue"],
      sizes: ["M", "L", "XL"],
      images: [
        "/images/products/checkered-shirt.png",
        "/images/products/checkered-shirt-alt1.png",
      ],
      reviews: [
        { author: "AnnaL", rating: 4, content: "Nice pattern, comfy fabric." },
        { author: "ChrisP", rating: 5, content: "Love the style, great value." },
      ],
    },
    {
      id: 6,
      name: "Sleeve Striped T-shirt",
      price: 130,
      oldPrice: 160,
      discount: 18.75,
      rating: 4.3,
      reviewCount: 19,
      description: "Stylish sleeve striped T-shirt for a modern look.",
      colors: ["Black", "Grey"],
      sizes: ["S", "M", "L"],
      images: [
        "/images/products/sleeve-striped-t-shirt.png",
        "/images/products/sleeve-striped-t-shirt-alt1.png",
      ],
      reviews: [
        { author: "DanielS", rating: 4, content: "Nice design, fabric could be softer."},
        { author: "LindaK", rating: 5, content: "Good quality, fits well." },
      ],
    },
  ];
  
  