import { Link } from 'react-router-dom';
import './CategoryLecture.css';

function CategoryLecture() {
  return (
    <section className="category-lecture">
      <h4 className="category-lecture-title">강연</h4>
      <ul className="category-lecture-list">
        <li>
          <Link to="/">카테고리</Link>
        </li>
        <li>
          <Link to="/">카테고리</Link>
        </li>
        <li>
          <Link to="/">카테고리</Link>
        </li>
        <li>
          <Link to="/">카테고리</Link>
        </li>
      </ul>
    </section>
  );
}

export default CategoryLecture;
