import React from "react";
import styled from "styled-components";

const QrImages = () => {
  return (
    <Container>
      {Array(6)
        .fill("https://sofien-pizzas.s3.amazonaws.com/17-qr-code.png")
        .map((image: string) => (
          <Image>
            <img src={image} />
          </Image>
        ))}
    </Container>
  );
};

export default QrImages;

const Container = styled.div`
  padding: 2% 10%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
`;
const Image = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;
