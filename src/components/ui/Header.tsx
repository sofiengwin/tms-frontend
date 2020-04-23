import * as React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  background: blue;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <h1>Header</h1>
    </HeaderWrapper>
  );
};

export default Header;
