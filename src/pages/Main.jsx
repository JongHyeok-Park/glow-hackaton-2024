import { Link } from 'react-router-dom';
import LectureCard from '../components/card/LectureCard';
import './Main.css';
import ProfileCard from '../components/card/ProfileCard';
import CategoryAside from '../components/aside/CategoryAside';

function Main() {
  return (
    <main className="main">
      <section className="main-latest-lecture-container">
        <header className="main-latest-lecture-header">
          <h3>최신 등록된 강연 목록</h3>
          <Link className="main-latest-lecture-more" to="/">
            전체보기 &gt;
          </Link>
        </header>
        <section className="main-latest-lecture-items">
          <LectureCard />
          <LectureCard />
          <LectureCard />
          <LectureCard />
          <LectureCard />
        </section>
      </section>
      <section className="main-latest-mentoring-container">
        <header className="main-latest-mentoring-header">
          <h3>최신 등록된 과외 목록</h3>
          <Link className="main-latest-mentoring-more" to="/">
            전체보기 &gt;
          </Link>
        </header>
        <section className="main-latest-mentoring-items">
          <LectureCard />
          <LectureCard />
          <LectureCard />
          <LectureCard />
          <LectureCard />
        </section>
      </section>
      <section className="main-latest-profile-container">
        <header className="main-latest-profile-header">
          <h3>새로 등장한 전문가</h3>
          <Link className="main-latest-profile-more" to="/">
            전체보기 &gt;
          </Link>
        </header>
        <section className="main-latest-profile-items">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </section>
      </section>
      <CategoryAside />
    </main>
  );
}

export default Main;
