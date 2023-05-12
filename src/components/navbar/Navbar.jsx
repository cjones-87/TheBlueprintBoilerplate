import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/auth/auth';
import appLogo from 'public/favicon.ico';

const Navbar = ({ children }) => {
  const [burgerActive, setBurgerActive] = useState(false);
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const handleBurgerClick = () => {
    setBurgerActive((current) => !current);
  };

  const handleLogout = () => {
    try {
      dispatch(logout());
    } catch (error) {
      console.log('error in handle logout function');
      console.error(error);
    }
  };

  return (
    <div id="navbar">
      <nav>
        <div className="navbarLogo">
          <a href="/">
            <img id="navbarLogo" src={appLogo} />
          </a>
        </div>
        <ul className="navLinks">
          {auth && auth.isAuthenticated ? (
            <>
              <li>
                <a href="/">Home</a>
              </li>
              <li onClick={handleLogout}>
                <a href="/">Logout</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/registration">Register</a>
              </li>
            </>
          )}
        </ul>
        <div
          className={burgerActive ? 'burger active' : 'burger'}
          onClick={handleBurgerClick}
        >
          {auth && auth.isAuthenticated ? (
            <>
              <div className="line1">
                <a href="/">Home</a>
              </div>
              <div className="line2" onClick={handleLogout}>
                <a href="/">Logout</a>
              </div>
            </>
          ) : (
            <>
              <div className="line1">Login</div>
              <div className="line2">Register</div>
            </>
          )}
          <div className="line3"></div>
        </div>
      </nav>
      <hr />
      {children}
    </div>
  );
};

export default Navbar;
