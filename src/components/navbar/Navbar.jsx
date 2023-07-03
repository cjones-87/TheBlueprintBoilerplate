import React, { useCallback, useState } from 'react';
import useWindowDimensions from '../../misc/customHooks/useWindowDimensions';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/auth/auth';
import NavbarLogo from './NavbarLogo';

const Navbar = ({ children }) => {
  const { height, width } = useWindowDimensions();
  const [burgerActive, setBurgerActive] = useState(false);
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const handleBurgerClick = useCallback(() => {
    setBurgerActive((current) => !current);
  }, []);

  const handleNavLinkClick = useCallback(() => {
    setBurgerActive((current) => !current);
  }, []);

  const handleLogout = () => {
    try {
      dispatch(logout());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="navContainer" style={{ width }}>
      <nav className="navbar">
        <a className="navbarLogo" href="/">
          <NavbarLogo />
        </a>

        <ul className={`navMenu ${burgerActive ? 'active' : ''}`}>
          {auth && auth.isAuthenticated ? (
            <>
              <li className="navItem">
                <a className="navLink" href="/" onClick={handleNavLinkClick}>
                  Home
                </a>
              </li>
              <li className="navItem" onClick={handleLogout}>
                <a className="navLink" href="/" onClick={handleNavLinkClick}>
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="navItem">
                <a
                  className="navLink"
                  href="/login"
                  onClick={handleNavLinkClick}
                >
                  Login
                </a>
              </li>
              <li className="navItem">
                <a
                  className="navLink"
                  href="/registration"
                  onClick={handleNavLinkClick}
                >
                  Register
                </a>
              </li>
            </>
          )}
        </ul>
        <div
          className={`navBurger ${burgerActive ? 'active' : ''}`}
          onClick={handleBurgerClick}
        >
          <div className="barGroup">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Navbar;
