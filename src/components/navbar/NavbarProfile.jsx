import React from 'react';
import './NavbarProfile.css';

function NavbarProfile() {
  return (
    <section className="profile">
      <img className="profile-image" src="https://avatars.githubusercontent.com/u/114932050?v=4" alt="" />
      <div className="dowm-wrapper">
        <img className="down-icon" src="../src/assets/icon/arrow-down.png" alt="더보기" />
      </div>
    </section>
  );
}

export default NavbarProfile;
