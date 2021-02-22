import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div className='header'>
      <div className='header__container center'>
        <a href='' className='header__logo'>
          guilherme<span>t</span>upi
        </a>
        <ul className='header__navigation'>
          <li className='header__navigationItem'>
            <a href='' className='active'>
              Home
            </a>
          </li>
          <li className='header__navigationItem'>
            <a href=''>About</a>
          </li>
          <li className='header__navigationItem'>
            <a href=''>Technologies</a>
          </li>
          <li className='header__navigationItem'>
            <a href=''>Projects</a>
          </li>
          <li className='header__navigationItem'>
            <a href=''>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
