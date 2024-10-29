import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import './SignPG.css'

const SignUp = ({
  handleButtonClick,
  isLogin,
  data,
  setData,
  showPassword,
  handleClickShowPassword,
  showConfirmPassword,
  handleClickShowConfirmPassword,
  postDataSignUp,
}) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col md={10} sm={11} xs={12}>
          <h2>Sign Up</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={data.Name}
                onChange={(e) => setData({ ...data, Name: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <div className="input-group">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={data.Password}
                  onChange={(e) => 
                    setData({ ...data, Password: e.target.value })
                  }
                  required
                />
                <Button
                  variant="outline-secondary"
                  onClick={handleClickShowPassword}
                  aria-label="toggle password visibility"
                >
                  {showPassword ? <EyeSlash /> : <Eye />}
                </Button>
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <div className="input-group">
                <Form.Control
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  value={data.confirmPassword}
                  onChange={(e) =>
                    setData({ ...data, confirmPassword: e.target.value })
                  }
                  required
                />
                <Button
                  variant="outline-secondary"
                  onClick={handleClickShowConfirmPassword}
                  aria-label="toggle confirm password visibility"
                >
                  {showConfirmPassword ? <EyeSlash /> : <Eye />}
                </Button>
              </div>
            </Form.Group>

            {/* Terms and Conditions checkbox */}
            <Form.Group controlId="formBasicCheckbox" className="mb-3">
              <Form.Check
                type="checkbox"
                label={
                  <>
                    I agree to the{" "}
                    <NavLink
                      to="#"
                      style={{ textDecoration: "none", fontSize: "12px" }}
                    >
                      Terms of Condition
                    </NavLink>{" "}
                    and{" "}
                    <NavLink
                      to="#"
                      style={{ textDecoration: "none", fontSize: "12px" }}
                    >
                      Privacy Policy
                    </NavLink>
                  </>
                }
                required
              />
            </Form.Group>

            <Button
              variant="warning"
              className="w-100"
              style={{ marginTop: "10px", backgroundColor: "purple",border:"purple",color:"#fff", fontWeight:"550" }}
              onClick={() => postDataSignUp()}
            >
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;








