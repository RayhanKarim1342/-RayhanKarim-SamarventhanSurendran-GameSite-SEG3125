import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import ThemeSelection from "../components/ThemeSelection";
import DifficultySelection from "../components/DifficultySelection";

const Home = () => {
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
          <button className="btn btn-light rounded-4 mt-5 fw-bold p-3 shadow">
            Learn More
          </button>
        </div>
      </Container>
      <ThemeSelection />
      <DifficultySelection />
    </div>
  );
};

export default Home;
