import React,{ useState } from "react";
import "./App.css";

function Email() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setMessage("Email is Valid");
    } else if (!regEx.test(email) && email !== "") {
      setMessage("Email is Not Valid");
    } else {
      setMessage("");
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value); 
  };

  return (
    <>
    <center>
        <h2>Email Validation</h2>
        <label htmlFor="email">
          Email:
        </label>
        <input
          id="email"
          type="email"
          placeholder="enter email"
          onChange={handleOnChange}
        />
        <button onClick={emailValidation}>Check</button>
        <p>{message}</p>
        </center>
    </>
  );
}

export default Email;