import Container from "react-bootstrap/Container";
import Navbar from "../components/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const HowToPlay = () => {
  return (
    <>
      <Navbar HowToPlay={false} />
      <Container
        className="mt-5 border border-dark-subtle rounded-4 shadow-lg"
        style={{ backgroundColor: "aliceblue" }}
      >
        <Row>
          <Col md={4}>
            <p class="me-5 mt-4 ms-4 mb-3 text-white bg-dark mb-0 mt-2 p-2 px-3 rounded-pill shadow display-6 fw-bold text-center">
              How to Play
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <p className="me-5 mt-5 ms-4 text-dark bg-light mb-0 mt-2 p-2 px-3 rounded-pill shadow display-6 fw-bold text-center fs-4">
              Objective
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p className="ms-4 ps-2 pe-5 mt-3 display-6 fs-5">
              Memorize exactly where each item is placed on the shelf before
              time runs out. Place back the items carefully as fast as you can
              for the highest score. Be careful though! Placing an item in the
              wrong place will net you double the points lost for if you had
              placed the item in the correct place.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <p className="me-5 mt-5 ms-4 text-dark bg-light mb-0 mt-2 p-2 px-3 rounded-pill shadow display-6 fw-bold text-center fs-4">
              Gameplay
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p className="ms-4 ps-2 pe-5 mt-3 display-6 fs-5">
              Simply drag and drop the items available to you at the bottom of
              the shelf into their correct location! Be careful though, once you
              place an item into a spot you cannot move it again.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <p className="me-5 mt-5 ms-4 text-dark bg-light mb-0 mt-2 p-2 px-3 rounded-pill shadow display-6 fw-bold text-center fs-4">
              Scoring
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p className="ms-4 ps-2 pe-5 mt-3 display-6 fs-5">
              Your score is based on how many items are correctly placed on the
              shelf and is also dependent on how quickly you are able to put the
              items back on the shelf. Not just memory is put to the test but
              also speed!
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <p className="me-5 mt-5 ms-4 text-dark bg-light mb-0 mt-2 p-2 px-3 rounded-pill shadow display-6 fw-bold text-center fs-4">
              Difficulty Levels
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p className="ms-4 ps-2 pe-5 mt-3 display-6 fs-5">
              Choose from different difficulty levels, higher difficulty levels
              will give you less time to memorize the items on the shelf. If
              you’re a Memory Wizard you will not only have less time but also
              more items to memorize! Prove yourself worthy by netting a perfect
              score on the Memory Wizard difficulty.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="d-flex justify-content-center">
            <Button
              variant="dark"
              as={Link}
              to="/"
              className="my-4 rounded-4 p-2 px-3 fw-bold fs-6"
              style={{ fontSize: "0.85rem" }}
            >
              I'm Ready to Play!
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HowToPlay;
