import styled from 'styled-components';
import {
  DeskTopWidth,
  TabletWidth,
  SmallTabletWidth,
  SmartPhoneWidth,
} from 'components/modules/style/Width';
import { HEALTH_COLOR } from '../../../modules/style/Color';

export const Container = styled.div`
  display: inline-block;
  width: ${(props) => (props.show ? '44%' : '156px')};
  height: 156px;
  margin: 12px;
  z-index: 0;
  box-shadow: 0px 2px 3px 2px rgba(0.5, 0.5, 0.5, 0.1);
  border-radius: 0.4rem;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.current ? HEALTH_COLOR : 'white')};
  &:hover {
    cursor: pointer;
    background-color: #2e98d9;
    transition: all 0.3s;
    box-shadow: 0px 4px 5px 2px rgba(100, 100, 100, 0.3);
  }
  @media (max-width: 960px) {
    width: ${(props) => (props.show ? '80%' : '44%')};
  }
  @media (max-width: 440px) {
    width: 90%;
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
  font-weight: 200;
  color: ${(props) => (!props.current ? 'black' : 'white')};
`;

export const UnitName = styled.div`
  display: inline-block;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 300;
`;

export const ShowDetail = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  color: #888;
  font-size: 12px;
`;

export const UnitDesc = styled.div`
  display: block;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 200;
`;

export const UnitDate = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
