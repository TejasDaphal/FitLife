import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Physical Fitness',
      image: 'https://th.bing.com/th/id/OIP.EwbatycHx_915hcNzd7vRgHaE8?rs=1&pid=ImgDetMain',
      description: 'Comprehensive physical fitness programs designed to improve overall health and wellness.'
    },
    {
      id: 2,
      title: 'Weight Gain',
      image: 'https://images.indianexpress.com/2019/12/weight_759.jpg',
      description: 'Specialized programs for individuals looking to gain healthy weight and muscle mass.'
    },
    {
      id: 3,
      title: 'Strength Training',
      image: 'https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Triathlon/Galleries/12+Best+Strength+Exercises/18.jpg',
      description: 'Focused strength training regimens to build muscle and increase physical power.'
    },
    {
      id: 4,
      title: 'Personal Training',
      image: 'https://th.bing.com/th/id/OIP.dNNYMNEGK4KPgweFiBViogHaE8?rs=1&pid=ImgDetMain',
      description: 'One-on-one training sessions with expert trainers tailored to your specific goals.'
    },
    {
      id: 5,
      title: 'Weight Loss',
      image: 'https://th.bing.com/th/id/OIP._iR3glOBchEdKOqFPqXPxQHaGL?rs=1&pid=ImgDetMain',
      description: 'Effective weight loss programs combining exercise and nutritional guidance.'
    },
    {
      id: 6,
      title: 'Cardio Training',
      image: 'https://images.healthshots.com/healthshots/en/uploads/2023/05/31144842/cardio-workout.jpg',
      description: 'Cardiovascular training to improve heart health and endurance.'
    }
  ];

  return (
    <main>
      <section className="services section">
        <div className="container">
          <h2 className="section-title">
            Our <span>Services</span>
          </h2>
          <div className="services-grid">
            {services.map(service => (
              <Link to={`/services/${service.id}`} className="service-card" key={service.id}>
                <div className="service-image">
                  <img src={service.image || "/placeholder.svg"} alt={service.title} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <span className="view-details">View Details <i className="fas fa-arrow-right"></i></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;