import { Link } from 'react-router-dom';
import './CategoryLecture.css';

function CategoryLecture() {
  const lectureCategory = ['IT', 'HUMANITY', 'SOCIETY', 'SCIENCE', 'DESIGN', 'ETC'];

  return (
    <section className="category-lecture">
      <h4 className="category-lecture-title">강연</h4>
      <ul className="category-lecture-list">
        {lectureCategory.map((item) => {
          return (
            <li>
              <Link to="/category/:category">{item}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CategoryLecture;
