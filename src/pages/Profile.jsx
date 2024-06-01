import React from 'react';
import './Profile.css';

function Profile(props) {
  const { imagePath } = props;
  return (
    <main className="profile-main">
      <section className="page-profile">
        <div className="profile-part1">
          <figure className="page-profile-image-wrapper">{imagePath ? <img src="" alt="" /> : null}</figure>
          <div className="page-profile-informations-wrapper">
            <div className="name profileBox">
              <p className="profile-label">이름</p>
              <p className="profile-name">이시은</p>
            </div>
            <div className="education profileBox">
              <p className="profile-label">학력</p>
              <ul className="profile-education">
                <li>대구고등학교 졸업</li>
                <li>대구공업대학교 전자정보통신과 졸업</li>
                <li>경북대학교 IT대학 컴퓨터학부 재학</li>
              </ul>
            </div>
            <div className="award profileBox">
              <p className="profile-label">수상</p>
              <ul className="profile-award">
                <li>사단장 표창</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="introduction profileBox">
          <p className="profile-label">자기소개</p>
          <p className="profile-introduction">
            설명이 어쩌구 저쩌구 들어가는 부분설명이 어쩌구 저쩌구 들어가는 부분설명이 어쩌구 저쩌구 들어가는 부분설명이
            어쩌구 저쩌구 들어가는 부분 설명이 어쩌구 저쩌구 들어가는 부분설명이 어쩌구 저쩌구 들어가는 부분설명이
            어쩌구 저쩌구 들어가는 부분설명이 어쩌구 저쩌구 들어가는 부분 설명이 어쩌구 저쩌구 들어가는 부분설명이
            어쩌구 저쩌구 들어가는 부분설명이 어쩌구 저쩌구 들어가는 부분설명이 어쩌구 저쩌구 들어가는 부분
          </p>
        </div>
      </section>
    </main>
  );
}

export default Profile;
