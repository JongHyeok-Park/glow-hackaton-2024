import './ProfileBox.css';
import PrimaryButton from '../button/PrimaryButton';

function ProfileBox(props) {
  const { name, imagePath, description } = props;
  return (
    <article className="profile-box">
      <figure className="profile-box-image-wrapper">
        {imagePath ? <img src={imagePath} alt="profile-box-user" /> : null}
      </figure>
      <h2 className="profile-box-name">{name}</h2>
      <PrimaryButton />
      <p className="profile-box-description">{description}</p>
    </article>
  );
}

export default ProfileBox;
