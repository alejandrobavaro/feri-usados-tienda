import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/SesionAuthContext";
import { BsFillPersonPlusFill, BsBoxArrowRight, BsList } from "react-icons/bs";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../assets/scss/_03-Componentes/_Header.scss";

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const { state, dispatch } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const handleToggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="header encabezado">
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <BsList className="menu-icon" onClick={handleToggleMobileMenu} />
          </Navbar.Toggle>

          <Navbar.Collapse
            id="basic-navbar-nav"
            className={`navbar-collapse ${isMobileMenuOpen ? "show" : ""}`}
          >
            <Nav className="ml-auto navbar-nav">
              <Navbar.Brand as={Link} to="/" className="logo-container">
                <img
                  src="../../img/02-logos/logoferiusados-tienda1.png"
                  alt="Logo"
                  className="logoHeader"
                />
              </Navbar.Brand>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/promos"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PROMOS
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/tienda-usados"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                USADOS
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/tienda-nuevos"
                onClick={() => setIsMobileMenuOpen(false)}
              >
               NUEVOS
              </Nav.Link>


              <Nav.Link
                as={Link}
                to="/contacto"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACTO
              </Nav.Link>
            </Nav>

            <Nav.Item className="auth-buttons-container">
              {state.isAuthenticated ? (
                <div className="auth-welcome-container">
                  <div className="auth-welcome">
                    <span>Hola,</span>
                    <span>{state.user.email.split("@")[0]}</span>
                  </div>
                  <Link
                    className="nav-linkHeader auth-link logout-link"
                    to="/logout"
                    onClick={() => {
                      dispatch({ type: "LOGOUT" });
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <BsBoxArrowRight className="auth-icon" />
                  </Link>
                </div>
              ) : (
                <>
                  <Link className="nav-linkHeader auth-link" to="/login">
                    <BsFillPersonPlusFill className="auth-icon" />
                  </Link>
                  <Link
                    className="nav-linkHeader auth-link"
                    to="/register"
                  ></Link>
                </>
              )}
            </Nav.Item>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
