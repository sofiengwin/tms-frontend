import * as React from "react";
import styled from "styled-components";
import Header from "./Header";

const Container = styled.div``;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
`;

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      <MainContent>{children}</MainContent>
    </Container>
  );
};

export default Layout;
