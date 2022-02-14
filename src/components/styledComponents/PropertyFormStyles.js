import styled from 'styled-components';

export const FormRow = styled.div`
  display: ${(props) => (props.isBlock ? "block" : "flex")};
  flex-wrap:wrap;
  align-items:center;
  margin-bottom:14px;
  label {
    margin-right:14px;
    color:#5e5e5e;
  }
  input, select {
    padding: 5px;
    border:0;
    border-bottom: 1px solid var(--pinline-grey);
    min-width:230px;
    color:#5e5e5e;
    &:focus-visible{
      outline:none;
      border-bottom: 1px solid var(--button-blue);
    }
  }
  select{
    min-width:118px;
  }
  .small-input {
    max-width:40px;
    margin-left:14px;
    padding-bottom:8px;
    min-width:initial;
    &::placeholder{
      color:#d9d9d9;
    }
  }
  .textarea-label {
    width:100%;
    display:block;
    margin-bottom:5px;
    color:#5e5e5e;
  }
  textarea{
    padding: 5px;
    width:80%;
    border: 1px solid var(--pinline-grey);
    color:#5e5e5e;
    &:focus-visible{
      outline:none;
      border: 1px solid var(--button-blue);
    }
  }
  small {
    margin-top:3px;
    display:block;
    color: #848484;
    font-size:var(--font-size-sm);
  }
  a {
    color: #5e5e5e;
    &:visited{
      color: #5e5e5e;
    }
  }
`;

export const AddFormContainer = styled.div`
  max-width:820px;
  margin: ${(props) => props.show ? "43px 0 0 0" : "0 0 24px 0"};

  small {
    display:block;
    width:100%;
  }
`;

export const AddFormButtonContainer = styled.div`
  display:flex;
  justify-content:end;
  align-items:center;
  padding-bottom:18px;
  border-bottom: solid 1px var(--pinline-grey);
  
  .span-button{
    text-decoration:underline;
    margin-right:14px;
    color: #5e5e5e;
  }

  button {
    border:0;
    background: var(--button-blue);
    color: #fff;
    padding: 8px 20px;
    border-radius: 2px;

    &:hover {
      cursor:pointer;
    }
  }
`;