import Link from "next/link"
import { integralCF } from "@/styles/fonts"
import { ProductCard } from "./productCard"
import { TypeProduct } from "@/lib/utils"

export default function TopSelling(props:TypeProduct[]){
    return(
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-300">
        <h2 className={`${integralCF.className}text-3xl sm:text-4xl lg:text-5xl text-center font-extrabold text-black mb-8`}>TOP SELLING</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {props.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
        <div className="text-center mt-10 ">
          <Link href="/shop#new-arrivals" className="font-medium text-lg text-black border-gray-500 border-2 h-9 w-10 px-9 py-2 rounded-full">
            View All
          </Link>
        </div>
      </section>
    )
}