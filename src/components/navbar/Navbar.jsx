import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import searchUrl from '../../assets/icon/search-icon.png';

import NavbarProfile from './NavbarProfile';
import useUserStore from '../../store/useProfileStore';

function Navbar() {
  const { user } = useUserStore();

  return (
    <header className="header">
      <div className="header-wrapper">
        <nav className="header-menu-wrapper">
          <Link className="header-site-logo" to="/">
            기가 막힌 로고
          </Link>
          <Link className="header-category" to="/category">
            카테고리 보기
          </Link>
          <form className="header-search-box" action="" method="get">
            <input className="search-txt" type="search" name="search-txt" />
            <button className="search-btn" type="submit">
              <img src={searchUrl} alt="검색" />
            </button>
          </form>
        </nav>
        {user ? <NavbarProfile /> : <Link to="/">로그인</Link>}
      </div>
    </header>
  );
}

export default Navbar;
