// import React from 'react';
// import '/Users/laker1989/Desktop/Projects/Challenge-20/Develop/my-portfolio/src/components/pages/css/Footer.css';

// // TODO: Add a comment explaining how we are able to extract the key value pairs from props

// function NavTabs({ currentPage, handlePageChange }) {
//   return (
//     <div className="nav-header">
//       <h1>Corey Kirschner</h1>
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <a
//           href="#home"
//           onClick={() => handlePageChange('Home')}
//           //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

//           className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
//         >
//           Home
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#about"
//           onClick={() => handlePageChange('About')}
//           //  TODO: Add a comment explaining what this logic is doing

//           className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//         >
//           About
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#blog"
//           onClick={() => handlePageChange('Blog')}
//           //  TODO: Add a comment explaining what this logic is doing

//           className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
//         >
//           Blog
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#contact"
//           //  TODO: Add a comment explaining what this logic is doing

//           onClick={() => handlePageChange('Contact')}
//           className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//         >
//           Contact
//         </a>
//       </li>
//     </ul>
//   </div>
//   );
// }

// export default NavTabs;

import React from 'react';
import './pages/Footer';
import './pages/css/NavTabs.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="nav-header">
      <h1>Corey Kirschner</h1>
      <div className="nav-line"></div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#blog"
            onClick={() => handlePageChange('Blog')}
            className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
