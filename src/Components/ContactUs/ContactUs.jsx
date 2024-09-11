import React, { useState } from "react";
import "./Contact.css";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import formImg from "../../Assets/images/ContactImg/contact-1.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNo: "",
    email: "",
    category: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="fluidcon">
      <h3 className=" fill fw-bolder p-5">PLEASE FILL IN YOUR REQUIREMENTS</h3>

      <Container fluid className="">
        <div className="fromContainer d-flex justify-content-between align-items-center  container">
          <Form onSubmit={handleSubmit} className="handleSubmit ">
            <div className="fname-phon d-flex justify-content-between align-items-center mt-1">
              <Form.Group controlId="formFullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  style={{ height: "58px" }}
                  className="input rounded ps-3 mb-5 w-100"
                />
              </Form.Group>
              <Form.Group controlId="formPhoneNo" className="ms-4">
                <Form.Label>Phone No *</Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  placeholder=" phone No"
                  required
                  style={{ height: "58px" }}
                  className="input rounded ps-3 mb-5 w-100"
                />
              </Form.Group>
            </div>

            <Form.Group controlId="formEmail">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                style={{ height: "58px" }}
                className="input rounded ps-3 mb-5 w-100"
              />
            </Form.Group>

            <Form.Group controlId="formCategory">
              <Form.Label>Category *</Form.Label>

              <Form.Control
                // {<IoChevronDown />}
                as="select"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                style={{ height: "58px" }}
                className="input rounded ps-3 mb-5 w-100"
              >
                <option value="">Select a category</option>
                <option value="feedback">Feedback</option>
                <option value="inquiry">Inquiry</option>
                <option value="support">Support</option>
                <option value="others">Others</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message *</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                required
                className="msginput"
                onResize={0}
              />
            </Form.Group>

            <Button type="submit" className="ContactBtn">
              Submit
            </Button>
          </Form>

          <div className="formImg ms-3">
            <img
              src={formImg}
              alt="form information image"
              className="sideimg  "
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
