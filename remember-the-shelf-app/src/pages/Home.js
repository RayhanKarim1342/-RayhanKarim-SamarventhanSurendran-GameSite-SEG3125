import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import ThemeSelection from "../components/ThemeSelection";
import DifficultySelection from "../components/DifficultySelection";
import ReadyToPlay from "../components/ReadyToPlay";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [selectedThemeID, setSelectedThemeID] = useState(null);
  const [selectedDifficultyID, setSelectedDifficultyID] = useState(null);

  return (
    <div>
      <Navbar />
      <Container className="position-relative">
        <img
          src="/images/homeImage.jpg"
          className="rounded-4 w-100 border border-dark-subtle shadow-lg"
          alt="abstract art"
        />
        <div
          className="position-absolute top-0 start-50 translate-middle-x text-dark text-center"
          style={{ margin: 0, padding: 0, width: "100%" }}
        >
          <div className="fw-bold mt-5 pt-5 display-6">Test Your Memory 🧠</div>
          <p className="display-6 mt-3 mx-5 mb-5 pb-5 px-5 text-center fs-5">
            Challenge yourself with our engaging memory game. Choose from a
            variety of themes and difficulty levels to match pairs and improve
            your cognitive skills
          </p>
          <Button
            variant="light"
            as={Link}
            to="/howToPlay"
            className="ms-2 rounded-4 p-2 px-3 fw-bold py-3 shadow"
          >
            Learn More
          </Button>
        </div>
      </Container>
      <ThemeSelection
        selectedThemeID={selectedThemeID}
        setSelectedThemeID={setSelectedThemeID}
      />
      <DifficultySelection
        selectedDifficultyID={selectedDifficultyID}
        setSelectedDifficultyID={setSelectedDifficultyID}
      />
      {selectedThemeID && selectedDifficultyID && (
        <ReadyToPlay
          selectedThemeID={selectedThemeID}
          selectedDifficultyID={selectedDifficultyID}
        />
      )}
    </div>
  );
};

export default Home;
