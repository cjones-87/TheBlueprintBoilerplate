import React, { useRef } from 'react';
import LoginFormData from '../formData/authentication/LoginFormData';

const LoginForm = () => {
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const loginRefs = [email, username, password];

  return (
    <form id="loginForm">
      <div className="authForm">
        <h1 className="center" id="authHeader">
          Login
        </h1>
        {LoginFormData.map((data, index) => (
          <div className="authForm" key={index}>
            <div className="inputContainer">
              <input
                autoComplete={data.autoComplete}
                ref={loginRefs[index]}
                type={data.type}
              />
              <label>{data.label}</label>
            </div>
          </div>
        ))}

        <button className="formButton">Submit</button>
      </div>
    </form>
  );
};

export default LoginForm;
