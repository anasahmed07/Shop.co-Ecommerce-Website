import { TypeProduct } from "@/lib/utils";
import Rating from "./rating";
import Image from "next/image";
import Link from "next/link";
import { satoshi } from "@/styles/fonts";

export function ProductCard(prams: TypeProduct) {

    return (
        <div className={`${satoshi.className} min-w-48 w-72 space-y-5 rounded-2xl p-2 cursor-pointer hover:shadow-md transition duration-300 ease-in-out`}>
            <Link href={`/shop/${prams.slug}`}>
                <Image src={prams.image} alt={prams.name} width={300} height={300} className="mb-4 aspect-square rounded-2xl object-center object-cover" />
                <h3 className="text-lg font-semibold">{prams.name}</h3>
                <Rating rating={prams.rating} number={true}/>
                <div className="flex items-center">
                    <span className="text-lg font-bold text-gray-900">${prams.price}</span>
                    {prams.oldPrice && (
                        <span className="ml-2 text-lg font-bold text-gray-400 line-through">${prams.oldPrice}</span>
                    )}
                </div>
            </Link>
        </div>
    )
}