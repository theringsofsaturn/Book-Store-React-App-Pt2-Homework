import React from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Row } from "react-bootstrap";


class BookList extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          {this.props.books.map((element) => (
            <Col xs={4}>
              <SingleBook book={element} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
