import './LectureCard.css';

function LectureCard(props) {
  const { imagePath } = props;

  return (
    <article className="lecture-card">
      <figure className="lecture-card-image-wrapper">{imagePath ? <img src={imagePath} alt="" /> : null}</figure>
      <section className="lecture-card-content-wrapper">
        <h4 className="lecture-card-title">삶과 인생의 고찰에 대하여 고민과 성찰</h4>
        <p className="lecture-card-subject">철학적인 사고</p>
        <p className="lecture-card-description">
          가끔씩 찾아오는 현타에 잠못드는 당신을 위해 기가막힌 통찰을 드리겠습니다. 다양한 테라피 기법과 어쩌구 저쩌구
        </p>
      </section>
      <section className="lecture-card-info-wrapper">
        <span className="lecture-card-category">기타</span>
        <span className="lecture-card-created-date">2024-08-12</span>
      </section>
    </article>
  );
}

export default LectureCard;
