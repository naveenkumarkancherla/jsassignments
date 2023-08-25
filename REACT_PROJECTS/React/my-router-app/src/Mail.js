import React, { useEffect, useState } from 'react';

const UserForm = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    const form = document.getElementById('form');
    const emailInput = document.getElementById('email');
    const emailErrorElement = document.getElementById('error');

    const handleSubmit = (event) => {
      event.preventDefault();
      if (validateForm()) {
        form.submit();
      }
    };

    const handleEmailInput = () => {
      const emailValue = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailValue)) {
        emailErrorElement.innerHTML = '<p style="color:red;">Please enter a valid email address.</p>';
      } else {
        emailErrorElement.innerHTML = '<p style="color:green;">valid email</p>';
      }
    };

    form.addEventListener('submit', handleSubmit);
    emailInput.addEventListener('input', handleEmailInput);

    return () => {
      form.removeEventListener('submit', handleSubmit);
      emailInput.removeEventListener('input', handleEmailInput);
    };
  }, []); 

  const validateForm = () => {
    const emailValue = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      setEmailError('Please enter a valid email address.');
      return false;
    }
    setEmailError('');
    return true;
  };

  return (
    <center>
    <form id="form" method="get">
      <label htmlFor="email"></label>
      <input
        type="email"
        id="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="submit" id="button" value="Submit" /><br />
      <span id="error" dangerouslySetInnerHTML={{ __html: emailError }} />
    </form>
    </center>
  );
};

export default UserForm;
