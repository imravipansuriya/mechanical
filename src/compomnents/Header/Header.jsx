 
import Container from "react-bootstrap/Container";
import Logo from "../../assets/image/logo.svg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LuPhoneCall } from "react-icons/lu";
import "./Header.css";

function Header() {
  return (
    <>
      <Navbar expand="lg" className="header_wrp">
        <Container>
          <div className="header_info">
            <Navbar.Brand href="#home">
              <div className="logo_wrp">
                <img src={Logo} alt="" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="header_menulist">
              <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.2">
                    Services 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Services 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Services 3
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Pages" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.2">
                    Pricing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Team</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Before & After
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Image Gallery
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#link">Blog</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="contact_details">
              <div className="call_data">
                <LuPhoneCall />
              </div>
              <div className="help_data">
                <p>Need help?</p>
                <h5>
                  <a className="#">855 100 4444</a>
                </h5>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
