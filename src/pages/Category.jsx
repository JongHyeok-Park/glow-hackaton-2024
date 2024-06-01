import { useEffect, useState } from 'react';
import CategoryAside from '../components/aside/CategoryAside';
import LectureCard from '../components/card/LectureCard';
import './Category.css';
import { getLectureList } from '../apis/lectureApi';
import useLectureListStore from '../store/useLectureListStore';

function Category() {
  const [page] = useState(0);
  const { lectureList, setLectureList } = useLectureListStore();

  const searchLectureList = () => {
    getLectureList(20, page)
      .then((data) => {
        setLectureList(data.content);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    searchLectureList();
  }, [page]);

  return (
    <main className="category">
      <CategoryAside />
      <section className="category-items">
        {lectureList?.map((item) => {
          return (
            <LectureCard
              id={item.id}
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
    </main>
  );
}

export default Category;
