import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import axios from "axios";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import "./SignPG.css";

const Signin = ({
  data,
  setData,
  showPassword,
  handleClickShowPassword,
  postDataSignIn,
}) => {
  const [apiPostData, setApiPostData] = useState({
    email: "",
    password: "",
  });
  const [responseDta, setResponseDta] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setError(""); // Reset error state
    try {
      let response = await axios.post(
        "http://localhost:1000/login-user",
        apiPostData
      );
      console.log("Fetch the response: ", response.data);
      setResponseDta(response?.data?.response);
    } catch (error) {
      console.log(error);
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Response data: ", responseDta);
  }, [responseDta]);

  const handleEmailChange = (e) => {
    setApiPostData({ ...apiPostData, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setApiPostData({ ...apiPostData, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (apiPostData.email && apiPostData.password) {
      fetchData();
    } else {
      setError("Please fill in all fields.");
    }
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col md={10} sm={11}  xs={12}>
         
          {/* Change column size to 8 for wider input fields */}
          <h2>Sign In</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                onChange={handleEmailChange}
                value={apiPostData.email}
                required
                className="w-100" // Ensure full width
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={apiPostData.password}
                  onChange={handlePasswordChange}
                  required
                />
                <Button
                  variant="outline-secondary"
                  onClick={handleClickShowPassword}
                  aria-label="toggle password visibility"
                >
                  {showPassword ? <EyeSlash /> : <Eye />}
                </Button>
              </InputGroup>
            </Form.Group>
            {error && <p className="text-danger">{error}</p>}{" "}
            {/* Display error message */}
            <Button
              className="w-100"
              style={{
                marginTop: "10px",
                backgroundColor: "purple",
                border: "purple",
                color: "#fff",
                fontWeight: "550",
              }}
              type="submit" // Use submit type for button
              disabled={loading} // Disable button while loading
            >
              {loading ? "Signing In..." : "Sign In"}{" "}
              {/* Change button text while loading */}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
