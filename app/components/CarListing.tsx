import React from 'react';

    interface CarListingProps {
      make: string;
      model: string;
      year: number;
      imageUrl: string;
      description: string;
    }
    const CarListing: React.FC<CarListingProps> = ({ make, model, year, imageUrl, description }) => {
      return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={imageUrl} alt={`${make} ${model}`} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{make} {model} ({year})</div>
            <p className="text-gray-700 text-base">
              {description}
            </p>
          </div>
        </div>
      );
    };

    export default CarListing;
