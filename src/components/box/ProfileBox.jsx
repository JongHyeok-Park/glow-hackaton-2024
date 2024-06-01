import './ProfileBox.css';
import PrimaryButton from '../button/PrimaryButton';

function ProfileBox(props) {
  const { name, description, imagePath } = props.info.user;
  return (
    <article className="profile-box">
      <figure className="profile-box-image-wrapper">
        {imagePath ? <img src={imagePath} alt="profile-box-user" /> : null}
      </figure>
      <h2 className="profile-box-name">{name}</h2>
      <PrimaryButton text="채팅하기" />
      <p className="profile-box-description">{description}</p>
    </article>
  );
}

export default ProfileBox;
