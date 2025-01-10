import Link from "next/link"
import { integralCF } from "@/styles/fonts"
import { ProductCard } from "./productCard"
import { TypeProduct } from "@/lib/utils"

export default function TopSelling(props: { products: TypeProduct[] , url:string , title:string}){
    return(
        <section className="overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-300">
        <h2 className={`${integralCF.className} text-3xl md:text-5xl text-center font-extrabold text-black mb-8`}>{props.title}</h2>
        <div className="flex justify-between gap-2 min-w-[700px]">
          {props.products.map((product) => (
            <ProductCard {...product} key={product.slug}/>
          ))}
        </div>
        <div className="text-center w-full mt-10 ">
          <Link href={`/shop#${props.url}`} className="w-full font-medium text-lg text-black border-gray-500 border-2 h-9  px-9 py-2 rounded-full">
            View All
          </Link>
        </div>
      </section>
    )
}