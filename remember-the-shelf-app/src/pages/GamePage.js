import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Timer from "../components/Timer";
import Alert from "react-bootstrap/Alert";
import Shelf from "../components/shelf";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

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

    const items = getRandomItems(themeItems[t], difficultySlots[d]);
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
    const baseScore = correct * 10 - incorrect * 10;
    const timeBonus = Math.max(0, 40 - secondsTaken); // we can change (40) how much we want to give as time points
    const totalScore = baseScore + timeBonus;

    setScore(totalScore);
    setShowResults(true);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Container className="mt-5 border border-dark-subtle rounded-4 shadow-lg"
      style={{ minHeight: "600px" }}>
      <div className="d-flex flex-column align-items-center">
        <div className="mb-3">
          <span className="fw-bold">Theme:</span> {theme} &nbsp; | &nbsp;
          <span className="fw-bold">Difficulty:</span> {difficulty}
        </div>
        {!timeUp && <Timer startTime={10} onTimeUp={handleTimeUp} />}
        {timeUp && !showResults && (
          <>
            <Alert
              key="warning"
              variant="warning"
              className="mt-5 rounded-4 shadow-sm"
            >
              The Time is Up! Drag the emojis back to their original spots.
            </Alert>
            <Button
              className="mt-4"
              variant="success"
              onClick={handleDonePlaying}
              disabled={userSlots.filter(Boolean).length !== shelfItems.length}
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
          <div className="mt-5 text-center">
            <h2>Results</h2>
            <p>
              Score: <b>{score}</b>
            </p>
            {completionTime !== null && (
              <p>
                Time to complete: <b>{completionTime} seconds</b>
              </p>
            )}
            <Button
              className="ms-5 btn btn-light rounded-4 mt-5 p-3 px-5 shadow border border-dark-subtle fw-bold fs-3"
              onClick={handleGoHome}
            >
              Play Again
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default GamePage;