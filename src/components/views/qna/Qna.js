/**
 * @description 유저 / 트레이너 구분
 */

import React, { useEffect, useState } from 'react';
import { Containter, Wrapper } from './Qna.styled';

import Loading from 'components/modules/loading/Loading';
import TrainerAnswer from './trainer';
import OwnQna from './user';

/* if trainer, can answer */
/* if user, can see enroll list */
const Qna = ({ userObj }) => {
  const [type, setType] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  /* aware of user type */
  const isTrainer = async () => {
    if (userObj.type) setType(true);
  };

  useEffect(() => {
    isTrainer().then(() => setIsLoading(false));
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
