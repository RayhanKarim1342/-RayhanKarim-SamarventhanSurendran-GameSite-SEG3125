import React, { useState, useEffect } from "react";

const Timer = ({ startTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(startTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, onTimeUp]);

  return (
    <div className="timer">
      <h2>Time Left: {timeLeft} seconds</h2>
    </div>
  );
};

export default Timer;
