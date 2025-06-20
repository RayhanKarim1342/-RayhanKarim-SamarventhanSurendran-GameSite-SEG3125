import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

// const sections = [
//   { id: "ourServices", label: "Our Services" },
//   { id: "theBest", label: "Why We're The Best" },
// ];

const NavigationBar = ({ HowToPlay = true }) => {
  // const [activeSection, setActiveSection] = useState("");
  // const location = useLocation();
  // const navigate = useNavigate();

  // // Scroll to section with offset for fixed navbar
  // const scrollToSection = (id) => {
  //   const el = document.getElementById(id);
  //   if (el) {
  //     const yOffset = -70; // Adjust this value to match your navbar height
  //     const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  //     window.scrollTo({ top: y, behavior: "smooth" });
  //   }
  // };

  // const handleNavClick = (id) => (e) => {
  //   e.preventDefault();
  //   if (location.pathname !== "/") {
  //     navigate("/", { replace: false });
  //     setTimeout(() => {
  //       scrollToSection(id);
  //     }, 100);
  //   } else {
  //     scrollToSection(id);
  //   }
  // };

  // Update active section on scroll
  // useEffect(() => {
  //   const handleScroll = () => {
  //     let current = "";
  //     for (const section of sections) {
  //       const el = document.getElementById(section.id);
  //       if (el) {
  //         const rect = el.getBoundingClientRect();
  //         if (rect.top <= 120 && rect.bottom > 120) {
  //           current = section.id;
  //           break;
  //         }
  //       }
  //     }
  //     setActiveSection(current);
  //   };
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   handleScroll();
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [location.pathname]);

  return (
    <Navbar bg="dark" variant="dark" expand="sm" fixed="top" className="px-3">
      <Container fluid>
        {!HowToPlay && (
          <Button
            variant="light"
            as={Link}
            to="/"
            className="me-3 rounded-pill p-2 px-3 fw-bold"
            style={{ fontSize: "0.85rem" }}
          >
            <i class="bi bi-caret-left-fill"></i>
          </Button>
        )}
        <Navbar.Brand as={Link} to="/" className="mb-0 text-light fw-bold fs-4">
          Remember The Shelf
        </Navbar.Brand>
        <div className="d-flex align-items-center ms-auto">
          {HowToPlay && (
            <OverlayTrigger
              trigger={["hover", "focus"]}
              placement="bottom"
              overlay={
                <Popover id="how-to-play-popover">
                  <Popover.Body className="p-2">
                    <p className="text-center text-white bg-dark mx-2 mt-2 p-1 rounded-4 shadow mb-0">
                      Note* If you are in the middle of a game, you will have to
                      start over if you click on me.
                    </p>
                  </Popover.Body>
                </Popover>
              }
            >
              <Button
                variant="light"
                as={Link}
                to="/howToPlay"
                className="ms-2 rounded-pill p-2 px-3 fw-bold"
                style={{ fontSize: "0.85rem" }}
              >
                How to Play
              </Button>
            </OverlayTrigger>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
