import Container from "react-bootstrap/Container";
import { useRef, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./Navlink";
import { BsSearch } from "react-icons/bs";
import logo from "../../public/favicon.ico";
import Dropdown from "react-bootstrap/Dropdown";

function CollapsibleExample() {
  const searchDiv = useRef();
  const [openSearch, changeSearch] = useState(false);
  const showSearch = () => {
    changeSearch(!openSearch);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Image src={logo} height={60} width={160} alt="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={NavLink}
                href="/"
                exact
                className="nav-item nav-link"
                onClick={() => {
                  changeSearch(false);
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                href="/about"
                exact
                className="nav-item nav-link"
                onClick={() => {
                  changeSearch(false);
                }}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                href="/project"
                exact
                className="nav-item nav-link"
                onClick={() => {
                  changeSearch(false);
                }}
              >
                Project
              </Nav.Link>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  PROPERTY TYPE
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Nav.Link
                      as={NavLink}
                      href="/project-listing"
                      exact
                      className="nav-item nav-link"
                    >
                      Project Listing
                    </Nav.Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Nav.Link
                      as={NavLink}
                      href="/project-listing"
                      exact
                      className="nav-item nav-link"
                    >
                      Premium Home
                    </Nav.Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Nav.Link
                      as={NavLink}
                      href="/project-listing"
                      exact
                      className="nav-item nav-link"
                    >
                      Smart Home
                    </Nav.Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link
                as={NavLink}
                href="/contact"
                exact
                className="nav-item nav-link"
              >
                Contact
              </Nav.Link>
              <Nav.Link className="nav-item nav-link" onClick={showSearch}>
                <BsSearch />
              </Nav.Link>
              {/* <Link href="/" passHref legacyBehavior>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/project" passHref legacyBehavior>
              <Nav.Link>Projects</Nav.Link>
            </Link>
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>About</Nav.Link>
            </Link>
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Contact</Nav.Link>
            </Link>  */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CollapsibleExample;
