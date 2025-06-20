import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Timer from "../components/Timer";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavigationBar from "../components/Navbar";
import Shelf from "../components/ShelfItem";

const themeItems = {
  1: ["🧸", "🚗", "🎲", "🪀", "🪁", "🦖", "🛴", "🪆"],
  2: ["🍽️", "🛏️", "🪑", "🧹", "🖼️", "🪞", "🛋️", "🧺"],
  3: ["🍎", "🥦", "🍌", "🥕", "🍇", "🍉", "🍓", "🍋"],
};

const difficultySlots = {
  1: 4,
  2: 6,
  3: 8,
};

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

function getRandomItems(arr, n) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

const GamePage = () => {
  const [timeUp, setTimeUp] = useState(false);
  const [theme, setTheme] = useState("1");
  const [difficulty, setDifficulty] = useState("1");
  const [shelfItems, setShelfItems] = useState([]);
  const [userSlots, setUserSlots] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [completionTime, setCompletionTime] = useState(null);
  const [placementStartTime, setPlacementStartTime] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const t = localStorage.getItem("theme") || "1";
    const d = localStorage.getItem("difficulty") || "1";
    setTheme(t);
    setDifficulty(d);

    // Always use numbers for lookups
    const items = getRandomItems(
      themeItems[Number(t)],
      difficultySlots[Number(d)]
    );
    setShelfItems(items);
  }, []);

  const handleTimeUp = () => {
    setTimeUp(true);
    setPlacementStartTime(Date.now());
  };

  const handleUserDrop = (slots) => {
    setUserSlots(slots);
  };

  const handleDonePlaying = () => {
    let correct = 0;
    let incorrect = 0;
    for (let i = 0; i < shelfItems.length; i++) {
      if (userSlots[i] === shelfItems[i]) correct++;
      else if (userSlots[i]) incorrect++;
    }

    let secondsTaken = 0;
    if (placementStartTime) {
      secondsTaken = Math.round((Date.now() - placementStartTime) / 1000);
      setCompletionTime(secondsTaken);
    }

    // Score mechanics, can be adjusted
    const baseScore = correct * 10 - incorrect * 20;
    const timeBonus = Math.max(0, 40 - secondsTaken); // we can change (40) how much we want to give as time points
    const totalScore = baseScore + timeBonus;

    setScore(totalScore);
    setShowResults(true);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <>
      <NavigationBar />
      <Container
        className="mt-5 border border-dark-subtle rounded-4 shadow-lg"
        style={{ minHeight: "600px" }}
      >
        <div className="d-flex flex-column align-items-center mt-3">
          <div className="mb-3">
            <span className="fw-bold">Theme:</span> {themeTexts[theme]} &nbsp; |
            &nbsp;
            <span className="fw-bold">Difficulty:</span>{" "}
            {difficultyTexts[difficulty]}
          </div>
          {!timeUp && shelfItems.length > 0 && (
            <>
              <Row>
                <Col md={12} className="d-flex justify-content-center">
                  <h2 className="bg-dark text-white fw-bold rounded-pill shadow py-3 px-4 mb-4">
                    Remember the Shelf!
                  </h2>
                </Col>
              </Row>
              <Timer
                startTime={30 - shelfItems.length * 2}
                onTimeUp={handleTimeUp}
              />
            </>
          )}
          {timeUp && !showResults && (
            <>
              <Alert
                key="warning"
                variant="warning"
                className="mt-3 rounded-4 shadow-sm"
              >
                The Time is Up! Drag the items back to their original spots.
              </Alert>
              <Button
                className="mt-4"
                variant="success"
                onClick={handleDonePlaying}
                disabled={
                  userSlots.filter(Boolean).length !== shelfItems.length
                }
              >
                View Results
              </Button>
            </>
          )}
          <Shelf
            theme={theme}
            difficulty={difficulty}
            items={shelfItems}
            timeUp={timeUp}
            onDrop={handleUserDrop}
          />
          {showResults && (
            <div className="mt-3 text-center">
              <h2 className="bg-dark text-white fw-bold rounded-pill shadow p-2">
                Results
              </h2>
              <p className="bg-dark text-white rounded-pill p-2 shadow mt-3 mx-4">
                Score: <b>{score}</b>
              </p>
              {completionTime !== null && (
                <p className="bg-dark text-white rounded-pill p-2 shadow mt-3 mx-4">
                  Completion Time: <b>{completionTime}s</b>
                </p>
              )}
              <Button
                className="mb-5 btn btn-light rounded-4 mt-5 p-3 px-5 shadow border border-dark-subtle fw-bold fs-3"
                onClick={handleGoHome}
              >
                Play Again
              </Button>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default GamePage;
