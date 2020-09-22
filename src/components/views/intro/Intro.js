import React from 'react';
import { Link } from 'react-router-dom';

import { Container, IntroItem, ImgWrapper, Img, Desc } from './Intro.styled';
import 'aos/dist/aos.css';

const ItroItemList = [
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
  return (
    <Container>
      <Link to="/login"> lets start !!</Link>
    </Container>
  );
};

export default Intro;
