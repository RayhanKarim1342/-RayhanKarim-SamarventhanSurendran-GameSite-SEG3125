import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Timer from "../components/Timer";
import Alert from "react-bootstrap/Alert";

const GamePage = () => {
  const [timeUp, setTimeUp] = useState(false);

  const handleTimeUp = () => {
    setTimeUp(true);
  };

  return (
    <Container className="mt-5 border border-dark-subtle rounded-4 shadow-lg">
      <div className="d-flex flex-column align-items-center">
        {!timeUp && <Timer startTime={10} onTimeUp={handleTimeUp} />}
        {timeUp && (
          <Alert
            key="warning"
            variant="warning"
            className="mt-5 rounded-4 shadow-sm"
          >
            The Time is Up!
          </Alert>
        )}
        <h1 className="m-3 display-6 fw-bold text-center">
          we need to add the timer at the top and the shelf at the bottom, with
          items that are randomly assorted
        </h1>
      </div>
    </Container>
  );
};

export default GamePage;
