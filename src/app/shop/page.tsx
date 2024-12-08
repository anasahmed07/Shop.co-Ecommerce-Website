'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, ChevronDown, ChevronLeft, ChevronRight,SlidersVertical ,X } from 'lucide-react'
import { products } from '@/lib/data'
import Link from 'next/link'
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger,} from "@/components/ui/drawer"



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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProducts.map((product) => (
              <Link href={`/shop/${product.id}`}>
                <div key={product.id} className="border rounded-lg p-4">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 mb-4">
                    <Image src={product.image} alt={product.name} width={300} height={300} className="object-cover object-center" />
                  </div>
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-1 text-sm text-gray-500">{product.rating}</span>
                  </div>
                  <div className="mt-1 flex items-center">
                    <span className="text-sm font-medium text-gray-900">${product.price}</span>
                    {product.oldPrice && (
                      <span className="ml-2 text-sm font-medium text-gray-500 line-through">${product.oldPrice}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-8">
            <button
              className="flex items-center text-sm"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="mr-1 h-4 w-4" /> Previous
            </button>
            <div className="flex space-x-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${index + 1 === currentPage ? 'bg-black text-white' : 'text-gray-700'}`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              className="flex items-center text-sm"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}