import styled from "styled-components";

export const PropertyList = styled.div`
  max-width: 820px;
  margin-bottom: 43px;
`;
export const ProperyListItem = styled.div`
  display: flex;
  padding: 14px 20px;
  border-bottom: solid 1px var(--pinline-grey);
  
  ${(props) => ( props.visibility ?
     '':
     `
     color: var(--disabled-grey);
     label, input, select, textarea, small {
      color: var(--disabled-grey) !important;
     }
     .form-toggle { opacity : 50%};
     `
  )}
  .plus-button{
    padding:5px;
    border-radius:2px;
    &:hover{
      background:#f2f2f2;
    }
  }
`;
export const PropertyLabelCol = styled.div`
  font-size: var(--font-size-md);
  min-width: 213px;
  span {
    margin-right: 14px;
  }
`;
export const HiddenCol = styled.div`
  flex: 2;
`;