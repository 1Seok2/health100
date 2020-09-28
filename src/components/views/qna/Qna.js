import React, { useEffect, useState } from 'react';
import { FirebaseStore } from 'config/fbConfig';
import TrainerAnswer from './trainer';
import OwnQna from './own';

const Qna = ({ userObj }) => {
  const [type, setType] = useState(false);

  const isTrainer = async () => {
    let answer = false;
    const user = await FirebaseStore.collection('users').get();
    user.forEach((document) => {
      if (document.data().userId === userObj.uid) {
        answer = true;
      }
    });
    return answer;
  };

  useEffect(() => {
    if (isTrainer) setType(true);
  }, [userObj]);
  return <>{type ? <TrainerAnswer /> : <OwnQna />}</>;
};

export default Qna;
