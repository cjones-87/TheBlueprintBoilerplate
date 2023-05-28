import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticate } from '../../store/auth/auth';
import axios from 'axios';
import RegistrationFormData from '../formData/authentication/RegistrationFormData';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const registrationRefs = [
    firstNameRef,
    lastNameRef,
    usernameRef,
    passwordRef,
    emailRef,
  ];

  const handleRegistration = async (event) => {
    event.preventDefault();
    try {
      const formData = {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        username: usernameRef.current.value,
        password: passwordRef.current.value,
        email: emailRef.current.value,
      };

      const res = await axios.post('/auth/registration', formData);
      localStorage.setItem('token', res.data.token);
      dispatch(
        authenticate(
          formData.email,
          formData.username,
          formData.password,
          'login'
        )
      );
      navigate('/');
      location.reload();
    } catch (error) {
      console.log('There was an error handling registration', error);
    }
  };

  return (
    <form id="registrationForm" onSubmit={handleRegistration}>
      <div className="authForm">
        <h1 className="center" id="authHeader">
          Registration
        </h1>
        {RegistrationFormData.map((data, index) => (
          <div className="authForm" key={index}>
            <div className="inputContainer">
              <input
                autoComplete={data.autoComplete}
                name={data.name}
                ref={registrationRefs[index]}
                required
                type={data.type}
              />
              <label>{data.label} </label>
            </div>
          </div>
        ))}

        <button className="formButton" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
