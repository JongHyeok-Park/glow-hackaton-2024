import React from 'react';
import './NavbarProfile.css';

function NavbarProfile(props) {
  return (
    <article className="profile">
      <section className="profile-wrapper">
        <img className="profile-image" src="https://avatars.githubusercontent.com/u/114932050?v=4" alt=""></img>
        <div className="dowm-wrapper">
          <img className="down-icon" src="../src/assets/icon/arrow-down.png" alt="더보기"></img>
        </div>
      </section>
    </article>
  );
}

export default NavbarProfile;
