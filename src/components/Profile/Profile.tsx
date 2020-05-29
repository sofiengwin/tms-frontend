import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Table, Tabs, Tab } from "react-bootstrap";

const Profile: React.FC = () => {
  const [change, setChange] = useState();

  useEffect(() => {
    const fetchProfile = () => {};

    fetchProfile();
  }, []);
  return (
    <Container>
      <TabStyle defaultActiveKey='profile'>
        <Tab eventKey='home' title='QR'>
          <Image>
            <div className='first'></div>
          </Image>
        </Tab>
        <Tab eventKey='profile' title='Image'>
          <Image>
            <div className='second'></div>
          </Image>
        </Tab>
      </TabStyle>
      {/* <UnOrderList> */}
      <Table responsive>
        <thead>
          <tr>
            <th>Date Time</th>
            <th>Amount</th>
            {/* <th>Cashier</th> */}
            <th>MOT Number</th>
          </tr>
        </thead>
        <tbody>
          {Array(5)
            .fill("yes")
            .map(({ y: string }) => (
              <tr>
                <td>Table cell</td>
                <td>Table cell</td>
                {/* <td>Table cell</td> */}
                <td>Table cell</td>
              </tr>
            ))}
        </tbody>
      </Table>
      {/* </UnOrderList> */}
    </Container>
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
export const UnOrderList = styled.ul`
  list-style: none;
`;
export const List = styled.li`
  width: 90%;
  margin: auto;
  background: rgba(2, 2, 2, 0.5);
  padding: 1em 2em;
  margin-bottom: 1em;
  color: white;
  border-radius: 0.25em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 769px) {
    width: 100%;
  }

  p {
    width: 5em;
    height: 2em;
    border-radius: 0.3rem;
    background: ${(props) => (props.color ? props.color : "")};
  }
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
