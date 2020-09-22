import React, { useEffect } from 'react';

import {
  Container,
  IntroTitle,
  IntroImgWrapper,
  IntroDesc,
  IntroItem,
  Scroll,
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
      <IntroImgWrapper>
        <IntroTitle>
          스스로 체력 측정하고
          <br /> 필요한 운동 처방 받자
        </IntroTitle>
        <IntroDesc>
          scroll to continue
          <Scroll>
            &#x025BE; <br /> &#x025BE;
          </Scroll>
        </IntroDesc>
      </IntroImgWrapper>
      {IntroItemList.map((item, idx) => (
        <IntroItem key={item.title + item.src}>
          {idx % 2 === 0 && (
            <ImgWrapper
              data-aos="fade-up-right"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <Img alt={item.title} src={item.src} />
            </ImgWrapper>
          )}
          <Desc
            data-aos="zoom-in-left"
            data-aos-duration="900"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
          >
            {item.title}
          </Desc>
          {idx % 2 === 1 && (
            <ImgWrapper
              data-aos="fade-up-right"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <Img alt={item.title} src={item.src} />
            </ImgWrapper>
          )}
        </IntroItem>
      ))}
      <ButtonWrapper
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="400"
      >
        <LoginButton to="/login"> lets start !!</LoginButton>
      </ButtonWrapper>
    </Container>
  );
};

export default Intro;
