import React from 'react';
import './Footer.css';

function Footer(props) {
  return (
    <footer className="footer">
      <section className="footer-content-wrapper">
        <nav className="footer-move-links">
          <ol>
            <li>
              <a href="#!">개인정보처리방침</a>
            </li>
            <li>
              <a href="#!">고객센터</a>
            </li>
            <li>
              <a href="#!">서비스 소개</a>
            </li>
            <li>
              <a href="#!">인재영입</a>
            </li>
          </ol>
        </nav>
        <div className="footer-informations">
          <p>상호명: HACKATON</p>
          <p>대표: 이시은</p>
          <p>사업자번호: 850-58-00615</p>
          <p>소재지: 대구광역시 북구 대학로 80</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
