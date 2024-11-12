import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './navigation.css';

function navigation() {
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
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navigation'>
        <div className='navigation-container'>
          <Link to='/' className='navigation-logo' onClick={closeMobileMenu}>
            GEMS
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Status'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Status
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Entry/Exit'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Entry/Exit
              </Link>
            </li>

            <li>
              <Link
                to='/Profiles'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Profiles
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Log Out</Button>}
        </div>
      </nav>
    </>
  );
}

export default navigation;