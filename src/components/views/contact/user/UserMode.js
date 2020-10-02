import React, { useEffect, useState } from 'react';
import { FirebaseStore } from 'config/fbConfig';
import {
  Container,
  Title,
  VideoWrapper,
  Video,
  DescWrapper,
  ItemDesc,
  Empty,
} from './UserMode.styled';
import 'assets/style/font/mainFont.css';
import 'assets/style/font/descFont.css';

import Loading from 'components/modules/loading/Loading';

const UserMode = () => {
  const [trainerList, setList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [selected, setSelected] = useState();

  const getTrainerIntro = async () => {
    FirebaseStore.collection('users').onSnapshot((snap) => {
      let list = [];
      snap.docs.map((doc) => {
        if (doc.data().introAvailable) {
          const obj = {
            ...doc.data(),
          };
          list = [...list, obj];
        }
      });
      setList(list);
    });
  };

  useEffect(() => {
    getTrainerIntro().then(() => setLoading(false));
  }, []);
  console.log(trainerList);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Title>트레이너와 컨택하세요 !</Title>
          {trainerList.map((trainer) => (
            <Container
              key={trainer.src}
              current={trainer.src === selected}
              onClick={() => setSelected(trainer.src)}
            >
              <VideoWrapper current={trainer.src === selected}>
                <Video
                  title={trainer.src}
                  id="ytplayer"
                  // type="text/html"
                  // width="100%"
                  // height="360"
                  src={`https://www.youtube.com/embed/${trainer.src}?autoplay=0&origin=https://www.youtube.com/watch?v=${trainer.src}`}
                  frameborder="0"
                />
              </VideoWrapper>

              <ItemDesc>이름 : {trainer.tName}</ItemDesc>
              <ItemDesc>
                이메일 :{' '}
                <a
                  style={{ fontFamily: 'Poor Story' }}
                  href={`mailto:${trainer.userEmail}`}
                >
                  {trainer.userEmail}
                </a>
              </ItemDesc>
              <ItemDesc>
                {trainer.src === selected
                  ? trainer.desc
                  : `${trainer.desc.substring(0, 100)} ...더보기`}
              </ItemDesc>
            </Container>
          ))}
          <Empty />
        </>
      )}
    </>
  );
};

export default UserMode;
