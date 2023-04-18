import React from 'react';
import './css/Blog.css';

import resumeImage from './images/resume-screenshot.png';

export default function Resume() {
  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <div className="resume-download">
        <a href={resumeImage} download>Download Resume</a>
      </div>
      <div className="resume-skills">
        <h2>Proficiencies</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </div>
    </div>
  );
}

