import React, { useState, useEffect } from 'react';
import YoutubeAPIScript from 'assets/script/YoutubeAPIScript';
import { Containter, Wrapper } from './ContactTrainer.styled';

import TrainerMode from './trainer';
import UserMode from './user';

const ContactTrainer = ({ userObj }) => {
  /* set youtube api script ... */
  useEffect(() => {
    YoutubeAPIScript();
  }, []);
  return (
    <Containter>
      <Wrapper>
        {userObj.type ? <TrainerMode userObj={userObj} /> : <UserMode />}
      </Wrapper>
    </Containter>
  );
};

export default ContactTrainer;
