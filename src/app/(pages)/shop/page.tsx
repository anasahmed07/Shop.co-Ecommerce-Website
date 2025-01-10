'use client'

import { useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight,SlidersVertical ,X } from 'lucide-react'
import { products } from '@/lib/data'
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger,} from "@/components/ui/drawer"
import { ProductCard } from '@/components/productCard'



export default function ShopPage() {
  const [priceRange, setPriceRange] = useState([0, 300])
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')


  const categories = ['All', ...Array.from(new Set(products.map(product => product.category)))];


  const filteredProducts = products
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
    .filter(product => product.price >= priceRange[0] && product.price <= priceRange[1])

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low-high') return a.price - b.price
    if (sortBy === 'price-high-low') return b.price - a.price
    if (sortBy === 'rating') return b.rating - a.rating
    return 0 // 'featured' or default
  })

  const productsPerPage = 9
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage)
  
  const displayedProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-48">
      <h1 className="flex justify-between md:block text-3xl font-bold mb-8"><span>Shop</span><span className='md:hidden'>
      <Drawer>
        <DrawerTrigger>
          <SlidersVertical/>
        </DrawerTrigger>
        <DrawerContent>
        <div className="border rounded-lg p-4">
            <h2 className="flex justify-between text-lg font-semibold mb-4"><span>Filters</span><span><DrawerClose><X/></DrawerClose></span></h2>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category} className="flex items-center">
                    <input
                      type="radio"
                      id={category}
                      name="category"
                      className="mr-2"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                    />
                    <label htmlFor={category}>{category}</label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Price</h3>
              <input
                type="range"
                min="0"
                max="300"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Colors</h3>
              <div className="flex flex-wrap gap-2">
                {['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500', 'bg-gray-500', 'bg-black', 'bg-white border'].map((color, index) => (
                  <button key={index} className={`w-6 h-6 rounded-full border ${color}`} />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {['Xx-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3x-Large'].map((size) => (
                  <button key={size} className="px-3 py-1 bg-gray-100 focus:bg-black focus:text-white border rounded-full text-sm">{size}</button>
                ))}
              </div>
            </div>

            <button className="w-full bg-black text-white py-2 rounded-full">Apply Filters</button>
          </div>
        </DrawerContent>
      </Drawer>
        </span></h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div>
          <div className="border rounded-lg p-4 hidden md:block md:w-64 ">
            <h2 className="flex justify-between text-lg font-semibold mb-4"><span>Filters</span><span><SlidersVertical/></span></h2>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category} className="flex items-center">
                    <input
                      type="radio"
                      id={category}
                      name="category"
                      className="mr-2"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                    />
                    <label htmlFor={category}>{category}</label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Price</h3>
              <input
                type="range"
                min="0"
                max="300"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Colors</h3>
              <div className="flex flex-wrap gap-2">
                {['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500', 'bg-gray-500', 'bg-black', 'bg-white border'].map((color, index) => (
                  <button key={index} className={`w-6 h-6 rounded-full border ${color}`} />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {['Xx-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3x-Large'].map((size) => (
                  <button key={size} className="px-3 py-1 bg-gray-100 focus:bg-black focus:text-white border rounded-full text-sm">{size}</button>
                ))}
              </div>
            </div>

            <button className="w-full bg-black text-white py-2 rounded-full">Apply Filters</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-500">Showing {displayedProducts.length} of {filteredProducts.length} products</p>
            <div className="relative">
              <select
                className="appearance-none bg-white border rounded-md py-2 pl-3 pr-10 text-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none" />
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {displayedProducts.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-8">
            <button
              className="flex items-center text-sm"
              onClick={() => {setCurrentPage(prev => Math.max(prev - 1, 1));
                window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="mr-1 h-4 w-4" /> Previous
            </button>
            <div className="flex space-x-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${index + 1 === currentPage ? 'bg-black text-white' : 'text-gray-700'}`}
                  onClick={() => {
                    setCurrentPage(index + 1);
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  }}
                  disabled={index + 1 === currentPage}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              className="flex items-center text-sm"
              onClick={() => {setCurrentPage(prev => Math.min(prev + 1, totalPages));
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
              disabled={currentPage === totalPages}
            >
              Next <ChevronRight className="ml-1 h-4 w-4 disabled:cursor-not-allowed" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}



// 'use client'
// import { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { Star, Minus, Plus, ShoppingCart } from 'lucide-react'
// import ProductCardGroup from '@/components/productCardGroup'
// import { TypeProduct } from '@/lib/utils'
// import { ReviewCard } from '@/components/review'

// interface Review {
//   id: number
//   author: string
//   rating: number
//   content: string
//   date: string
// }

// interface Product {
//   id: number
//   name: string
//   price: number
//   oldPrice: number
//   discount: number
//   rating: number
//   reviewCount: number
//   description: string
//   colors: string[]
//   sizes: string[]
//   images: string[]
//   reviews: Review[]
// }

// // This would typically come from an API or database
// const product: Product = {
//   id: 1,
//   name: "ONE LIFE GRAPHIC T-SHIRT",
//   price: 260,
//   oldPrice: 300,
//   discount: 13,
//   rating: 4.5,
//   reviewCount: 45,
//   description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
//   colors: ["#5A5B40", "#2B4754", "#3C4854"],
//   sizes: ["Small", "Medium", "Large", "X-Large"],
//   images: ["/images/products/gradient-graphic-t-shirt.png", "/images/products/black-striped-t-shirt.png", "/images/products/polo-with-tipping-details.png"],
//   reviews: [
//     {
//       id: 1,
//       author: "Samantha D.",
//       rating: 5,
//       content: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. It's my new favorite shirt. I appreciate the attention to detail. It's definitely worth the purchase!",
//       date: "August 14, 2023"
//     },
//     {
//       id: 2,
//       author: "Alex M.",
//       rating: 4,
//       content: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Sizing is pretty accurate. Really happy about this purchase!",
//       date: "August 15, 2023"
//     },
//     // Add more reviews as needed
//   ]
// }

// let relatedProducts:TypeProduct[] = [
//     { name: 'Vertical Striped Shirt', price: 212, oldPrice: 232, rating: 5, image: "/images/products/vertical-striped.png", slug: "vertical-striped-shirt", category: "t-shirt" },
//     { name: 'Courage Graphic T-shirt', price: 145, rating: 4.3, image: "/images/products/courage-graphic.png", slug: "courage-graphic-t-shirt", category: "t-shirt" },
//     { name: 'Loose Fit Bermuda Shorts', price: 80, rating: 4, image: "/images/products/loose-fit.png", slug: "loose-fit-bermuda-shorts", category: "shorts" },
//     { name: 'Faded Skinny Jeans', price: 210, rating: 4.5, image: "/images/products/faded-skinny-jeans.png", slug: "faded-skinny-jeans", category: "jeans" },
//   ]

// export default function ProductDetail() {
//   const [selectedColor, setSelectedColor] = useState(product.colors[0])
//   const [selectedSize, setSelectedSize] = useState(product.sizes[2])
//   const [quantity, setQuantity] = useState(1)
//   const [activeTab, setActiveTab] = useState('details')
//   const [mainImage, setMainImage] = useState(product.images[0])

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
//         <ol className="inline-flex items-center space-x-1 md:space-x-3">
//           <li><Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
//           <li><span className="text-gray-300 mx-2">&gt;</span></li>
//           <li><Link href="/shop" className="text-gray-500 hover:text-gray-700">Shop</Link></li>
//           <li><span className="text-gray-300 mx-2">&gt;</span></li>
//           <li><Link href="/shop/men" className="text-gray-500 hover:text-gray-700">Men</Link></li>
//           <li><span className="text-gray-300 mx-2">&gt;</span></li>
//           <li><Link href="/shop/men/t-shirts" className="text-gray-500 hover:text-gray-700">T-shirts</Link></li>
//         </ol>
//       </nav>

//       <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
//         {/* Image gallery */}
//         <div className="flex flex-col-reverse">
//           <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
//             <div className="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
//               {product.images.map((image, index) => (
//                 <button
//                   key={index}
//                   className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 "
//                   onClick={() => setMainImage(image)}
//                 >
//                   <span className="sr-only">Image {index + 1}</span>
//                   <span className="absolute inset-0 rounded-md overflow-hidden">
//                     <Image src={image} alt="" className="w-full h-full object-center object-cover" width={96} height={96} />
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="w-full aspect-w-1 aspect-h-1">
//             <Image
//               src={mainImage}
//               alt={product.name}
//               className="w-full h-full object-center object-cover sm:rounded-lg"
//               width={600}
//               height={600}
//             />
//           </div>
//         </div>

//         {/* Product info */}
//         <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
//           <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>

//           <div className="mt-3">
//             <h2 className="sr-only">Product information</h2>
//             <div className="flex items-center">
//               <div className="flex items-center">
//                 {[0, 1, 2, 3, 4].map((rating) => (
//                   <Star
//                     key={rating}
//                     className={`${
//                       product.rating > rating ? 'text-yellow-400' : 'text-gray-300'
//                     } h-5 w-5 flex-shrink-0`}
//                     aria-hidden="true"
//                   />
//                 ))}
//               </div>
//               <p className="sr-only">{product.rating} out of 5 stars</p>
//               <span className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
//                 {product.reviewCount} reviews
//               </span>
//             </div>
//           </div>

//           <div className="mt-6">
//             <h3 className="sr-only">Description</h3>
//             <p className="text-base text-gray-900">{product.description}</p>
//           </div>

//           <div className="mt-4 flex items-center">
//             <p className="text-3xl font-bold text-gray-900">${product.price}</p>
//             <p className="ml-4 text-xl font-medium text-gray-500 line-through">${product.oldPrice}</p>
//             <p className="ml-4 text-lg font-medium text-red-500">-{product.discount}%</p>
//           </div>

//           <div className="mt-6">
//             <h3 className="text-sm font-medium text-gray-900">Color</h3>
//             <div className="mt-2 flex items-center space-x-3">
//               {product.colors.map((color) => (
//                 <button
//                   key={color}
//                   className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                     color === selectedColor ? 'ring-2 ring-indigo-500' : ''
//                   }`}
//                   style={{ backgroundColor: color }}
//                   onClick={() => setSelectedColor(color)}
//                 >
//                   <span className="sr-only">{color}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="mt-6">
//             <h3 className="text-sm font-medium text-gray-900">Size</h3>
//             <div className="mt-2 flex items-center space-x-3">
//               {product.sizes.map((size) => (
//                 <button
//                   key={size}
//                   className={`px-4 py-2 border rounded-md text-sm font-medium ${
//                     size === selectedSize
//                       ? 'bg-indigo-600 text-white'
//                       : 'bg-white text-gray-900 hover:bg-gray-50'
//                   }`}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="mt-10 flex sm:flex-col1">
//             <div className="max-w-xs w-full">
//               <label htmlFor="quantity" className="sr-only">
//                 Quantity
//               </label>
//               <div className="flex border border-gray-300 rounded-md">
//                 <button
//                   type="button"
//                   className="px-4 py-2 text-gray-600 hover:text-gray-700"
//                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                 >
//                   <Minus className="h-5 w-5" />
//                 </button>
//                 <input
//                   type="number"
//                   id="quantity"
//                   name="quantity"
//                   min="1"
//                   value={quantity}
//                   onChange={(e) => setQuantity(parseInt(e.target.value))}
//                   className="w-full text-center border-transparent focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//                 <button
//                   type="button"
//                   className="px-4 py-2 text-gray-600 hover:text-gray-700"
//                   onClick={() => setQuantity(quantity + 1)}
//                 >
//                   <Plus className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-4"
//             >
//               <ShoppingCart className="h-5 w-5 mr-2" />
//               Add to cart
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Product details, reviews, and FAQs */}
//       <div className="mt-16">
//         <div className="border-b border-gray-200">
//           <nav className="-mb-px flex space-x-8" aria-label="Tabs">
//             {['details', 'reviews', 'faqs'].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`${
//                   activeTab === tab
//                     ? 'border-indigo-500 text-indigo-600'
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                 } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </button>
//             ))}
//           </nav>
//         </div>

//         <div className="mt-6">
//           {activeTab === 'details' && (
//             <div>
//               <h3 className="text-lg font-medium text-gray-900">Product Details</h3>
//               <p className="mt-4 text-gray-500">
//                 Detailed information about the product would go here. This could include materials,
//                 care instructions, sizing details, and other relevant information.
//               </p>
//             </div>
//           )}

//           {activeTab === 'reviews' && (
//             <div>
//               <h3 className="text-lg font-medium text-gray-900">Customer Reviews</h3>
//               <div className="mt-6 space-y-10">
//                 {product.reviews.map((review) => (
//                   <ReviewCard key={review.id} review={review} />
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeTab === 'faqs' && (
//             <div>
//               <h3 className="text-lg font-medium text-gray-900">Frequently Asked Questions</h3>
//               <p className="mt-4 text-gray-500">
//                 FAQs about the product would be listed here. This could include questions about sizing,
//                 care, shipping, returns, and other common inquiries.
//               </p>
            
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Related products */}
//       <ProductCardGroup products={relatedProducts} title="You Might Also Like" />
//     </div>
//   )
// }