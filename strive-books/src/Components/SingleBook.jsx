import React from "react";
import Card from "react-bootstrap/Card";
import fantasy from "../Data/fantasy.json";
import { Button } from "react-bootstrap";

const SingleBook = ({book}) => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={book.img} />
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
      <Card.Text>{book.category}</Card.Text>
      <Button variant="primary">{book.price}</Button>
    </Card.Body>
  </Card>
);

export default SingleBook;
