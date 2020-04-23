import React, { useState } from "react";
import styled from "styled-components";

const Profile: React.FC = () => {
  const [change, setChange] = useState({
    first: true,
    second: false,
  });
  return (
    <Container>
      <Tab>
        <Ul>
          <Li
            onClick={() =>
              setChange({
                first: true,
                second: false,
              })
            }
          >
            QR
          </Li>
          <Li
            onClick={() =>
              setChange({
                first: false,
                second: true,
              })
            }
          >
            IMAGE
          </Li>
        </Ul>
      </Tab>
      <Image>
        {change.first && <div className='first'>First Image</div>}
        {change.second && <div className='second'>Second Image</div>}
      </Image>
      <UnOrderList>
        {[
          "white",
          "blue",
          "yellow",
          "green",
          "teal",
          "linen",
          "coral",
          "coral",
          "coral",
          "coral",
          "coral",
        ].map((a: string) => (
          <List color={a}>
            <span>{a}</span>
            <p></p>
          </List>
        ))}
      </UnOrderList>
    </Container>
  );
};

export default Profile;

export const Container = styled.div`
  padding: 2% 0;
`;
export const Tab = styled.div`
  max-width: 90%;
  margin: auto;
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
`;
