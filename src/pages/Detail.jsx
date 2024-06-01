import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InfoBox from '../components/box/InfoBox';
import { getLecture } from '../apis/lectureApi';
import ProfileBox from '../components/box/ProfileBox';
import './Detail.css';
import { getMentoring } from '../apis/mentoringApi';

function Detail() {
  const params = useParams();
  const [info, setInfo] = useState();

  const searchLectureInfo = () => {
    getLecture(params.id)
      .then((data) => {
        setInfo(data);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const searchMentoringInfo = () => {
    getMentoring(params.id)
      .then((data) => {
        setInfo(data);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    if (params.type === 'lecture') {
      searchLectureInfo();
    } else {
      searchMentoringInfo();
    }
  }, []);

  return (
    <main className="detail">
      {info ? (
        <>
          <section className="detail-left">
            <figure className="detail-image-wrapper">
              {info?.image ? <img src={info.image} alt="detail" /> : null}
            </figure>
            <InfoBox info={info} />
          </section>
          <section className="detail-right">
            <ProfileBox info={info} />
          </section>
        </>
      ) : null}
    </main>
  );
}

export default Detail;
