import React from 'react';
    import Layout from '~/components/Layout';
    import CarListing from '~/components/CarListing';

    // Dummy data for car listings
    const cars = [
      {
        id: 1,
        make: 'Toyota',
        model: 'Camry',
        year: 2023,
        imageUrl: 'https://via.placeholder.com/300',
        description: 'A reliable and comfortable sedan.',
      },
      {
        id: 2,
        make: 'Honda',
        model: 'Civic',
        year: 2022,
        imageUrl: 'https://via.placeholder.com/300',
        description: 'A popular compact car with great fuel efficiency.',
      },
      {
        id: 3,
        make: 'Ford',
        model: 'Mustang',
        year: 2024,
        imageUrl: 'https://via.placeholder.com/300',
        description: 'An iconic American muscle car.',
      },
    ];

    const Cars: React.FC = () => {
      return (
        <Layout>
          <div>
            <h1 className="text-3xl font-bold mb-4">Car Listings</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cars.map((car) => (
                <CarListing key={car.id} make={car.make} model={car.model} year={car.year} imageUrl={car.imageUrl} description={car.description} />
              ))}
            </div>
          </div>
        </Layout>

      );
    };

    export default Cars;
