import React from "react";
import styled from "styled-components";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ICreateDriver } from "../../data/models/Driver";

interface Props {
  drivers: ICreateDriver[];
}

const Report: React.FC<Props> = ({ drivers }) => {
  return (
    <Container>
      <Flex>
        <List>
          <Table responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>MOT</th>
                <th>Area Of Operation</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map(
                (
                  { name, motNumber, areaOfOperation, id  }: ICreateDriver,
                  index: number
                ) => (
                  <tr key={index}>
                    <td>
                      <Link to={`/drivers/${id}`}>
                        {name}
                      </Link>
                    </td>
                    <td>
                      <Link to={`/drivers/${id}`}>
                        {motNumber}
                      </Link>
                    </td>
                    <td>{areaOfOperation}</td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </List>
      </Flex>
    </Container>
  );
};

export default Report;

export const Container = styled.div`
  padding: 5% 10%;
  width: 100%;

  @media (max-width: 769px) {
    padding: 5% 0;

    th,
    td {
      font-size: 0.9em;
    }
  }
`;
export const Flex = styled.div``;
export const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 95% 5%;
`;
export const Ul = styled.ul`
  list-style: none;
`;
export const Li = styled.li<{ color: string }>`
  width: 100%;
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
export const LiColor = styled.li`
  width: 100%;
  background: ${(props) => (props.color ? props.color : "")};
  padding: 1.6em;
  margin-bottom: 1em;
  color: white;
  border-radius: 0.25em;
`;
export const H2 = styled.h2``;
