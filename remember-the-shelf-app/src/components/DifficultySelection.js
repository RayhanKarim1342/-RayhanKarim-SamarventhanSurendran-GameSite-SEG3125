import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const DifficultySelection = () => {
  return (
    <Container
      className="mt-5 border border-dark-subtle rounded-4 pb-2 shadow-lg"
      style={{ backgroundColor: "azure" }}
      id="whyUs"
    >
      <h1 className="mx-5 mb-4 mt-4 display-6 fw-bold">Select a Difficulty</h1>
      <Row className="ms-4 mb-2 ps-2" style={{ marginRight: "200px" }}>
        <Col md={4}>
          <Card
            className="rounded-4 mt-4 mb-5 shadow"
            style={{ backgroundColor: "ghostwhite" }}
          >
            <Card.Body>
              <p class="fs-1 mb-0">👶</p>
              <Card.Title className="display-6 fw-bold fs-4 mt-0">
                Beginner
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className="rounded-4 mt-4 mb-5 shadow"
            style={{ backgroundColor: "ghostwhite" }}
          >
            <Card.Body>
              <p class="fs-1 mb-0">😎</p>
              <Card.Title className="display-6 fw-bold fs-4 mt-0">
                Challenger
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className="rounded-4 mt-4 mb-5 shadow"
            style={{ backgroundColor: "ghostwhite" }}
          >
            <Card.Body>
              <p class="fs-1 mb-0">🧙‍♂️</p>
              <Card.Title className="display-6 fw-bold fs-4 mt-0">
                Memory Wizard
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DifficultySelection;
