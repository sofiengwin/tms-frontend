import * as React from "react";
import styled from "styled-components";
import Header from "./Header";

const Container = styled.div`
  display: grid;
  /* grid-template-rows: 50px 1fr; */
  min-height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
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
