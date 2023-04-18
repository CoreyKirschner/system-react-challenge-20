import React from 'react';
import Selfie from './images/selfie.jpg';
import './css/About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Page</h1>
      <img src={Selfie} alt="profile" className="selfie-img" />
      <p>
        Hello and welcome to my portfolio page. I am Corey Kirschner, 33 years old, and about to graduate from the UCLA part time coding bootcamp, this is one of my final individual assignments being my portfolio using React. I plan on adding more style and making it look better overall.
      </p>
    </div>
  );
}

export default About;
