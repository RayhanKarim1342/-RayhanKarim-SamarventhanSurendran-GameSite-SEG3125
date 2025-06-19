import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import GamePage from "./pages/GamePage";
import HowToPlay from "./pages/HowToPlay";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/howToPlay" element={<HowToPlay />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <footer
        className="footer bg-dark text-white d-flex justify-content-center align-items-center mt-5"
        style={{ height: "48px" }}
      >
        <Container className="text-center m-0 p-0">
          Rayhan Karim & Samarventhan Surendran
        </Container>
      </footer>
    </>
  );
}

export default App;
