import dateFormat from '../../utils/dateFormat';
import './InfoBox.css';

function InfoBox(props) {
  const { title, topic, createdAt, category, description } = props.info;
  return (
    <section className="detail-info-box">
      <header className="detail-info-box-header">
        <span className="detail-info-box-category">{category}</span>
        <span className="detail-info-box-date">{dateFormat(createdAt)}</span>
      </header>
      <h1>{title}</h1>
      <h3>{topic}</h3>
      <p>{description}</p>
    </section>
  );
}

export default InfoBox;
