import React, { useEffect, useState } from 'react';
import { FirebaseStore } from 'config/fbConfig';
import TrainerAnswer from './trainer';
import OwnQna from './own';

import { Containter, Wrapper } from './Qna.styled';
import Loading from '../../modules/loading/Loading';

const Qna = ({ userObj }) => {
  const [type, setType] = useState(false);

  const isTrainer = async () => {
    const user = await FirebaseStore.collection('users').get();
    user.forEach((document) => {
      if (document.data().userId === userObj.uid && !type) {
        setType(true);
      }
    });
  };

  useEffect(() => {
    isTrainer();
  }, [userObj]);
  return (
    <Containter>
      {/* <Wrapper>{type ? <TrainerAnswer /> : <OwnQna />}</Wrapper> */}
      <Loading />
    </Containter>
  );
};

export default Qna;
