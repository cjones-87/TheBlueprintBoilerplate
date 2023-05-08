import React, { useRef } from 'react';
import LoginFormData from '../formData/authentication/LoginFormData';

const LoginForm = () => {
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const loginRefs = [email, username, password];

  return (
    <form id="loginForm">
      <h1 className="center">Login</h1>
      {LoginFormData.map((data, index) => (
        <label className="authForm" key={index}>
          {data.label}
          <input ref={loginRefs[index]} type={data.type} />
        </label>
      ))}
    </form>
  );
};

export default LoginForm;
