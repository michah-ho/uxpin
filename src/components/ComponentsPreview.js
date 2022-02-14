import { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import GearIconSVG from "../svg/gear.svg";
import VisibilityIconSVG from "../svg/visibility-visible.svg";
import VisibilityHiddenIconSVG from "../svg/visibility-hidden.svg";

const Wrapper = styled.div`
  padding: 43px 0 90px 0;
  h1 {
    margin: 0 0 5px 0;
  }
  h3 {
    margin-bottom: 18px;
  }
`;
const StyledButton = styled(Button)`
  background: #3f51b5 !important;
  &:hover {
    background: #2c387e !important;
  }
`;
const ButtonContainer = styled.div`
  max-width: 300px;
`;
const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  .span-button {
    margin-left: 14px;
  }
`;
const ComponentsPreview = () => {
  const [eyeOpen, setEyeOpen] = useState(true);
  return (
    <Wrapper>
      <HeadingWrapper>
        <h1>Button</h1>
        <span
          className="span-button"
          onClick={() => {
            setEyeOpen(!eyeOpen);
          }}
        >
          <img
            src={eyeOpen ? VisibilityIconSVG : VisibilityHiddenIconSVG}
            alt="visibility icon"
          />
        </span>
        <span className="span-button">
          <img src={GearIconSVG} alt="gear icon" />
        </span>
      </HeadingWrapper>
      <h3>Component Preview</h3>
      <ButtonContainer>
        <StyledButton
          variant="contained"
          fullWidth={true}
          size="large"
          color="primary"
        >
          Sign Up
        </StyledButton>
      </ButtonContainer>
    </Wrapper>
  );
};

export default ComponentsPreview;
