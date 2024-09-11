import React from "react";
import "./Contact.css";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { ImArrowUpRight2 } from "react-icons/im";
import phone from "../../Assets/images/ContactImg/icons/phone.png";
import land from "../../Assets/images/ContactImg/icons/landline.png";
import mail from "../../Assets/images/ContactImg/icons/mail.png";

const ContactDetail = () => {
  return (
    <div className="">
      <h3 className="text-center py-3 fw-bold my-3">CONTACT US</h3>
      {/* postion-relative */}
      <Container fluid className="MainDetail  ">
        <div className="newbg container">
          <Row className="d-flex justify-content-around  pt-5 ">
            <Col lg={4} md={12} sm={12}>
              <div className="contact-links">
                <p className="pp fs-4 fw-bolder text-white">QUICK LINKS</p>
                <div className="navlinks">
                  <NavLink className="a-nav" to="/">
                    POWER SUPPLY UNIT <ImArrowUpRight2 className="iconNav" />
                  </NavLink>
                </div>
                <div className="navlinks">
                  <NavLink className="a-nav" to="/">
                    RADAR COMPUTER <ImArrowUpRight2 className="iconNav" />
                  </NavLink>
                </div>
                <div className="navlinks">
                  <NavLink className="a-nav" to="/">
                    RUGGED MONITOR AND DISPLAY{" "}
                    <ImArrowUpRight2 className="iconNav" />
                  </NavLink>
                </div>
                <div className="navlinks">
                  <NavLink className="a-nav" to="/">
                    BACKPLANE
                    <ImArrowUpRight2 className="iconNav" />
                  </NavLink>
                </div>
              </div>
            </Col>
            {/* navlink over */}
            <Col lg={4} md={6} sm={12} className="my-4">
              <div className="business-queries">
                <p className="pb-3 text-center">
                  <strong>BUSINESS QUERIES</strong>
                </p>
                <div className="contact-person">
                  <p className="color">Bangalore:</p>
                  <p className="color2">+91 7369070074</p>
                </div>
                <div className="contact-person">
                  <p className="color">North India:</p>
                  <p className="color2">+91 9739948611</p>
                </div>
                <div className="contact-person">
                  <p className="color">International:</p>
                  <p className="color2">+91 9487257906</p>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6} sm={12} className="infodiv my-4">
              <div className="contact-info">
                <p className="pb-3 text-center">
              
                  <strong>CONTACT</strong>
                </p>
                <div className="contact-item">
                  <img src={phone} alt="phone icon" className="iconss" />
                  <p className="color2 mb-0">+91 7369070074</p>
                </div>
                <div className="contact-item">
                  <img src={land} alt="icon" className="iconss" />
                  <p className="color2 mb-0">+91 9487257906</p>
                </div>
                <div className="contact-item">
                  <img src={mail} alt="icon" className="iconss" />
                  <p className="color2 mb-0">faiz.rahman@rugrel.com</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ContactDetail;
