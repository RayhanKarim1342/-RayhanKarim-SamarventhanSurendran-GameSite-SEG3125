import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

const ThemeSelection = ({ selectedThemeID, setSelectedThemeID }) => {
  return (
    <Container
      className="mt-5 border border-dark-subtle rounded-4 shadow-lg"
      style={{ backgroundColor: "aliceblue" }}
    >
      <h1 className="mx-5 mb-4 mt-4 display-6 fw-bold">Select a Theme</h1>
      <Row className="ms-4 mb-2 ps-2" style={{ marginRight: "200px" }}>
        <Col md={4}>
          <Card
            onClick={() => setSelectedThemeID(1)}
            className="rounded-4 shadow border-dark-subtle"
            style={{
              backgroundColor: selectedThemeID === 1 ? "#212529" : "ghostwhite",
              color: selectedThemeID === 1 ? "#fff" : "#000",
              cursor: "pointer",
            }}
          >
            <Card.Img
              variant="top"
              src="/images/toys.jpg"
              style={{ height: "270px", border: "none" }}
              className="rounded-top-4"
            />
            <Card.Body>
              <Card.Title className="display-6 fw-bold fs-4">Toys</Card.Title>
              <Card.Text>Go back to your childhood</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            onClick={() => setSelectedThemeID(2)}
            className="rounded-4 shadow border-dark-subtle"
            style={{
              backgroundColor: selectedThemeID === 2 ? "#212529" : "ghostwhite",
              color: selectedThemeID === 2 ? "#fff" : "#000",
              cursor: "pointer",
            }}
          >
            <Card.Img
              variant="top"
              src="/images/homeItem.jpg"
              style={{ height: "270px", border: "none" }}
              className="rounded-top-4"
            />
            <Card.Body>
              <Card.Title className="display-6 fw-bold fs-4">Home</Card.Title>
              <Card.Text>Train yourself on home care</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            onClick={() => setSelectedThemeID(3)}
            className="rounded-4 shadow border-dark-subtle"
            style={{
              backgroundColor: selectedThemeID === 3 ? "#212529" : "ghostwhite",
              color: selectedThemeID === 3 ? "#fff" : "#000",
              cursor: "pointer",
            }}
          >
            <Card.Img
              variant="top"
              src="/images/fruitAndVeggie.jpg"
              style={{ height: "270px", border: "none" }}
              className="rounded-top-4"
            />
            <Card.Body>
              <Card.Title className="display-6 fw-bold fs-4">
                Fruits & Veggies
              </Card.Title>
              <Card.Text>Encouraging you to eat healthy</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ThemeSelection;
