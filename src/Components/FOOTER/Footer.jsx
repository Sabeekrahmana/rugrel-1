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

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-section">
          <Col className="footer-column" lg={2}>
            <h3 className="foothead pb-2">About</h3>
            <p>
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
            </p>
          </Col>
          <Col className="footer-column" lg={3}>
            <h3 className="foothead pb-2">Products</h3>
            <ul>
              <li>
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
              </li>
            </ul>
          </Col>
          <Col className="footer-column" lg={2}>
            <h3 className="foothead pb-2">Services</h3>
            <ul>
              <li>
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
              </li>
            </ul>
          </Col>
          <Col className="footer-column" lg={2}>
            <h3 className="foothead pb-2">Industries</h3>
            <ul>
              <li>
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
