import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";

function shuffleArray(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const ShelfItem = ({ items, timeUp, onDrop }) => {
  const [userSlots, setUserSlots] = useState(Array(items.length).fill(null));
  const [draggedItem, setDraggedItem] = useState(null);
  const [shuffledPool, setShuffledPool] = useState([]);

  useEffect(() => {
    if (!timeUp) {
      setUserSlots(Array(items.length).fill(null));
      setShuffledPool([]);
    } else {
      setShuffledPool(shuffleArray(items));
    }
  }, [timeUp, items.length, items]);

  const handleDragStart = (item) => setDraggedItem(item);
  const handleDrop = (idx) => {
    if (draggedItem !== null && !userSlots[idx]) {
      const newSlots = [...userSlots];
      newSlots[idx] = draggedItem;
      setUserSlots(newSlots);
      if (onDrop) onDrop(newSlots);
      setDraggedItem(null);
    }
  };

  const availableItems = shuffledPool.filter(
    (item) => !userSlots.includes(item)
  );

  return (
    <div>
      <Row className="justify-content-center mt-4 g-4">
        {(timeUp ? userSlots : items).map((item, idx) => (
          <Col
            key={idx}
            xs={items.length === 4 ? 6 : 3}
            md={items.length === 4 ? 3 : 2}
          >
            <Card
              className="text-center shadow d-flex align-items-center justify-content-center"
              style={{
                minHeight: "90px",
                height: "90px",
                width: "90px",
                fontSize: "2rem",
                margin: "auto",
              }}
              onDragOver={(e) =>
                timeUp && !userSlots[idx] && e.preventDefault()
              }
              onDrop={(e) => timeUp && handleDrop(idx)}
            >
              <Card.Body
                className="d-flex align-items-center justify-content-center p-0"
                style={{ height: "100%" }}
              >
                {item ? (
                  <span
                    style={{
                      fontSize: "2.5rem",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    {item}
                  </span>
                ) : (
                  timeUp && <span style={{ color: "#ccc" }}>?</span>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {timeUp && (
        <div className="d-flex justify-content-center mt-5">
          {availableItems.map((item, idx) => (
            <div
              key={idx}
              draggable
              onDragStart={() => handleDragStart(item)}
              style={{
                fontSize: "2rem",
                margin: "0 10px",
                cursor: "grab",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                background: "#f8f9fa",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShelfItem;
