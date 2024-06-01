import './CategoryMentoring.css';
import { Link } from 'react-router-dom';

function CategoryMentoring() {
  const mentoringCategory = ['CSAT', 'UNIV', 'ART', 'ETC'];

  return (
    <section className="category-mentoring">
      <h4 className="category-mentoring-title">과외</h4>
      <ul className="category-mentorung-list">
        {mentoringCategory.map((item) => {
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

export default CategoryMentoring;
