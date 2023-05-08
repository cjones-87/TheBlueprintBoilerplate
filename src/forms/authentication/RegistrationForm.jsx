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
    <>
      <form id="registrationForm">
        <h1 className="center">Registration</h1>
        {RegistrationFormData.map((data, index) => (
          <label className="authForm" key={index}>
            {data.label}
            <input ref={registrationRefs[index]} type={data.type} />
          </label>
        ))}
      </form>
    </>
  );
};

export default RegistrationForm;
