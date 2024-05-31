import React from 'react';
import './Navbar.css';

import NavbarProfile from './NavbarProfile';

function Navbar(props) {
  return (
    <header className="header">
      <div className="header-wrapper">
        <article className="header-menu-wrapper">
          <span className="header-site-logo">기가 막힌 로고</span>
          <nav className="header-category">카테고리 보기</nav>
          <section className="header-search-wrapper">
            <form className="header-search-box" action="" method="get">
              <input className="search-txt" type="search" name="search-txt"></input>
              <button className="search-btn" type="submit">
                <img src="../src/assets/icon/search-icon.png" alt="검색"></img>
              </button>
            </form>
          </section>
        </article>
        <div className="header-profile-wrapper">
          <NavbarProfile />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
