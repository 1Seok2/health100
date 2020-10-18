import styled from 'styled-components';
import {
  NEGATIVE_COLOR,
  NEGATIVE_COLOR_LIGHT,
} from 'components/modules/style/Color';

export const InputFile = styled.input.attrs({
  type: 'file',
})`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const Wrapper = styled.div`
  margin: 12px 0;
`;

export const SLabel = styled.label`
  display: inline-block;
  padding: 0.5em 0.75em;
  color: #999;
  font-size: inherit;
  line-height: normal;
  vertical-align: middle;
  background-color: #fdfdfd;
  cursor: pointer;
  border: 1px solid #ebebeb;
  border-bottom-color: #e2e2e2;
  border-radius: 0.25em;
  fontfamily: 'Nanum Gothic';
`;

export const Delete = styled.button`
  background-color: ${NEGATIVE_COLOR};
  transition: background-color 0.3s;
  margin-left: 12px;
  color: white;
  &:hover {
    background-color: ${NEGATIVE_COLOR_LIGHT};
    transition: background-color 0.3s;
  }
  &:focus {
    outline: none;
  }
`;
