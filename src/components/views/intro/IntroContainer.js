/**
 * @description 웹 초기 소개 페이지
 */

import React, { useEffect } from 'react';

/* AOS scroll animation */
import AOS from 'aos';
import 'aos/dist/aos.css';

import IntroPresenter from './IntroPresenter';

const Intro = () => {
  useEffect(() => {
    AOS.init();
  });

  return <IntroPresenter />;
};

export default Intro;
