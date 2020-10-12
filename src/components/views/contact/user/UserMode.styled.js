import styled from 'styled-components';
import { HEALTH_COLOR_LIGHT } from '../../../modules/style/Color';

export const Container = styled.div`
  border-bottom: 1px solid #bbb;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-radius: 5px;
  transition: background-color 0.3s;
  ${(props) =>
    props.current
      ? null
      : `
  &:hover {
    background-color: ${HEALTH_COLOR_LIGHT};
    transition: background-color 0.3s;
  }`}
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const VideoWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: ${(props) => (props.current ? 'block' : 'none')};
`;

export const Video = styled.iframe`
  width: 100%;
  height: 100%;
`;

export const DescWrapper = styled.div`
  display: inline-block;
  width: 48%;
  margin: 1%;
`;

export const ItemDesc = styled.h4`
  margin-top: 8px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const Empty = styled.div`
  height: 120px;
`;
