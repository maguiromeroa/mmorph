import React, { useState } from "react";
import "./navbar.scss";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Language from "../translate/Language";

function Navbar() {
  const { t } = useTranslation();
  const [prevLink, setPrevLink] = useState(null);

  const handleClick = (e) => {
    if (prevLink) {
      prevLink.style.color = '';
      prevLink.style.textDecoration = '';
      prevLink.style.borderBottom = '';
      prevLink.style.marginBottom = '';
    }
    
    e.target.style.color = 'pink';
    
    e.target.style.borderBottom = '2px solid pink';
    e.target.style.borderRadius = '2px';
    e.target.style.marginBottom = '-5px';
    setPrevLink(e.target);
  }
  
  return (
    <>
      <nav className="navbar">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300&family=Nunito:wght@200&display=swap');
        </style>
        <ul className="navbar-links">
          <li>
            <h5 onClick={handleClick}>
              <Link to='/'>{t('home')}</Link>
            </h5>
          </li>
          <li>
            <h5 onClick={handleClick}>
              <Link to='/socialmedia'>
                {t('socialmedia')}
              </Link>
            </h5>
          </li>
          <li>
            <h5 onClick={handleClick}>
              <Link to='/design'>
                {t('design')}
              </Link>
            </h5>
          </li>
          <li>
            <h5 onClick={handleClick}>
              <Link to='/dev'>
                {t('dev')}
              </Link>
            </h5>
          </li>
          <li>
            <h5 onClick={handleClick}>
              <Link to='/contact'>
                {t('contact')}
              </Link>
            </h5>
          </li>
        </ul>
      </nav>
      <Language />
    </>
  );
}

export default Navbar;
