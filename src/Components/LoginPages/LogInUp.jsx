import React, { useState } from "react";
import './Loginup.css'; 
import SignIn from "./SignIn ";
import SignUp from "./SignUp";

const LogInUp = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="login-container">
      <div className="toggle-buttons">
       
      </div>
      <div className="form-container">
        {isSignIn ? (
          <SignIn toggleForm={toggleForm} />
        ) : (
          <SignUp toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default LogInUp;
