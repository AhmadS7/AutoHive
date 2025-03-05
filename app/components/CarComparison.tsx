import React from 'react';

    interface CarComparisonProps {
      car1: { make: string; model: string; year: number; imageUrl: string };
      car2: { make: string; model: string; year: number; imageUrl: string };
    }
    const CarComparison: React.FC<CarComparisonProps> = ({ car1, car2 }) => {
      return (
        <div className="flex">
          <div className="w-1/2 p-4">
            <img className="w-full" src={car1.imageUrl} alt={`${car1.make} ${car1.model}`} />
            <h2 className="text-lg font-semibold">{car1.make} {car1.model} ({car1.year})</h2>
          </div>
          <div className="w-1/2 p-4">
            <img className="w-full" src={car2.imageUrl} alt={`${car2.make} ${car2.model}`} />
            <h2 className="text-lg font-semibold">{car2.make} {car2.model} ({car2.year})</h2>
          </div>
        </div>
      );
    };

    export default CarComparison;
