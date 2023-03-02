import Container from "react-bootstrap/Container";
import { useRef, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./Navlink";
import { BsSearch } from "react-icons/bs";

import Dropdown from "react-bootstrap/Dropdown";

//img
import logo from "../../public/logo.png";

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
            <Nav className="mx-auto">
              <Dropdown>
                <Dropdown.Toggle
                  className="btn
                "
                  id="dropdown-basic"
                >
                  REPORTS
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
              <Dropdown>
                <Dropdown.Toggle
                  className="btn
                "
                  id="dropdown-basic"
                >
                  Premium Reports
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
                Datacenter Database
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                href="/contact"
                exact
                className="nav-item nav-link"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                href="/contact"
                exact
                className="nav-item nav-link"
              >
                CART
              </Nav.Link>
              <Nav.Link className="nav-item nav-link px-5" onClick={showSearch}>
                <BsSearch />
              </Nav.Link>
            </Nav>
            <div className="ps-4  ">
              <button className="btn-primary">Log in</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CollapsibleExample;
