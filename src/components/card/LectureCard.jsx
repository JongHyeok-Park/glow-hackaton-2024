import dateFormat from '../../utils/dateFormat';
import './LectureCard.css';

function LectureCard(props) {
  const { title, subject, description, category, startTime, image } = props;

  return (
    <article className="lecture-card">
      <figure className="lecture-card-image-wrapper">{image?.img ? <img src={image?.img} alt="" /> : null}</figure>
      <section className="lecture-card-content-wrapper">
        <h4 className="lecture-card-title">{title}</h4>
        <p className="lecture-card-subject">{subject}</p>
        <p className="lecture-card-description">{description}</p>
      </section>
      <section className="lecture-card-info-wrapper">
        <span className="lecture-card-category">{category}</span>
        <span className="lecture-card-created-date">{dateFormat(startTime)}</span>
      </section>
    </article>
  );
}

export default LectureCard;
