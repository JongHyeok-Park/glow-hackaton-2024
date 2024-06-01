import CategoryAside from '../components/aside/CategoryAside';
import LectureCard from '../components/card/LectureCard';
import './Category.css';

function Category() {
  return (
    <main className="category">
      <CategoryAside />
      <section className="category-items">
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
      </section>
    </main>
  );
}

export default Category;
