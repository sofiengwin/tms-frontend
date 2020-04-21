import * as React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr 50px;
  background: red;
  height: 100vh;
`;

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <Container>
    <Header />
    <div>
      {children}
    </div>
    <Footer />
    </Container>
  );
}

export default Layout;