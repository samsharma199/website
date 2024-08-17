import React from 'react';

const Projects = () => {
  return (
    <div className="projects-container">
      <section className="content-section">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-list">
          <div className="project-item">
            <h3 className="project-title">API Endpoints for Data Integration</h3>
            <p className="project-description">
              Designed and implemented multiple API endpoints for streamlined data collection and integration. These endpoints
              facilitated the ingestion of diverse data sources into a centralized system, ensuring consistent data capture and
              processing. Leveraging Flask, I developed a scalable API architecture that supported real-time data collection,
              validation, and transformation, enabling efficient data flow into downstream systems such as Pub/Sub, Dataflow,
              BigQuery, and GCS for further analysis and storage.
            </p>
          </div>

          <div className="project-item">
            <h3 className="project-title">Data Collection & Processing Pipeline</h3>
            <p className="project-description">
              Developed a robust data collection and processing pipeline using Open Telemetry and Avro-formatted data, managed via
              a Flask API. The API registered Avro schemas in Firestore, and an SDK transmitted the data to Pub/Sub. The data was
              then ingested, deserialized, and processed through Dataflow pipelines before being stored and analyzed in BigQuery and
              GCS. This ensured a secure, efficient data flow from capture to storage, facilitating comprehensive analysis and
              reporting.
            </p>
          </div>

          <div className="project-item">
            <h3 className="project-title">Customer Behavior Analysis</h3>
            <p className="project-description">
              Utilized Open Telemetry to gather customer behavior data across retail platforms. Processed data through Dataflow to
              analyze buying patterns and preferences, generating tailored marketing strategies for individual customers or
              segments.
            </p>
          </div>

          <div className="project-item">
            <h3 className="project-title">Real-time Inventory Management</h3>
            <p className="project-description">
              Operated Open Telemetry to gather real-time inventory data across multiple distribution centers. Employed Dataflow to
              process data, predict demand fluctuations, and optimize stock levels. This minimized stockouts, reduced excess
              inventory, and improved supply chain efficiency for CPG companies.
            </p>
          </div>

          <div className="project-item">
            <h3 className="project-title">E-commerce User Interaction Analysis</h3>
            <p className="project-description">
              Employed Open Telemetry to collect live user interaction data on e-commerce platforms. Used Dataflow to process data,
              analyze browsing behavior and preferences, offering personalized product recommendations and improving site
              navigation. This resulted in increased conversions, improved user satisfaction, and drove customer loyalty in
              e-commerce ventures.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
