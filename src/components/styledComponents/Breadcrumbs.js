import styled from 'styled-components';

const Breadcrumbs = styled.div`
  padding-left:16px;
  margin-left:18px;
  border-left:1px solid var(--pinline-grey);
  font-size:15px;
  span:first-child {
    color: var(--light-grey);
  }
  span:last-child {
    color: var(--black);
    font-weight:bold
  }
`;

export default Breadcrumbs;