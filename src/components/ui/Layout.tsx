import * as React from "react";
import styled from "styled-components";
import Header from "./Header";

const Container = styled.div``;

const MainContent = styled.div`
  display: flex;
  padding-top: 5%;
  margin: 0;
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
