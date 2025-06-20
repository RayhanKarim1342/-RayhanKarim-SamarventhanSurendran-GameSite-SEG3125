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
      <p className="bg-dark text-white rounded-pill shadow px-3 py-2">
        Time Left: <b>{timeLeft}s</b>
      </p>
    </div>
  );
};

export default Timer;
