// import './css/Contact.css';

// export default function Contact() {
//   return (
//     <div>
//       <h1>Contact Page</h1>
//       <form>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" name="name" />
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" />
//         <label htmlFor="message">Message:</label>
//         <textarea id="message" name="message" rows="4" cols="50"></textarea>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

import { useState } from 'react';
import './css/Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (nameError && e.target.value) {
      setNameError(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError && e.target.value) {
      setEmailError(false);
    }
    if (emailInvalid && /\S+@\S+\.\S+/.test(e.target.value)) {
      setEmailInvalid(false);
    }
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      if (e.target.name === 'name') {
        setNameError(true);
      } else if (e.target.name === 'email') {
        setEmailError(true);
      } else if (e.target.name === 'message') {
        setMessageError(true);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      if (!name) {
        setNameError(true);
      }
      if (!email) {
        setEmailError(true);
      }
      if (!message) {
        setMessageError(true);
      }
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailInvalid(true);
      return;
    }
    // code to submit form data goes here
    console.log('Form data submitted:', { name, email, message });
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} onBlur={handleBlur} />
        {nameError && <p className="error">Name is required</p>}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} onBlur={handleBlur} />
        {emailError && <p className="error">Email is required</p>}
        {emailInvalid && <p className="error">Invalid email address</p>}
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" cols="50" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        {messageError && <p className="error">Message is required</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
