import React from 'react';
    import Layout from '~/components/Layout';
    import CarComparison from '~/components/CarComparison';

    const Compare: React.FC = () => {
      const car1 = {
        make: 'Toyota',
        model: 'Camry',
        year: 2023,
        imageUrl: 'https://via.placeholder.com/300',
      };

      const car2 = {
        make: 'Honda',
        model: 'Civic',
        year: 2022,
        imageUrl: 'https://via.placeholder.com/300',
      };

      return (
        <Layout>
          <h1 className="text-3xl font-bold mb-6">Car Comparison</h1>
          <CarComparison car1={car1} car2={car2} />
        </Layout>
      );
    };

    export default Compare;
