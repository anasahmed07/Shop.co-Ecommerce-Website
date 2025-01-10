import { Star } from "lucide-react";

export const Rating = (props: { rating: number }) => {
  return (
    <div className="flex items-center py-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < Math.floor(props.rating) ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"}`}
        />
      ))}
      <span className="ml-1 text-xs text-gray-500">{props.rating}/5</span>
    </div>
  );
};