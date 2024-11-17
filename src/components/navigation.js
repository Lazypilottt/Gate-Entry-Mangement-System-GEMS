import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);

    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  return (
    <>
      <nav className="navigation">
        <div className="navigation-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/entry-exit" className="nav-links" onClick={closeMobileMenu}>
                Entry/Exit
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profiles" className="nav-links" onClick={closeMobileMenu}>
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/logout" className="nav-links" onClick={closeMobileMenu}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}



export default Navigation;
