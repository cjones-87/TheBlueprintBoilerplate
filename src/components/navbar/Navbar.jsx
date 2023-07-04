import React, { useCallback, useState } from 'react';
import useWindowDimensions from '../../misc/customHooks/useWindowDimensions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/auth/auth';

const Navbar = ({ end, navLinks, start }) => {
  const { width } = useWindowDimensions();
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
    <div className="navContainer" style={{ width }}>
      <nav className="navbar">
        <div id="navbarStart">
          {start}
          <ul className={`navMenu ${burgerActive ? 'active' : ''}`}>
            {navLinks.map((data, index) => (
              <li
                className="navItem"
                key={index}
                onClick={data.content === 'Logout' ? handleLogout : null}
              >
                <button
                  className="navLink button"
                  onClick={() => handleNavLinkClick(data.href)}
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
