import React, { useEffect } from 'react';

/* AOS scroll animation */
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  Container,
  Logo,
  IntroTitle,
  IntroImgWrapper,
  IntroDesc,
  ItemWrapper,
  IntroItem,
  Scroll,
  ImgWrapper,
  Desc,
  Contents,
  ButtonWrapper,
  LoginButton,
} from './Intro.styled';
import { IntroItemList } from './IntroDesc';
import introLogo from 'assets/img/health100logo.png';

const Intro = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Container>
      <IntroImgWrapper>
        <IntroTitle>
          스스로 체력 <strong>측정</strong>하고
          <br /> 필요한 운동 <strong>처방</strong>받자
        </IntroTitle>
        <Logo>
          <img src={introLogo} alt="health100" width="100%" />
        </Logo>
      </IntroImgWrapper>
      <ItemWrapper>
        {IntroItemList.map((item, idx) => (
          <IntroItem key={item.title + item.src}>
            {idx % 2 === 0 && (
              <ImgWrapper
                data-aos={item.img.direct}
                data-aos-offset={item.img.offset}
                data-aos-easing={item.img.easing}
                urlItem={item.src}
              >
                {/* <Img alt={item.title} src={item.src} /> */}
              </ImgWrapper>
            )}
            <Desc
              data-aos={item.desc.direct}
              data-aos-offset={item.desc.offset}
              data-aos-duration={item.desc.duration}
              data-aos-delay={item.desc.delay}
              data-aos-easing={item.desc.easing}
            >
              <Contents direct={idx % 2 === 0 ? 'left' : 'right'}>
                {item.title}
                <br />
                {item.title2}
              </Contents>
            </Desc>
            {idx % 2 === 1 && (
              <ImgWrapper
                data-aos={item.img.direct}
                data-aos-offset={item.img.offset}
                data-aos-easing={item.img.easing}
                urlItem={item.src}
              >
                {/* <Img alt={item.title} src={item.src} /> */}
              </ImgWrapper>
            )}
          </IntroItem>
        ))}
      </ItemWrapper>
      <ButtonWrapper
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="400"
      >
        <LoginButton to="/login">시작하기</LoginButton>
      </ButtonWrapper>
    </Container>
  );
};

export default Intro;
