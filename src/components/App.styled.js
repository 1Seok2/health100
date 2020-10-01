import styled from 'styled-components';
import { SmallTabletWidth } from 'components/modules/style/Width';

export const OuterContainer = styled.div`
  min-width: 280px;
  max-width: 1080px;
  margin: 0 auto;
  padding-top: 4rem;
  @media (min-width: ${SmallTabletWidth}) {
    padding-left: 7rem;
    padding-top: 2rem;
    ${(props) => (props.admin ? 'padding-top : 4rem;' : null)}
  }
`;
