import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { integralCF } from "@/styles/fonts"
 
export default function NewArrival(){
    return(
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
        <h2 className={`${integralCF.className}mb-8 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black text-center`}>NEW ARRIVALS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: 'T-shirt with Tape Details', price: 120, rating: 5, image: "/images/products/t-shirt-with-taped-details.png" },
            { name: 'Skinny Fit Jeans', price: 240, oldPrice: 260, rating: 4.5, image: "/images/products/skinny-fit-jeans.png" },
            { name: 'Checkered Shirt', price: 180, rating: 4.7, image: "/images/products/checkerd-shirt.png" },
            { name: 'Sleeve Striped T-shirt', price: 130, oldPrice: 160, rating: 4.8, image: "/images/products/sleeve-striped-t-shirt.png" },
          ].map((product) => (
            <div key={product.name} className="group text-black">
              <div className="aspect-w-1 aspect-h-1 h-72 w-full overflow-hidden rounded-lg bg-gray-200 mb-4">
                <Image src={product.image} alt={product.name} width={300} height={300} className="object-cover object-center group-hover:opacity-75" />
              </div>
              <h3 className="text-sm font-medium mb-1">{product.name}</h3>
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
                <span className="ml-1 text-sm text-gray-500">{product.rating}</span>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-semibold text-gray-900">${product.price}</span>
                {product.oldPrice && (
                  <span className="ml-2 text-sm font-medium text-gray-500 line-through">${product.oldPrice}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 ">
          <Link href="/new-arrivals" className="font-medium text-lg text-black border-gray-500 border-2 h-9 w-10 px-9 py-2 rounded-full">
            View All
          </Link>
        </div>
      </section>
    )
}