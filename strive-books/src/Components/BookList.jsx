import React from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Row } from "react-bootstrap";

const BookList = ({ books }) => (
  <Container>
    <Row>
      {books.map((element) => (
        <Col>
          <SingleBook book={element} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default BookList;
