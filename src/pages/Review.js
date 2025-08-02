import React from 'react';
import './Review.css';

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: 'John',
      rating: 5,
      image: '',
      text: 'I absolutely love how easy it is to navigate this site. I can quickly find reviews for any product Im interested in, and the search bar is super helpful'
    },
    {
      id: 2,
      name: 'Steve',
      rating: 4,
      image: '',
      text: 'LThe reviews are incredibly detailed and cover all the aspects I need to know about. I love how each review breaks down the pros and cons, and I can tell the reviewers are being honest'
    },
    {
      id: 3,
      name: 'David',
      rating: 5,
      image: '',
      text: 'The reviews are incredibly detailed and cover all the aspects I need to know about. I love how each review breaks down the pros and cons, and I can tell the reviewers are being honest'
    }
  ];

  return (
    <main>
      <section className="reviews section">
        <div className="container">
          <h2 className="section-title">Client Reviews</h2>
          <div className="reviews-grid">
            {reviews.map(review => (
              <div className="review-card" key={review.id}>
                <div className="review-image">
                  <img src={review.image || "/placeholder.svg"} alt={review.name} />
                </div>
                <h3 className="reviewer-name">{review.name}</h3>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i} 
                      className={`fas fa-star ${i < review.rating ? 'filled' : ''}`}
                    ></i>
                  ))}
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Review;