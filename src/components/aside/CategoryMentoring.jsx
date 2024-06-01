import './CategoryMentoring.css';
import { Link } from 'react-router-dom';

function CategoryMentoring() {
  return (
    <section className="category-mentoring">
      <h4 className="category-mentoring-title">과외</h4>
      <ul className="category-mentorung-list">
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

export default CategoryMentoring;
