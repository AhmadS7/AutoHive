import React from 'react';
    import Layout from '~/components/Layout';
    import Review from '~/components/Review';

    const reviews = [
      {
        id: 1,
        carModel: 'Toyota Camry',
        rating: 4,
        comment: 'Great car for daily commuting. Very reliable.',
        author: 'John Doe',
      },
      {
        id: 2,
        carModel: 'Honda Civic',
        rating: 5,
        comment: 'Excellent fuel efficiency and fun to drive.',
        author: 'Jane Smith',
      },
      {
        id: 3,
        carModel: 'Ford Mustang',
        rating: 3,
        comment: 'Powerful engine but lacks some modern features.',
        author: 'Mike Johnson',
      },
    ];
    const Reviews: React.FC = () => {
      return (
        <Layout>
          <h1 className="text-3xl font-bold mb-6">Car Reviews</h1>
          {reviews.map((review) => (
            <Review key={review.id} carModel={review.carModel} rating={review.rating} comment={review.comment} author={review.author} />
          ))}
        </Layout>
      );
    };

    export default Reviews;
