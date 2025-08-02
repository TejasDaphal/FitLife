import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Build Your <br />
              Dream Physique
            </h1>
            <h2 className="hero-subtitle">Strength Training</h2>
            <p className="hero-text">
            Going to the gym can help you stay fit and healthy. It can also help to reduce stress and improve sleep. Regular exercise can also boost your mood and improve your mental health.
            </p>
            <Link to="/join" className="btn btn-filled hero-btn">
              Sign In
            </Link>
          </div>
          <div className="hero-image">
            <img src="https://wallpaperaccess.com/full/1696639.jpg" alt="Fitness model" />
          </div>
        </div>
      </section>

      <section className="why-us section">
        <div className="container why-us-container">
          <div className="why-us-image">
            <img src="https://cvlifestyles.co.uk/wp-content/uploads/2019/02/personal-training.jpg" alt="Person on treadmill" />
          </div>
          <div className="why-us-content">
            <h2 className="why-us-title">
              Why Choose <br />
              Us?
            </h2>
            <div className="why-us-features">
              <p>
                Our diverse membership base creates a friendly and
                supportive atmosphere, where you can make friends and stay
                motivated.
              </p>
              <p>Unlock your potential with our expert Personal Trainers.</p>
              <p>Elevate your fitness with practice sessions.</p>
              <p>
                We provide Supportive management, for your fitness
                success.
              </p>
              <Link to="/join" className="btn btn-filled">
                Book A Free Class
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;