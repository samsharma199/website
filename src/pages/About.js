import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <section className="content-section">
        <h2 className="section-title">About Me</h2>
        <p className="section-description">
          I am Sameer Kumar, a Software Engineer-AWS at Tiger Analytics with experience in Big Data technologies. I have extensive experience in a diverse array of tools and platforms, managing data pipelines, storage, and orchestration efficiently, and executing complex data solutions that drive tangible outcomes for projects and clients.
        </p>
        <h3 className="skills-title">Technical Skills</h3>
        <ul className="skills-list">
          <li><strong>Big Data Ecosystem</strong>: HDFS, Hive, Spark, Beam, AWS, GCP, Open Telemetry</li>
          <li><strong>Information Management</strong>: RDBMS (PostgreSQL, MySQL)</li>
          <li><strong>Programming Languages</strong>: Python, Unix Shell Scripting</li>
          <li><strong>Analytics Tool</strong>: Python</li>
          <li><strong>Data Warehousing Tools</strong>: Snowflake, Redshift, BigQuery</li>
          <li><strong>Backend Languages</strong>: Flask</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
