import CategoryLecture from './CategoryLecture';
import CategoryMentoring from './CategoryMentoring';
import './CategoryAside.css';

function CategoryAside() {
  return (
    <aside className="category-aside">
      <h3 className="category-aside-title">카테고리</h3>
      <CategoryLecture />
      <CategoryMentoring />
    </aside>
  );
}

export default CategoryAside;
