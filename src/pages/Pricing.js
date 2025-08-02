import React from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: 'BASIC',
      price: '$100/Month',
      features: [
        'Smart workout plan',
        'At home workouts'
      ]
    },
    {
      id: 2,
      name: 'PRO',
      price: '$150/Month',
      features: [
        'Pro GYMS',
        'Smart workout plan',
        'At home workouts'
      ]
    },
    {
      id: 3,
      name: 'PREMIUM',
      price: '$300/Month',
      features: [
        'ELITE Gyms & Classes',
        'Pro GYMS',
        'Smart workout plan',
        'At home workouts',
        'Personal Training'
      ]
    }
  ];

  return (
    <main>
      <section className="pricing section">
        <div className="container">
          <h2 className="section-title">
            Our <span>Plans</span>
          </h2>
          <div className="pricing-grid">
            {plans.map(plan => (
              <div className="pricing-card" key={plan.id}>
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">{plan.price}</div>
                <ul className="plan-features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fas fa-circle"></i> {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/join" className="btn join-now-btn">
                  Join Now <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;