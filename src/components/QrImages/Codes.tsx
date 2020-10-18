import React from "react";
import styled from "styled-components";
import { ICreateDriver } from "../../data/models/Driver";

interface Props {
  drivers: ICreateDriver[];
}

const QrImages: React.FC<Props> = ({ drivers }) => {
  console.log({ drivers });
  return (
    <Container>
      {drivers.map(({ qrCode, motNumber }, index) => (
        <MotNumber key={index}>
          <Image>
            <img src={qrCode} alt='QR Code For User' />
          </Image>
          <p><strong>MOT NO: </strong>{motNumber}</p>
        </MotNumber>
      ))}
    </Container>
  );
};

export default QrImages;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 90px;
  margin: 0 auto;
`;
const Image = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;
const MotNumber = styled.div`
  border: 1px dashed;
  p {
    width: 100%;
    text-align: center;
  }
`;
