import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HEALTH_COLOR } from 'components/modules/style/Color';

export const SLink = styled(Link)`
  background-color: ${(props) => (props.current ? HEALTH_COLOR : 'none')};
  color: ${(props) => (props.current ? 'white' : '#666')};
  padding-right: 12px;
  text-align: left;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 3px;
  font-family: 'Jua', sans-serif;
`;

export const Entity = styled.span`
  color: ${(props) => (props.current ? 'white' : '#666')};
  float: right;
  font-family: 'Jua', sans-serif;
`;
