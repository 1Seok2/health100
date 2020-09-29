import React, { useEffect, useState } from 'react';
import { FirebaseStore } from 'config/fbConfig';
import { Containter, Wrapper } from './Qna.styled';

import Loading from 'components/modules/loading/Loading';
import TrainerAnswer from './trainer';
import OwnQna from './own';

/* if trainer, can answer */
/* if user, can see enroll list */
const Qna = ({ userObj }) => {
  const [type, setType] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  /* aware of user type */
  const isTrainer = async () => {
    const user = await FirebaseStore.collection('users').get();
    user.forEach((document) => {
      if (document.data().userId === userObj.uid && document.data().isTrainer) {
        setType(true);
        console.log('aaaa');
      }
    });
    if (user) setIsLoading(false);
  };

  useEffect(() => {
    isTrainer().then();
  }, [userObj]);
  return (
    <Containter>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          {type ? (
            <TrainerAnswer userObj={userObj} />
          ) : (
            <OwnQna userObj={userObj} />
          )}
        </Wrapper>
      )}
    </Containter>
  );
};

export default Qna;
