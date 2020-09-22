import React, { useEffect } from 'react';

import {
  Container,
  IntroItem,
  ImgWrapper,
  Img,
  Desc,
  ButtonWrapper,
  LoginButton,
} from './Intro.styled';
import AOS from 'aos';
import 'aos/dist/aos.css';

const IntroItemList = [
  {
    title: 'blablabla',
    src: 'askejfnasef',
  },
  {
    title: '24r34erg',
    src: 'askejfnasef',
  },
  {
    title: '656htyhtyh',
    src: 'askejfnasef',
  },
  {
    title: '4309gklrnklerg',
    src: 'askejfnasef',
  },
];

const Intro = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Container>
      <IntroItem />
      <IntroItem />
      {IntroItemList.map((item) => (
        <IntroItem key={item.title + item.src}>
          <ImgWrapper
            data-aos="fade-up-right"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <Img alt={item.title} src={item.src} />
          </ImgWrapper>
          <Desc
            data-aos="zoom-in-left"
            data-aos-duration="900"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
          >
            {item.title}
          </Desc>
        </IntroItem>
      ))}
      <ButtonWrapper
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="800"
      >
        <LoginButton to="/login"> lets start !!</LoginButton>
      </ButtonWrapper>
    </Container>
  );
};

export default Intro;
