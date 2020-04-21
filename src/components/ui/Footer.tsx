import * as React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  background: green;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <h1>Footer</h1>
    </FooterWrapper>
  );
}

export default Footer;