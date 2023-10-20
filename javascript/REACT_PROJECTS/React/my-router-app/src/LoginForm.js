import React, { useState } from 'react';

export const LoginForm = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });

  const emailChangeHandler = (event) => {
    setUserData((prevData) => ({
      ...prevData,
      email: event.target.value,
    }));
  };

  const passwordChangeHandler = (event) => {
    setUserData((prevData) => ({
      ...prevData,
      password: event.target.value,
    }));
  };

  return (
    <>
      <form>
        <center>
        <input type="email" id="email" onBlur={emailChangeHandler} placeholder="Enter email" />
        <input type="password" id="password" onBlur={passwordChangeHandler} placeholder="Enter password" />
        <br/>
        email : {userData.email}<br/>
        password:  {userData.password}
        </center>
      </form>
    </>
  );
};

