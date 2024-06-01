import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import NavbarProfile from './NavbarProfile';

function Navbar() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <nav className="header-menu-wrapper">
          <Link className="header-site-logo" to="/">
            기가 막힌 로고
          </Link>
          <Link className="header-category" to="/#">
            카테고리 보기
          </Link>
          <form className="header-search-box" action="" method="get">
            <input className="search-txt" type="search" name="search-txt" />
            <button className="search-btn" type="submit">
              <img src="../src/assets/icon/search-icon.png" alt="검색" />
            </button>
          </form>
        </nav>
        <NavbarProfile />
      </div>
    </header>
  );
}

export default Navbar;
