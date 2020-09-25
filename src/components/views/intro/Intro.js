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
  Contents,
  ButtonWrapper,
  LoginButton,
} from './Intro.styled';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ImgSrc = {
  self: [
    require('../../../assets/img/intro_self1.jpg'),
    require('../../../assets/img/intro_self2.jpg'),
  ],
  log: [
    require('../../../assets/img/intro_log1.jpg'),
    require('../../../assets/img/intro_log2.jpg'),
  ],
  pt: [
    require('../../../assets/img/intro_pt1.jpg'),
    require('../../../assets/img/intro_pt2.jpg'),
  ],
  chart: require('../../../assets/img/intro_chart.jpg'),
};

const IntroItemList = [
  {
    title: '웹캠을 통해',
    title2: '집에서 운동을 시작하세요',
    src: ImgSrc.self[0],
    img: {
      direct: 'fade-right',
      offset: '300',
      easing: 'ease-in-sine',
    },
    desc: {
      direct: 'fade-right',
      offset: '120',
      easing: 'ease',
      delay: '200',
      duration: '800',
    },
  },
  {
    title: '운동 후 기록을',
    title2: '저장해서 관리해 보세요',
    src: ImgSrc.log[0],
    desc: {
      direct: 'fade-up-right',
      offset: '120',
      easing: 'ease',
      delay: '200',
      duration: '800',
    },
    img: {
      direct: 'zoom-in-left',
      offset: '120',
      easing: 'ease',
    },
  },
  {
    title: '저장된 기록으로',
    title2: '더 나아진 몸 상태를 확인하세요',
    src: ImgSrc.chart,
    img: {
      direct: 'flip-left',
      offset: '120',
      easing: 'ease',
    },
    desc: {
      direct: 'zoom-in-up',
      offset: '120',
      easing: 'ease',
      delay: '200',
      duration: '800',
    },
  },
  {
    title: '기록으로 운동을 처방받고',
    title2: '전문 트레이너에게 PT를 받으세요',
    src: ImgSrc.pt[0],
    desc: {
      direct: 'fade-right',
      offset: '300',
      easing: 'ease-in-sine',
      delay: '200',
      duration: '800',
    },
    img: {
      direct: 'fade-right',
      offset: '120',
      easing: 'ease-in-sine',
    },
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
          스스로 체력 <strong>측정</strong>하고
          <br /> 필요한 운동 <strong>처방</strong> 받자
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
              data-aos={item.img.direct}
              data-aos-offset={item.img.offset}
              data-aos-easing={item.img.easing}
            >
              <Img alt={item.title} src={item.src} />
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
