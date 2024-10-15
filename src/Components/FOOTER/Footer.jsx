import React from "react";
import { Container, Row, Col, Button, NavLink } from "react-bootstrap";
import { MdOutlineCopyright } from "react-icons/md";

import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";
import "./Footer.css";
import footlogo from "../../Assets/images/logo/header-logo.png";
<<<<<<< HEAD

const Footer = () => {
=======
import { useLocation } from "react-router-dom";

const Footer = () => {

  const location = useLocation(); 
  const isActive = (path) => location.pathname === path;

>>>>>>> 9738d943e1003ccf8306c89c4343effbed362385
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-section">
          <Col className="footer-column" lg={2}>
            <h3 className="foothead pb-2">About</h3>
            <p>
<<<<<<< HEAD
              <NavLink href="/">Why Rug-Rel</NavLink>
            </p>
            <p>
              <NavLink href="/">Company Overview</NavLink>
            </p>
            <p>
              <NavLink href="/">News & Events</NavLink>
            </p>
            <p>
              <NavLink href="/">Management Team</NavLink>
            </p>
            <p>
              <NavLink href="/">Engineering Excellence</NavLink>
            </p>
            <p>
              <NavLink href="/">Manufacturing Process</NavLink>
            </p>
            <p>
              <NavLink href="/">Quality Standards</NavLink>
=======
              <NavLink href="/whyfaq"  className={isActive("/whyfaq") ? "active" : ""}>Why Rug-Rel</NavLink>
            </p>
            <p>
              <NavLink href="/companyoverview"  className={isActive("/companyoverview") ? "active" : ""}>Company Overview</NavLink>
            </p>
            <p>
              <NavLink href="/news-events"  className={isActive("/news-events") ? "active" : ""}>News & Events</NavLink>
            </p>
            <p>
              <NavLink href="/management"  className={isActive("/management") ? "active" : ""}>Management Team</NavLink>
            </p>
            <p>
              <NavLink href="/engineering"  className={isActive("/engineering") ? "active" : ""}>Engineering Excellence</NavLink>
            </p>
            <p>
              <NavLink href="/manufacturing"  className={isActive("/manufacturing") ? "active" : ""}>Manufacturing Process</NavLink>
            </p>
            <p>
              <NavLink href="/qualitystd"  className={isActive("/qualitystd") ? "active" : ""}>Quality Standards</NavLink>
>>>>>>> 9738d943e1003ccf8306c89c4343effbed362385
            </p>
          </Col>
          <Col className="footer-column" lg={3}>
            <h3 className="foothead pb-2">Products</h3>
            <ul>
              <li>
<<<<<<< HEAD
                <NavLink href="/">Power supply Unit</NavLink>
              </li>
              <li>
                <NavLink href="/">Backplane</NavLink>
              </li>
              <li>
                <NavLink href="/">Radar Computer and ATR</NavLink>
              </li>
              <li>
                <NavLink href="/">Rugged Monitors and Panel Pc</NavLink>
              </li>
              <li>
                <NavLink href="/">Dual Monitor Console</NavLink>
              </li>
              <li>
                <NavLink href="/">Servers and Workstation</NavLink>
              </li>
              <li>
                <NavLink href="/">Rugged PC's</NavLink>
=======
                <NavLink href="/power-supply-unit" className={isActive("/power-supply-unit") ? "active" : ""}>Power supply Unit</NavLink>
              </li>
              <li>
                <NavLink href="/backplane" className={isActive("/backplane") ? "active" : ""}>Backplane</NavLink>
              </li>
              <li>
                <NavLink href="/radar-computer" className={isActive("/radar-computer") ? "active" : ""}>Radar Computer and ATR</NavLink>
              </li>
              <li>
                <NavLink href="/rug-display-solutions" className={isActive("/rug-display-solutions") ? "active" : ""}>Rugged Monitors and Panel Pc</NavLink>
              </li>
              <li>
                <NavLink href="/dual-monitor-console" className={isActive("/dual-monitor-console") ? "active" : ""}>Dual Monitor Console</NavLink>
              </li>
              <li>
                <NavLink href="/servers-workstations" className={isActive("/servers-workstations") ? "active" : ""}>Servers and Workstation</NavLink>
              </li>
              <li>
                <NavLink href="/rug-pc" className={isActive("/rug-pc") ? "active" : ""}>Rugged PC's</NavLink>
>>>>>>> 9738d943e1003ccf8306c89c4343effbed362385
              </li>
            </ul>
          </Col>
          <Col className="footer-column" lg={2}>
            <h3 className="foothead pb-2">Services</h3>
            <ul>
              <li>
<<<<<<< HEAD
                <NavLink href="/">Design Service</NavLink>
              </li>
              <li>
                <NavLink href="/">Manufacturing</NavLink>
              </li>
              <li>
                <NavLink href="/">PCB Assembly</NavLink>
              </li>
              <li>
                <NavLink href="/">Cable Assembly and Wire Harness</NavLink>
              </li>
              <li>
                <NavLink href="/">System Integration</NavLink>
=======
                <NavLink href="/designservices" className={isActive("/designservices") ? "active" : ""}>Design Service</NavLink>
              </li>
              <li>
                <NavLink href="/manufacuring-services" className={isActive("/manufacuring-services") ? "active" : ""}>Manufacturing</NavLink>
              </li>
              <li>
                <NavLink href="/pcb-assembly" className={isActive("/pcb-assembly") ? "active" : ""}>PCB Assembly</NavLink>
              </li>
              <li>
                <NavLink href="/cable-assembly" className={isActive("/cable-assembly") ? "active" : ""}>Cable Assembly and Wire Harness</NavLink>
              </li>
              <li>
                <NavLink href="/system-integration" className={isActive("/system-integration") ? "active" : ""}>System Integration</NavLink>
>>>>>>> 9738d943e1003ccf8306c89c4343effbed362385
              </li>
            </ul>
          </Col>
          <Col className="footer-column" lg={2}>
            <h3 className="foothead pb-2">Industries</h3>
            <ul>
              <li>
<<<<<<< HEAD
                <NavLink href="/">Defence</NavLink>
              </li>
              <li>
                <NavLink href="/">Aerospace</NavLink>
              </li>
              <li>
                <NavLink href="/">Railways</NavLink>
              </li>
              <li>
                <NavLink href="/">Industries</NavLink>
=======
                <NavLink href="/" className={isActive("/") ? "active" : ""}>Defence</NavLink>
              </li>
              <li>
                <NavLink href="/" className={isActive("/") ? "active" : ""}>Aerospace</NavLink>
              </li>
              <li>
                <NavLink href="/" className={isActive("/") ? "active" : ""}>Railways</NavLink>
              </li>
              <li>
                <NavLink href="/" className={isActive("/") ? "active" : ""}>Industries</NavLink>
>>>>>>> 9738d943e1003ccf8306c89c4343effbed362385
              </li>
            </ul>
          </Col>
          <Col className="footer-column   " lg={3}>
            <h3 className="foothead pb-2">Contact Us</h3>
            <ul>
              <li>
                <NavLink href="/">
                  Rug-Rel Components & Systems Pvt.Ltd.
                </NavLink>
              </li>
              <li>
                <NavLink href="/">
                  No.307.7th Block Nagarbhavi 2nd Stage Bangalore-560072
                </NavLink>
              </li>
              <li>
                <NavLink href="/">Phone:+91-7369070074</NavLink>
              </li>
              <li>
                <NavLink href="/">Email:sales@reldefence.com</NavLink>
              </li>
              <Button className="CardBtn mt-3" href="/">
                Request Quote
              </Button>
            </ul>
          </Col>
        </Row>
      </Container>
      <hr />

      <div className="CopyRightFooter  d-flex align-items-center  justify-content-between  gap-3">
        <div className="ImgIconText  d-flex align-items-center  justify-content-between">
          <NavLink href="/">
            <img src={footlogo} alt="footlogo" className="footlogo" />
          </NavLink>
          <div className="iconfoot">
            <span className="">
              <MdOutlineCopyright className="fs-4" />
              <span>
                2024 Rug-Rel Components & System. All rights reserved.
              </span>
              <span>
                <a href="/" className="Privacy">
                  Privacy
                </a>
              </span>
            </span>
          </div>
        </div>

        <div className="SocailIcons d-flex align-items-center  mx-auto justify-content-between gap-4">
          <div className="conticon">
            <NavLink href="" className="linkedin">
              <BsLinkedin className="bsicon" />
            </NavLink>
            <NavLink href="" className="insta">
              <BsInstagram className="bsicon" />
            </NavLink>
            <NavLink href="" className="facebook">
              <BsFacebook className="bsicon" />
            </NavLink>
            <NavLink href="" className="twitter">
              <BsTwitterX className="bsicon" />
            </NavLink>
          </div>
          <span className="textcertified">
            AS9100:2016 & ISO 9001:2015 Certified
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
