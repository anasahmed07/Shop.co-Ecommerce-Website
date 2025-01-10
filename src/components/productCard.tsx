import { TypeProduct } from "@/lib/utils";
import { Rating } from "./rating";
import Image from "next/image";
import Link from "next/link";
import { satoshi } from "@/styles/fonts";

export function ProductCard(props: TypeProduct) {

    return (
        <div className={`${satoshi.className} w-64 space-y-5 rounded-2xl pb-2 cursor-pointer hover:shadow-md transition duration-300 ease-in-out`}>
            <Link href={`/shop/${props.slug}`}>
                <div className="rounded-2xl mb-4">
                    <Image src={props.image} alt={props.name} width={300} height={300} className="rounded-2xl object-center object-cover" />
                </div>
                <h3 className="text-lg font-semibold">{props.name}</h3>
                <Rating rating={props.rating} />
                <div className="flex items-center">
                    <span className="text-lg font-bold text-gray-900">${props.price}</span>
                    {props.oldPrice && (
                        <span className="ml-2 text-lg font-bold text-gray-400 line-through">${props.oldPrice}</span>
                    )}
                </div>
            </Link>
        </div>
    )
}