import React from 'react';
import './NavbarProfile.css';
import profileImageUrl from '../../assets/icon/arrow-down.png';

function NavbarProfile() {
  const imagePath = 'https://avatars.githubusercontent.com/u/114932050?v=4';
  return (
    <section className="profile">
      <figure className="profile-image-wrapper">
        {imagePath ? <img className="profile-image" src={imagePath} alt="" /> : null}
      </figure>
      <div className="dowm-wrapper">
        <img className="down-icon" src={profileImageUrl} alt="더보기" />
      </div>
    </section>
  );
}

export default NavbarProfile;
