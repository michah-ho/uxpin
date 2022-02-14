import styled from 'styled-components';

const PropertyHeader = styled.div`
  display:flex;
  align-items:center;
  .span-button {
    color: var(--button-blue);
    &:visited {
      color: var(--button-blue);
    }
  }
  h3{
    margin:0;
    margin-right: 14px;
  }
`;

export default PropertyHeader;