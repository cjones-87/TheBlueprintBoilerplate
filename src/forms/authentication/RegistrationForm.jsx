import React, { useRef } from 'react';
import RegistrationFormData from '../formData/authentication/RegistrationFormData';

const RegistrationForm = () => {
  const firstName = useRef();
  const lastName = useRef();
  const username = useRef();
  const password = useRef();
  const email = useRef();
  const registrationRefs = [firstName, lastName, username, password, email];

  return (
    <form id="registrationForm">
      <div className="authForm">
        <h1 className="center" id="authHeader">
          Registration
        </h1>
        {RegistrationFormData.map((data, index) => (
          <div className="authForm" key={index}>
            <div className="inputContainer">
              <input
                autoComplete={data.autoComplete}
                ref={registrationRefs[index]}
                type={data.type}
              />
              <label>{data.label} </label>
            </div>
          </div>
        ))}

        <button className="formButton">Submit</button>
      </div>
    </form>
  );
};

export default RegistrationForm;
