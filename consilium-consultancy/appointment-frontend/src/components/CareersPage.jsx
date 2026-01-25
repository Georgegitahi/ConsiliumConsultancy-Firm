import React from 'react';

const CareersPage = () => {
  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="container">
          <h1>Join Our Team</h1>
          <p>Build your career with Consilium Consultancy Firm</p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="why-work-with-us">
        <div className="container">
          <h2>Why Choose Consilium?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Growth Opportunities</h3>
              <p>Continuous learning and professional development programs</p>
            </div>
            <div className="benefit-item">
              <h3>Collaborative Culture</h3>
              <p>Work with talented professionals in a supportive environment</p>
            </div>
            <div className="benefit-item">
              <h3>Impactful Work</h3>
              <p>Help clients solve complex business challenges</p>
            </div>
            <div className="benefit-item">
              <h3>Competitive Benefits</h3>
              <p>Comprehensive benefits package and competitive compensation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="open-positions">
        <div className="container">
          <h2>Current Openings</h2>
          <div className="job-listings">
            <div className="job-card">
              <h3>Senior Business Consultant</h3>
              <p className="job-location">Nairobi, Kenya</p>
              <p className="job-type">Full-time</p>
              <p className="job-description">
                Lead strategic consulting projects and mentor junior consultants.
              </p>
              <button className="apply-btn">Apply Now</button>
            </div>
            
            <div className="job-card">
              <h3>Data Analyst</h3>
              <p className="job-location">Nairobi, Kenya</p>
              <p className="job-type">Full-time</p>
              <p className="job-description">
                Analyze business data to provide insights and recommendations.
              </p>
              <button className="apply-btn">Apply Now</button>
            </div>

            <div className="job-card">
              <h3>Project Manager</h3>
              <p className="job-location">Nairobi, Kenya</p>
              <p className="job-type">Full-time</p>
              <p className="job-description">
                Manage consulting projects from initiation to completion.
              </p>
              <button className="apply-btn">Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="application-process">
        <div className="container">
          <h2>Our Hiring Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Application Review</h3>
              <p>We review your application and resume</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Initial Interview</h3>
              <p>Phone or video interview with HR</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Technical Assessment</h3>
              <p>Skills assessment relevant to the role</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Final Interview</h3>
              <p>Meet with the hiring manager and team</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Offer</h3>
              <p>Welcome to the Consilium team!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Careers */}
      <section className="careers-contact">
        <div className="container">
          <h2>Don't See the Right Role?</h2>
          <p>We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.</p>
          <button className="contact-btn">Send Resume</button>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;