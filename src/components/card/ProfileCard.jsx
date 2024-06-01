import './ProfileCard.css';

function ProfileCard(props) {
  const { imagePath } = props;

  return (
    <article className="profile-card">
      <figure className="profile-card-image-wrapper">{imagePath ? <img src="" alt="" /> : null}</figure>
      <h4 className="profile-card-title">이시은</h4>
      <p className="profile-card-content">
        재미있는 애니메이션과 백엔드 지식들을 전문으로 다루는 전문가입니다. 기가 막힌 애니메이션 보고싶으면 저한테
        물어보세용~
      </p>
    </article>
  );
}

export default ProfileCard;
