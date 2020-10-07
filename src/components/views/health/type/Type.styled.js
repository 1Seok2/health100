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
  HEALTH_COLOR_LIGHT,
  NEGATIVE_COLOR_LIGHT,
} from 'components/modules/style/Color';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const SelectType = styled.a`
  width: 40%;
  height: 80%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    background-color: ${HEALTH_COLOR};
  }
  &:last-child {
    background-color: ${NEGATIVE_COLOR};
  }
  &:hover {
    &:first-child {
      background-color: ${HEALTH_COLOR_LIGHT};
    }
    &:last-child {
      background-color: ${NEGATIVE_COLOR_LIGHT};
    }
  }
`;

export const Desc = styled.span`
  text-align: center;
  color: white;
  font-size: 32px;
  line-height: 48px;
  font-family: 'Jua', sans-serif;
`;
