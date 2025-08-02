import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { id } = useParams();

  // Service data - ideally should come from an API or database
  const services = [
    {
      id: '1',
      title: 'Physical Fitness',
      image: 'https://th.bing.com/th/id/OIP.EwbatycHx_915hcNzd7vRgHaE8?rs=1&pid=ImgDetMain',
      description: 'Comprehensive programs to enhance overall fitness and well-being.',
      longDescription: 'Physical fitness is a state of health and well-being achieved through exercise, proper nutrition, and adequate rest. Our certified trainers guide you through structured cardio, strength, and flexibility training, ensuring safe and effective progress.',
      benefits: [
        'Improved cardiovascular health',
        'Increased muscle strength and tone',
        'Enhanced flexibility and mobility',
        'Better posture and balance',
        'Reduced risk of chronic diseases'
      ]
    },
    {
      id: '2',
      title: 'Weight Gain',
      image: 'https://images.indianexpress.com/2019/12/weight_759.jpg',
      description: 'Customized programs for healthy weight and muscle gain.',
      longDescription: 'Our weight gain program combines strategic resistance training with proper nutrition to ensure healthy weight gain. We focus on lean muscle development with progressive workouts and meal planning.',
      benefits: [
        'Personalized meal plans',
        'Resistance training routines',
        'Supplement guidance',
        'Regular progress tracking',
        'Expert coaching and support'
      ]
    }
  ];

  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <main className="service-not-found">
        <div className="container">
          <h2>Service Not Found</h2>
          <Link to="/services" className="btn">Back to Services</Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="service-detail section">
        <div className="container">
          <div className="service-detail-header">
            <Link to="/services" className="back-link">
              <i className="fas fa-arrow-left"></i> Back to Services
            </Link>
            <h2 className="section-title">{service.title}</h2>
          </div>
          
          <div className="service-detail-content">
            <div className="service-detail-image">
              <img src={service.image || "/placeholder.svg"} alt={service.title} />
            </div>
            
            <div className="service-detail-info">
              <p className="service-detail-description">{service.longDescription}</p>
              
              <h3 className="benefits-title">Benefits</h3>
              <ul className="benefits-list">
                {service.benefits.map((benefit, index) => (
                  <li key={index}>
                    <i className="fas fa-check"></i> {benefit}
                  </li>
                ))}
              </ul>
              
              <Link to="/join" className="btn btn-filled">Join This Program</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;