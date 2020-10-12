import styled from 'styled-components';
import {
  DeskTopWidth,
  TabletWidth,
  SmallTabletWidth,
  SmartPhoneWidth,
} from 'components/modules/style/Width';
import {
  HEALTH_COLOR,
  NEGATIVE_COLOR,
  NEGATIVE_COLOR_DARK,
  HEALTH_COLOR_LIGHT,
  HEALTH_COLOR_DARK,
} from 'components/modules/style/Color';

export const Container = styled.div`
  display: inline-block;
  /* width: ${(props) => (props.show ? '44%' : '156px')}; */
  width: 156px;
  height: 136px;
  margin: 6px;
  z-index: 0;
  box-shadow: 0px 2px 3px 2px rgba(0.5, 0.5, 0.5, 0.1);
  border-radius: 3rem;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.current
      ? HEALTH_COLOR_DARK
      : `rgba(105, 154, 227, ${props.opacity})`};
  &:hover {
    cursor: pointer;
    background-color: HEALTH_COLOR_LIGHT;
    transition: all 0.3s;
    box-shadow: 0px 4px 5px 2px rgba(100, 100, 100, 0.5);
    ${(props) =>
      props.idx
        ? `
    .${props.idx} {
      opacity : 1;
      transition : opacity .3s;
    } 
    `
        : null}
  }
  @media (max-width: 960px) {
    /* width: ${(props) => (props.show ? '80%' : '44%')}; */
    width: 80%;
    height: 120px;
  }
  @media (max-width: 800px) {
    width: 90%;
  }
  @media (max-width: 440px) {
    width: 90%;
    height: 80px;
  }
`;

export const Image = styled.img`
  height: 100%;
`;

export const ImageWrapper = styled.div`
  width: 96px;
  height: 96px;
  overflow: hidden;
  border: 1px solid gray;
`;

export const DescWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const BranchName = styled.div`
  display: block;
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => (!props.current ? 'black' : 'white')};
  font-family: 'Nanum Gothic', sans-serif;
  @media (max-width: 440px) {
    font-size: 18px;
  }
`;

export const ShowDetail = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  color: #888;
  font-size: 12px;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const DescTitle = styled.h1`
  margin-top: 10px;
  margin-bottom: 6px;
  font-size: 20px;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 180px;
  margin-bottom: 12px;
`;
