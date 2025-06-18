import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const GamePage = () => {
  return (
    <Container className="mt-5 border border-dark-subtle rounded-4 shadow-lg">
      <div className="d-flex flex-column align-items-center">
        <h1 className="m-3 display-6 fw-bold text-center">
          we need to add the timer at the top and the shelf at the bottom, with
          items that are randomly assorted
        </h1>
      </div>
    </Container>
  );
};

export default GamePage;
