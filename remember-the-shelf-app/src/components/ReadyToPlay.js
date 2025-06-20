import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const themeTexts = {
  1: "Toys",
  2: "Home",
  3: "Fruits & Veggies",
};

const difficultyTexts = {
  1: "Beginner",
  2: "Challenger",
  3: "Memory Wizard",
};

const ReadyToPlay = ({ selectedThemeID, selectedDifficultyID }) => {
  const navigate = useNavigate();

  const handlePlayNow = () => {
    // Save selections to localStorage
    localStorage.setItem("theme", selectedThemeID);
    localStorage.setItem("difficulty", selectedDifficultyID);
    navigate("/game");
  };

  return (
    <Container className="mt-5 pb-2">
      <Row className="ms-4 mb-0 ps-2" style={{ marginRight: "250px" }}>
        <Col md={2}>
          <h1
            className="mb-0 display-6 fw-bold"
            style={{
              background: "linear-gradient(90deg, #8711C1, #2472FC)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: 1.4,
              display: "inline-block",
              important: true,
            }}
          >
            Ready?
          </h1>
        </Col>
        <Col md={5}>
          <p
            className="ms-5 text-white bg-dark mb-0 mt-2 p-2 px-4 rounded-pill shadow d-flex justify-content-between"
            style={{ lineHeight: 1.8 }}
          >
            Theme:
            <span style={{ fontWeight: "bold" }}>
              {themeTexts[selectedThemeID]}
            </span>
          </p>
        </Col>
        <Col md={5}>
          <p
            className="me-5 text-white bg-dark mb-0 mt-2 p-2 px-4 rounded-pill shadow d-flex justify-content-between"
            style={{ lineHeight: 1.8 }}
          >
            Difficulty:
            <span style={{ fontWeight: "bold" }}>
              {difficultyTexts[selectedDifficultyID]}
            </span>
          </p>
        </Col>
      </Row>
      <button
        className="ms-5 btn btn-light rounded-4 mt-5 p-3 px-5 shadow border border-dark-subtle fw-bold fs-3"
        onClick={handlePlayNow}
      >
        Play Now
      </button>
    </Container>
  );
};

export default ReadyToPlay;