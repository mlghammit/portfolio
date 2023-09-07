import React from 'react';
import './index.scss';

const Resume = () => {
  const googleDriveLink = "https://docs.google.com/document/d/15_qai4uMWPXdEeZPueN4rLQlKn_5N3jgFuiMk2of46Q/edit?usp=sharing";

  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1>My Resume</h1>
      </div>
      <div className="resume-content">
        <iframe
          src={googleDriveLink}
          width="100%"
          height="600px"
          title="My Resume"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
