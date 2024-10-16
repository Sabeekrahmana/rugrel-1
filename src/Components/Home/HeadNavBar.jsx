import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button, Offcanvas, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import logoimg from "../../Assets/images/logo/header-logo.png";
import { FaCaretRight, FaCaretDown } from "react-icons/fa6";

const HeadNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showDropdown, setShowDropdown] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleClick = () => {
    navigate("/");
  };

  const handleDropdownNavigate = (path, event) => {
    event.stopPropagation();
    navigate(path);
  };

  const handleMouseOver = () => setShowDropdown(true);
  const handleMouseOut = () => setShowDropdown(false);
  const handleSubMenuMouseOver = () => setShowSubMenu(true);
  const handleSubMenuMouseOut = () => setShowSubMenu(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);



  const handleLinkClick = (path, sectionId) => {
    navigate(path);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 0);
  };

  return (
    <>
      <Navbar expand="md" className="navBg">
        <Container>
          <img
            src={logoimg}
            className="imglogo"
            alt=""
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          />
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} className="custom-toggle" />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center gap-4 flex-grow-1 navItems">
                {/* About Us */}
                <NavDropdown
                  className="fw-bold navItem"
                  title={
                    <>
                      About Us <FaCaretDown />
                    </>
                  }
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  show={showDropdown}
                >
                  <NavDropdown.Item href="whyfaq">Why Rug-Rel?</NavDropdown.Item>
                  <NavDropdown.Item href="companyoverview">Company Overview</NavDropdown.Item>
                  <NavDropdown.Item href="/news-events">News & Events</NavDropdown.Item>
                  <NavDropdown.Item href="management">Management Team</NavDropdown.Item>
                  <NavDropdown.Item href="engineering">Engineering Excellence</NavDropdown.Item>
                  <NavDropdown.Item href="manufacturing">Manufacturing Process</NavDropdown.Item>
                  <NavDropdown.Item href="qualitystd">Quality Standards</NavDropdown.Item>
                </NavDropdown>

                {/* Products */}
                <NavDropdown
                  className="fw-bold navItem"
                  title={
                    <>
                      Products <FaCaretDown />
                    </>
                  }
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  show={showDropdown}
                >
                  <NavDropdown
                    title={
                      <>
                        Power Supply Unit <FaCaretRight />
                      </>
                    }
                    drop="end"
                    className="submenu"
                    onClick={(e) => handleDropdownNavigate('/powersupply', e)}
                    onMouseOver={handleSubMenuMouseOver}
                    onMouseOut={handleSubMenuMouseOut}
                    show={showSubMenu}
                  >
                    <NavDropdown.Item href="powersupply">Standard</NavDropdown.Item>
                    <NavDropdown.Item href="#action4-subitem2">Customised</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown.Item href="#action4">BackPlane</NavDropdown.Item>
                  <NavDropdown
                    title={
                      <>
                        Rugged Display Solutions <FaCaretRight />
                      </>
                    }
                    drop="end"
                    className="submenu"
                    onMouseOver={handleSubMenuMouseOver}
                    onMouseOut={handleSubMenuMouseOut}
                    show={showSubMenu}
                  >
                    <NavDropdown.Item href="#action4-subitem1">Rugged Monitor</NavDropdown.Item>
                    <NavDropdown.Item href="#action4-subitem2">Panel PC</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown.Item href="#action4">Radar Computer & ATR</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Dual Monitor Console</NavDropdown.Item>
                  <NavDropdown
                    title={
                      <>
                        Servers & Workstations <FaCaretRight />
                      </>
                    }
                    drop="end"
                    className="submenu"
                     onMouseOver={handleSubMenuMouseOver}
                    onMouseOut={handleSubMenuMouseOut}
                    show={showSubMenu}
                  >
                    <NavDropdown.Item href="#action4-subitem1">Servers</NavDropdown.Item>
                    <NavDropdown.Item href="#action4-subitem2">Workstations</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title={
                      <>
                        Rugged PC <FaCaretRight />
                      </>
                    }
                    drop="end"
                    className="submenu"
                     onMouseOver={handleSubMenuMouseOver}
                    onMouseOut={handleSubMenuMouseOut}
                    show={showSubMenu}
                  >
                    <NavDropdown.Item href="#action4-subitem1">Rugged Laptop</NavDropdown.Item>
                    <NavDropdown.Item href="#action4-subitem2">Rugged Tablet</NavDropdown.Item>
                    <NavDropdown.Item href="#action4-subitem2">Box PC</NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>

                {/* -----------------Services-------------------- */}
                <NavDropdown
                  className="fw-bold navItem"
                  title={
                    <>
                      Services <FaCaretDown />
                    </>
                  }
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  show={showDropdown}
                >
                  <NavDropdown
                    title={
                      <>
                        Design Services <FaCaretRight className="rightArr" />
                      </>
                    }
                    drop="end"
                    className="submenu"
                    onClick={(e) => handleDropdownNavigate('/designservices', e)}
                    onMouseOver={handleSubMenuMouseOver}
                    onMouseOut={handleSubMenuMouseOut}
                    show={showSubMenu}
                  >
                    <NavDropdown
                      title={
                        <>
                          Mechanical <FaCaretRight className="rightArr" />
                        </>
                      }
                      drop="end"
                      className="submenu"
                      onClick={(e) => handleDropdownNavigate('/designservices/mechanical', e)}
                      onMouseOver={handleSubMenuMouseOver}
                      onMouseOut={handleSubMenuMouseOut}
                      show={showSubMenu}
                    >
                      <NavDropdown.Item href="/designservices/modeling">Modeling</NavDropdown.Item>
                      <NavDropdown.Item href="/designservices/thermal-analysis">Thermal Analysis</NavDropdown.Item>
                      <NavDropdown.Item href="/designservices/structural-analysis">Structural Analysis</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown.Item onClick={() => handleLinkClick('/designservices', 'fpga')}>FPGA</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => handleLinkClick('/designservices', 'pcb')}>PCB</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown.Item onClick={(e) => handleDropdownNavigate('/manufacuring-services', e)}>Manufacturing</NavDropdown.Item>
                  <NavDropdown.Item onClick={(e) => handleDropdownNavigate('/pcb-assembly', e)}>PCB Assembly</NavDropdown.Item>
                  <NavDropdown.Item onClick={(e) => handleDropdownNavigate('/cable-assembly', e)}>Cable Assembly & Wire Harness</NavDropdown.Item>
                  <NavDropdown.Item onClick={(e) => handleDropdownNavigate('/system-integration', e)}>System Integration</NavDropdown.Item>
                </NavDropdown>

                {/* Contact Us */}
                <Nav.Link className="fw-bold navItem" href="/contactus">
                  Contact Us
                </Nav.Link>
              </Nav>

              <Form className="d-flex mt-3 mt-lg-0">
                <Button className="fw-bold purple-button ms-5">REQUEST A QUOTE</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default HeadNavBar;
