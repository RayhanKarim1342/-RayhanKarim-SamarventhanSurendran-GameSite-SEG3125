import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const DifficultySelection = ({
  selectedDifficultyID,
  setSelectedDifficultyID,
}) => {
  return (
    <Container
      className="mt-5 border border-dark-subtle rounded-4 pb-2 shadow-lg"
      style={{ backgroundColor: "azure" }}
    >
      <h1 className="mx-5 mb-4 mt-4 display-6 fw-bold">Select a Difficulty</h1>
      <Row className="ms-4 mb-2 ps-2" style={{ marginRight: "200px" }}>
        <Col md={4}>
          <Card
            onClick={() => setSelectedDifficultyID(1)}
            className="rounded-4 mt-4 mb-5 shadow"
            style={{
              backgroundColor:
                selectedDifficultyID === 1 ? "#212529" : "ghostwhite",
            }}
          >
            <Card.Body>
              <p className="fs-1 mb-0">👶</p>
              <Card.Title
                className="display-6 fw-bold fs-4 mt-0"
                style={{
                  color: selectedDifficultyID === 1 ? "ghostwhite" : "#212529",
                }}
              >
                Beginner
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            onClick={() => setSelectedDifficultyID(2)}
            className="rounded-4 mt-4 mb-5 shadow"
            style={{
              backgroundColor:
                selectedDifficultyID === 2 ? "#212529" : "ghostwhite",
            }}
          >
            <Card.Body>
              <p className="fs-1 mb-0">😎</p>
              <Card.Title
                className="display-6 fw-bold fs-4 mt-0"
                style={{
                  color: selectedDifficultyID === 2 ? "ghostwhite" : "#212529",
                }}
              >
                Challenger
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            onClick={() => setSelectedDifficultyID(3)}
            className="rounded-4 mt-4 mb-5 shadow"
            style={{
              backgroundColor:
                selectedDifficultyID === 3 ? "#212529" : "ghostwhite",
            }}
          >
            <Card.Body>
              <p className="fs-1 mb-0">🧙‍♂️</p>
              <Card.Title
                className="display-6 fw-bold fs-4 mt-0"
                style={{
                  color: selectedDifficultyID === 3 ? "ghostwhite" : "#212529",
                }}
              >
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
