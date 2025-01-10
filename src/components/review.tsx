import { Review } from "@/lib/utils";
import Rating from "@/components/rating";
import { Check } from "lucide-react";


export const ReviewCard = (props:{ customerReview:Review }) => {
    return (
    <div className="w-full md:w-1/3 flex-shrink-0 px-2 md:px-4">
        <div className="bg-white p-4 md:p-6 rounded-3xl border border-gray-200 h-full flex flex-col">
          <Rating rating={props.customerReview.rating} number={false} />
          <div className="flex items-center mb-4">
            <span className="font-semibold text-black mr-2">{props.customerReview.author}</span>
            <span className="h-5 w-5 rounded-full bg-green-500"><Check strokeWidth={"3px"} className="text-white left-0 right-0 h-3 w-3 translate-x-1 translate-y-1 md:translate-x-[1.75px] md:translate-y-[1.75px] md:h-4 md:w-4"/></span>
          </div>
          <p className="text-gray-600 text-xs md:text-sm flex-grow">{props.customerReview.content}</p>
        </div>
      </div>
    );
}