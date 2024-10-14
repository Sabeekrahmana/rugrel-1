import React, { useEffect, useState } from "react";
import "./Header.css"
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Offcanvas,
  Form,
} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import logoimg from "../../Assets/images/logo/header-logo.png";
import { FaCaretRight, FaCaretDown } from "react-icons/fa6";
import RugButton from "../Button/RugButton";

const HeadNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location; // Get current path

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
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

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
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-md`}
            className="custom-toggle"
          />
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
                  className={`fw-bold navItem ${
                    pathname.includes("/about") ? "activeNav" : ""
                  }`}
                  title={
                    <>
                      About Us <FaCaretDown />
                    </>
                  }
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  show={showDropdown}
                >
                  <NavDropdown.Item  className={pathname === "/whyfaq" ? "activeNav" : ""} 
                  onClick={(e) => handleDropdownNavigate("/whyfaq", e)}
                >
                    Why Rug-Rel?
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                  className={pathname === "/companyoverview" ? "activeNav" : ""}
                  onClick={(e) => handleDropdownNavigate("/companyoverview", e)}
                   >
                    Company Overview
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                 className={pathname === "/news-events" ? "activeNav" : ""}
                 onClick={(e) => handleDropdownNavigate("/news-events", e)}
                 >
                    News & Events
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                  className={pathname === "/management" ? "activeNav" : ""}
                  onClick={(e) => handleDropdownNavigate("/management", e)}
                     >
                    Management Team
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                   className={pathname === "/engineering" ? "activeNav" : ""}
                   onClick={(e) => handleDropdownNavigate("/engineering", e)}
                   >
                    Engineering Excellence
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                   className={pathname === "/manufacturing" ? "activeNav" : ""}
                   onClick={(e) => handleDropdownNavigate("/manufacturing", e)}
                   >
                    Manufacturing Process
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                   className={pathname === "/qualitystd" ? "activeNav" : ""}
                   onClick={(e) => handleDropdownNavigate("/qualitystd", e)}
                   >
                    Quality Standards
                  </NavDropdown.Item>
                </NavDropdown>

                {/* ---------------------Products------------- */}

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
                    onClick={(e) =>
                      handleDropdownNavigate("/power-supply-unit", e)
                    }
                    onMouseOver={handleSubMenuMouseOver}
                    onMouseOut={handleSubMenuMouseOut}
                    show={showSubMenu}
                  >
                    <NavDropdown.Item 
                     className={
                      pathname === "/power-supply-unit/standard" ? "activeNav" : ""
                    }
                      onClick={(e) =>
                        handleDropdownNavigate("/power-supply-unit", e)
                      }
                    >
                      Standard
                    </NavDropdown.Item>
                    <NavDropdown.Item
                     className={pathname === "/customPSU" ? "activeNav" : ""}
                      onClick={(e) => handleDropdownNavigate("/customPSU", e)}
                    >
                      Customised
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown.Item
                   className={pathname === "/backplane" ? "activeNav" : ""}
                    onClick={(e) => handleDropdownNavigate("/backplane", e)}
                  >
                    BackPlane
                  </NavDropdown.Item>
                  <NavDropdown
                    title={
                      <>
                        Rugged Display Solutions <FaCaretRight />
                      </>
                    }
                    drop="end"
                    className="submenu"
                    
                    onClick={(e) =>
                      handleDropdownNavigate("/rug-display-solutions", e)
                    }
                    onMouseOver={handleSubMenuMouseOver}
                    onMouseOut={handleSubMenuMouseOut}
                    show={showSubMenu}
                  >
                    <NavDropdown.Item
                      onClick={(e) =>
                        handleDropdownNavigate("/rug-display-solutions", e)
                      }
                    >
                      Rugged Monitor
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={(e) => handleDropdownNavigate("/panel-pc", e)}
                    >
                      Panel PC
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown.Item
                    onClick={(e) =>
                      handleDropdownNavigate("/radar-computer", e)
                    }
                  >
                    Radar Computer & ATR
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={(e) =>
                      handleDropdownNavigate("/dual-monitor-console", e)
                    }
                  >
                    Dual Monitor Console
                  </NavDropdown.Item>
                  <NavDropdown
                    title={
                      <>
                        Servers & Workstations <FaCaretRight />
                      </>
                    }
                    drop="end"
                    className="submenu"
                    onClick={(e) =>
                      handleDropdownNavigate("/servers-workstations", e)
                    }
                    onMouseOver={handleSubMenuMouseOver}
                    onMouseOut={handleSubMenuMouseOut}
                    show={showSubMenu}
                  >
                    <NavDropdown.Item
                      onClick={(e) =>
                        handleDropdownNavigate("/servers-workstations", e)
                      }
                    >
                      Servers
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={(e) =>
                        handleDropdownNavigate("/work-station", e)
                      }
                    >
                      Workstations
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title={
                      <>
                        Rugged PC <FaCaretRight />
                      </>
                    }
                    drop="end"
                    className="submenu"
                    onClick={(e) => handleDropdownNavigate("/rug-pc", e)}
                    onMouseOver={handleSubMenuMouseOver}
                    onMouseOut={handleSubMenuMouseOut}
                    show={showSubMenu}
                  >
                    <NavDropdown.Item
                      onClick={(e) => handleDropdownNavigate("/laptop", e)}
                    >
                      Rugged Laptop
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={(e) => handleDropdownNavigate("/tablet", e)}
                    >
                      Rugged Tablet
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={(e) => handleDropdownNavigate("/box", e)}
                    >
                      Box PC
                    </NavDropdown.Item>
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
                    onClick={(e) =>
                      handleDropdownNavigate("/designservices", e)
                    }
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
                      onClick={(e) =>
                        handleDropdownNavigate("/designservices/mechanical", e)
                      }
                      onMouseOver={handleSubMenuMouseOver}
                      onMouseOut={handleSubMenuMouseOut}
                      show={showSubMenu}
                    >
                      <NavDropdown.Item
                        onClick={() =>
                          handleLinkClick("/designservices/mechanical/modeling", "modeling")
                        }
                      >
                        Modeling
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() =>
                          handleLinkClick("/designservices/mechanical", "thermal-analysis")
                        }
                      >
                        Thermal Analysis
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() =>
                          handleLinkClick(
                            "/designservices",
                            "structural-analysis"
                          )
                        }
                      >
                        Structural Analysis
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown.Item
                      onClick={() => handleLinkClick("/designservices", "fpga")}
                    >
                      FPGA
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => handleLinkClick("/designservices", "pcb")}
                    >
                      PCB
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown.Item
                    onClick={(e) =>
                      handleDropdownNavigate("/manufacuring-services", e)
                    }
                  >
                    Manufacturing
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={(e) => handleDropdownNavigate("/pcb-assembly", e)}
                  >
                    PCB Assembly
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={(e) =>
                      handleDropdownNavigate("/cable-assembly", e)
                    }
                  >
                    Cable Assembly & Wire Harness
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={(e) =>
                      handleDropdownNavigate("/system-integration", e)
                    }
                  >
                    System Integration
                  </NavDropdown.Item>
                </NavDropdown>

                {/* -----------------Contact Us---------------------- */}
                <Nav.Link className="fw-bold navItem" href="/contactus">
                  Contact US
                </Nav.Link>
              </Nav>

              <Form className="d-flex mt-3  mt-lg-0">
                <RugButton label="REQUEST A QUOTE" href="#large" size="large" />
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default HeadNavBar;
