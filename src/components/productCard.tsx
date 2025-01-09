import { TypeProduct } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";

export function ProductCard(props:TypeProduct){

    return (
        <div key={props.name} className="group text-black">
        <div className="aspect-w-1 aspect-h-1 h-72 w-full overflow-hidden rounded-lg bg-gray-200 mb-4">
            <Image
            src={props.image}
            alt={props.name}
            width={300}
            height={300}
            className="object-cover object-center group-hover:opacity-75"
            />
        </div>
        <h3 className="text-sm font-medium mb-1">{props.name}</h3>
        <div className="flex items-center mb-1">
            {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(props.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
            />
            ))}
            <span className="ml-1 text-sm text-gray-500">{props.rating}</span>
        </div>
        <div className="flex items-center">
            <span className="text-lg font-semibold text-gray-900">
            ${props.price}
            </span>
            {props.oldPrice && (
            <span className="ml-2 text-sm font-medium text-gray-500 line-through">
                ${props.oldPrice}
            </span>
            )}
        </div>
        </div>
    )
}