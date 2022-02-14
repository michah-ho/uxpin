import styled from "styled-components";
import PropTypes from "prop-types";

const ToggleButtonWrapper = styled.div`
  color: var(--black);
  display: flex;
  width: 117px;
  border: 1px solid var(--pinline-grey);
  &:hover {
    cursor:pointer;
  }
  .left {
    text-align: center;
    padding: 5px;
    flex:1;
    background: ${(props) => (props.isChecked ? "#e6e6e6" : "#fff")};
  }
  .right {
    text-align: center;
    padding: 5px;
    flex:1;
    background: ${(props) => (props.isChecked ? "#fff" : "#e6e6e6")};
  }
  input[type="checkbox"] {
    display: none;
  }
`;
const FormToggle = ({ isChecked, changeHandler, idx }) => {
  return (
    <ToggleButtonWrapper className="form-toggle" isChecked={isChecked} onClick={() => changeHandler("isChecked", !isChecked, idx)}>
      <div className="left">
        True
      </div>
      <div className="right">
        False
      </div>
      <input type="checkbox" value={isChecked} />
    </ToggleButtonWrapper>
  );
};

FormToggle.propTypes = {
  isChecked: PropTypes.bool, 
  changeHandler: PropTypes.func, 
  idx: PropTypes.number
}

export default FormToggle;
