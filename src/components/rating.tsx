import { Star } from "lucide-react";

export default function Rating(props: { rating: number, number?: boolean }) {
  return (
    <div className="flex items-center py-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < Math.floor(props.rating) ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"}`}
        />
      ))}
      {(props.number == true) ? <span className="ml-1 text-xs text-gray-500">{props.rating}/5</span> : null}
    </div>
  );
};