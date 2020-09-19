import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  padding-top: 1rem;
  margin-bottom: 1rem;
  display: inline-block;
  position: relative;
  height: calc(100vh - 5.5rem);
  overflow: scroll;
`;

export const Container = styled.div`
  display: inline-block;
  position: relative;
  width: ${(props) => (props.width ? props.width : 492)}px;
  z-index: 0;
  height: 6rem;
  box-shadow: 0px 2px 3px 2px rgba(0.5, 0.5, 0.5, 0.1);
  border-radius: 0.4rem;
  align-items: center;
  padding: 16px;
  margin: 0.5rem;
  &:last-child {
    border-bottom: 1px solid #dfdfdf;
  }
  &:hover {
    cursor: pointer;
    background-color: #f9f9f9;
    transition: all 0.3s;
    box-shadow: 0px 4px 5px 2px rgba(100, 100, 100, 0.3);
  }
`;

export const Image = styled.img`
  height: 100%;
`;

export const ImageWrapper = styled.div`
  float: left;
  width: 96px;
  height: 96px;
  overflow: hidden;
  margin-right: 16px;
  border: 1px solid gray;
`;

export const DescWrapper = styled.div`
  position: relative;
  height: 100%;
  width: ${(props) => (props.width ? `${props.width}px` : '378px')};
  float: left;
`;

export const BranchName = styled.div`
  display: block;
  font-size: 20px;
  font-weight: 700;
  margin-right: 16px;
  margin-bottom: 12px;
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
