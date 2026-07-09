"use client";

import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: number;
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
  onMouseEnter?: (index: number) => void;
  onMouseLeave?: () => void;
  className?: string;
}
export default function RatingStars({
  rating,
  maxRating = 5,
  size = 20,
  interactive = false,
  onRatingChange,
  className = ''
}: RatingStarsProps) {
  const handleClick = (index: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(index + 1);
    }
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: maxRating }).map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => handleClick(index)}
          disabled={!interactive}
          className={interactive ? 'cursor-pointer' : 'cursor-default'}
        >
          <Star
            size={size}
            className={`transition ${
              index < rating
                ? 'fill-[#FFB300] text-[#FFB300]'
                : 'fill-gray-200 text-gray-200'
            } ${interactive ? 'hover:scale-110' : ''}`}
          />
        </button>
      ))}
    </div>
  );
}