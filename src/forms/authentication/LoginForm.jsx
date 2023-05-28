import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticate } from '../../store/auth/auth';
import axios from 'axios';
import LoginFormData from '../formData/authentication/LoginFormData';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const identifierRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const formData = {
        identifier: identifierRef.current.value,
        password: passwordRef.current.value,
      };

      const res = await axios.post('/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      dispatch(authenticate(formData.identifier, formData.password, 'login'));
      navigate('/');
      location.reload();
    } catch (error) {
      console.log('There was an error handling login', error);
    }
  };

  return (
    <form id="loginForm" onSubmit={handleLogin}>
      <div className="authForm">
        <h1 className="center" id="authHeader">
          Login
        </h1>
        {LoginFormData.map((data, index) => (
          <div className="authForm" key={index}>
            <div className="inputContainer">
              <input
                autoComplete={data.autoComplete}
                name={data.name}
                ref={index === 0 ? identifierRef : passwordRef}
                required
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
