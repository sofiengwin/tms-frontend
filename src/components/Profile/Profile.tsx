import React from "react";
import styled from "styled-components";
import { Table, Tabs, Tab, ListGroup } from "react-bootstrap";
import {IPayment} from '../../data/models/Payment'

interface Props {
  driver: any;
}

const Profile: React.FC<Props> = ({driver}) => {
  console.log({driver}, 'profile')
  const payments = driver.payments || [];

  return (
    <>
      <Container>
        <TabStyle defaultActiveKey='profile'>
          <Tab eventKey='home' title='QR'>
            <Image>
              <img src={driver.qrCode} alt="QR CODE"/>
            </Image>
          </Tab>
          <Tab eventKey='profile' title='Image'>
            <Image>
              <div className='second'></div>
            </Image>
          </Tab>
        </TabStyle>
        <ListGroup style={{marginBottom: '20px'}}>
          <ListGroup.Item>Name: {driver.name}</ListGroup.Item>
          <ListGroup.Item>Phone Number: {driver.phoneNumber}</ListGroup.Item>
          <ListGroup.Item>MOT Number: {driver.motNumber}</ListGroup.Item>
          <ListGroup.Item>Address: {driver.address}</ListGroup.Item>
          <ListGroup.Item>State: {driver.state}</ListGroup.Item>
          <ListGroup.Item>Hometown: {driver.hometown}</ListGroup.Item>
          <ListGroup.Item>Area Of Operation: {driver.areaOfOperation}</ListGroup.Item>
        </ListGroup>
        <Table responsive>
          <thead>
            <tr>
              <th>Date Time</th>
              <th>Amount</th>
              <th>Cashier</th>
            </tr>
          </thead>
          <tbody>
            {payments.map(({createdAt, amount, cashier}: IPayment, index: number) => (
                <tr key={index}>
                  <td>{createdAt}</td>
                  <td>{amount}</td>
                   <td>{cashier.name}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Profile;

export const Container = styled.div`
  padding: 2% 0;
  width: 100%;
`;
export const TabStyle = styled(Tabs)`
  max-width: 90%;
  margin: auto;

  .nav-link {
    width: 50%;
  }

  @media (max-width: 769px) {
    max-width: 100%;
  }
`;
export const Ul = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2%;
`;
export const Li = styled.li`
  background: green;
  text-align: center;
  padding: 1em 0;
  cursor: pointer;
`;

export const Image = styled.div`
  padding: 2em 0;
  .first {
    background: linen;
    max-width: 90%;
    margin: auto;
    border-radius: 0.3em;
    height: 500px;
  }
  .second {
    background: purple;
    max-width: 90%;
    margin: auto;
    border-radius: 0.3em;
    height: 500px;
  }

  @media (max-width: 769px) {
    .first {
      max-width: 100%;
    }
    .second {
      max-width: 100%;
    }
  }
`;
