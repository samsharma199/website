import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Sameer Kumar</h1>
          <p className="hero-subtitle">Senior Software Engineer | Big Data Specialist</p>
          <p className="hero-description">
            Passionate about building scalable data-driven applications using cutting-edge technologies.
          </p>
          <button className="cta-button">
            <a className="link-button" href="website/projects">View My Projects</a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
