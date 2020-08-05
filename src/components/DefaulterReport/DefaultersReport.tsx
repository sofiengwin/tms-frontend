import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Table } from "react-bootstrap";

interface Props {
  title: any;
  data: any[];
}

const Report: React.FC<Props> = ({ title, data }) => {
  return (
    <Container>
      <Flex>
        <H2>{title}</H2>
        <List>
          <Table responsive>
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Area</th>
                <th>MOT No.</th>
                <th>Resolve</th>
              </tr>
            </thead>
            <tbody>
              {data !== undefined &&
                data.map(
                  (
                    {
                      driver: { name, motNumber, areaOfOperation, id },
                      defaultedAt,
                    }: any,
                    index: number
                  ) => (
                    <tr key={index}>
                      <td>{defaultedAt}</td>
                      <td>{name}</td>
                      <td>{areaOfOperation}</td>
                      <td>
                        <Link to={`/drivers/${id}`}>{motNumber}</Link>
                      </td>
                      <td>
                        <Link to={`/resolve/${id}/for/${defaultedAt}`}>
                          Resolve
                        </Link>
                      </td>
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
    padding: 5% 1em;

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
