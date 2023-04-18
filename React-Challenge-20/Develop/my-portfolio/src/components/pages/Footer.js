import React from 'react';
import './css/Footer.css';

function Footer() {
  return (
    <footer>
      <p>Created by: Corey Kirschner</p>
      <div className="social-links">
        <a href="https://github.com/CoreyKirschner">Github<i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/corey-kirschner-397785272/">LinkedIn<i className="fab fa-linkedin"></i></a>
        <a href="https://stackoverflow.com/users/21202053/laker1989">Stack Overflow<i className="fab fa-stack-overflow"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
