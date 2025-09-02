import { Star } from 'lucide-react';

interface ProductRatingProps {
  rating: number;
  reviews?: number;
  showReviews?: boolean;
}

const ProductRating = ({ rating, reviews, showReviews = true }: ProductRatingProps) => {
  return (
    <div className="flex items-center space-x-1">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={`${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-gray-200 text-gray-200'
            }`}
          />
        ))}
      </div>
      {showReviews && reviews && (
        <span className="text-xs text-muted-foreground">({reviews})</span>
      )}
    </div>
  );
};

export default ProductRating;