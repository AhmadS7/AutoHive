import React from 'react';

    interface ReviewProps {
      carModel: string;
      rating: number;
      comment: string;
      author: string;
    }

    const Review: React.FC<ReviewProps> = ({ carModel, rating, comment, author }) => {
      return (
        <div className="border rounded-lg p-4 mb-4">
          <h3 className="text-lg font-semibold">{carModel}</h3>
          <div className="flex items-center my-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 1l2.928 5.646 6.072.436-4.5 4.39 1.072 6.046L10 14.247l-5.572 2.93 1.072-6.046-4.5-4.39 6.072-.436L10 1z"
                />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 mb-2">{comment}</p>
          <p className="text-sm text-gray-600">By: {author}</p>
        </div>
      );
    };

    export default Review;
