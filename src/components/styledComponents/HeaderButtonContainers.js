import styled from 'styled-components';

const HeaderButtonContainers = styled.div`
  button {
    background: var(--button-blue);
    border-radius:2px;
    color:#fff;
    font-size:12px;
    padding: 5px 10px;
    border: 0;
    &:hover{
      cursor:pointer;
    }
    margin-left:16px;
  }
  span.span-button {
    color: #5e5e5e;
    text-decoration: underline;
    &:visited, &:active {
      color: #5e5e5e;
    }
  }
`;

export default HeaderButtonContainers;