import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/auth/auth';
import useWindowDimensions from '../../misc/customHooks/useWindowDimensions';
import useTheme from '../../misc/customHooks/useTheme';

const Navbar = ({ end, navLinks, start }) => {
  const { width } = useWindowDimensions();
  const { darkMode } = useTheme();
  const [burgerActive, setBurgerActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBurgerClick = useCallback(() => {
    setBurgerActive((current) => !current);
  }, []);

  const handleNavLinkClick = useCallback(
    (href) => {
      navigate(href);
      setBurgerActive((current) => !current);
    },
    [navigate]
  );

  const handleLogout = () => {
    try {
      dispatch(logout());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="navContainer"
      style={{
        background: darkMode
          ? 'radial-gradient(rgba(163, 0, 130, 1), rgba(75, 0, 130, 1))'
          : 'radial-gradient(rgba(75, 0, 130, 1), rgba(163, 0, 130, 1))',
        width,
      }}
    >
      <nav className="navbar">
        <div id="navbarStart">
          {start}
          <ul
            className={`navMenu ${burgerActive ? 'active' : ''}`}
            style={{
              background:
                width < 768
                  ? darkMode
                    ? 'radial-gradient(rgba(163, 0, 130, 1), rgba(75, 0, 130, 1))'
                    : 'radial-gradient(rgba(75, 0, 130, 1), rgba(163, 0, 130, 1))'
                  : '',
            }}
          >
            {navLinks.map((data, index) => (
              <li
                className="navItem"
                key={index}
                onClick={data.content === 'Logout' ? handleLogout : null}
              >
                <button
                  className="navLink button"
                  onClick={() => handleNavLinkClick(data.href)}
                  style={{
                    backgroundColor: darkMode
                      ? 'rgba(163, 0, 130, 1)'
                      : 'rgba(75, 0, 130, 1)',
                  }}
                >
                  {data.content}
                </button>
              </li>
            ))}
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
        </div>

        <div id="navbarEnd">{end}</div>
      </nav>
    </div>
  );
};

export default Navbar;
