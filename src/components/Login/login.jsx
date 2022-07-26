import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./login.css";

function Login() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigatel = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    navigatel('/cards')
  };
  const renderForm = (
    <div className="app">
          <div className="login-form">
              <div className="title">Restaurant Sign In</div>
              <div className="form">
                <form onSubmit={handleSubmit}>
                  <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                  </div>
                  <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                  </div>
                  <div className="button-container">
                    <input type="submit"/>
                  </div>
                </form>
              </div>
        </div>
    </div>
  );

  return (
    <div>{!isSubmitted && renderForm}</div>
  );
}

export default Login;