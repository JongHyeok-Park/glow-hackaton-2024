import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import LectureCard from '../components/card/LectureCard';
import './Main.css';
import ProfileCard from '../components/card/ProfileCard';
import useLectureListStore from '../store/useLectureListStore';
import { getLectureList } from '../apis/lectureApi';
import useMentoringListStore from '../store/useMentoringList';
import { getMentoringList } from '../apis/mentoringApi';

function Main() {
  const { lectureList, setLectureList } = useLectureListStore();
  const { mentoringList, setMentoringList } = useMentoringListStore();

  const searchLatestLectureList = () => {
    getLectureList(5, 0)
      .then((data) => {
        setLectureList(data.content);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const searchLatestMentoringList = () => {
    getMentoringList(5, 0)
      .then((data) => {
        setMentoringList(data.content);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    searchLatestLectureList();
    searchLatestMentoringList();
  }, []);

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
          {lectureList?.map((item) => {
            return (
              <LectureCard
                title={item.title}
                subject={item.subject}
                description={item.description}
                category={item.category}
                startTime={item.startTime}
                key={item.id}
              />
            );
          })}
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
          {mentoringList?.map((item) => {
            return (
              <LectureCard
                title={item.title}
                subject={item.subject}
                description={item.description}
                category={item.category}
                startTime={item.startTime}
                key={item.id}
              />
            );
          })}
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
    </main>
  );
}

export default Main;
