import styled from "styled-components";
import PropTypes from 'prop-types';
import LayoutSVG from "../svg/layout-medium-tile-outline.svg";
import ContainerSpaceBetween from "./styledComponents/ContainerSpaceBetween";
import Breadcrumbs from "./styledComponents/Breadcrumbs";
import HeaderButtonContainers from "./styledComponents/HeaderButtonContainers";

const HeaderContainer = styled(ContainerSpaceBetween)`
  border-bottom: 1px solid var(--pinline-grey);
  padding: 10px;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
`;

const Header = ({ setIsDiscard, setIsSaved }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <span className="span-button">
          <img src={LayoutSVG} alt="layout icon" />
        </span>
        <Breadcrumbs>
          <span>Material UI</span>
          <span> / Button</span>
        </Breadcrumbs>
      </LogoContainer>
      <HeaderButtonContainers>
        <span className="span-button" onClick={() => {setIsDiscard(true)}}> Discard changes</span>
        <button onClick={() => {setIsSaved(true)}}>Save Changes</button>
      </HeaderButtonContainers>
    </HeaderContainer>
  );
};

Header.propTypes = {
  setIsDiscard: PropTypes.func,
  setIsSaved: PropTypes.func,
}

export default Header;
