import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <main>
      <section className="about-us section">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <div className="about-content">
            <div className="about-image">
              <img src="https://i.pinimg.com/originals/df/d3/f6/dfd3f6db0ead07ec259b573261e673b7.jpg" alt="Gym interior" />
            </div>
            <div className="about-text">
              <h3>Our Story</h3>
              <p>
                Royal Fitness was founded in 2010 with a mission to provide a premium fitness experience that is accessible to everyone. Our founder, a former professional athlete, wanted to create a space where people of all fitness levels could feel comfortable and supported in their journey.
              </p>
              <h3>Our Mission</h3>
              <p>
                At Royal Fitness, we believe that fitness is not just about physical strength, but also about mental wellbeing. Our mission is to help our members build a stronger, healthier version of themselves through expert guidance, supportive community, and state-of-the-art facilities.
              </p>
              <h3>Our Team</h3>
              <p>
                Our team consists of certified fitness professionals who are passionate about helping others achieve their fitness goals. From personal trainers to nutritionists, our experts are here to provide you with the knowledge and support you need to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;