import React, { useState } from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import Signup from "./Signup";
import Signin from "./Signin";
import "./SignPG.css";


const Mainform = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [data, setData] = useState({
    email: "",
    Password: "",
    confirmPassword: "",
    // Add more fields as needed
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleButtonClick = (isLogin) => {
    setIsLogin(isLogin);
    // Additional logic if needed
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const postDataSignUp = () => {
    // Implement your sign-up logic here
    console.log("Signing up...", data);
  };

  const postDataSignIn = () => {
    // Implement your sign-in logic here
    console.log("Signing in...", data);
  };

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow-sm" style={{ borderRadius: "10px" }}>
        <Row className="mb-3 text-center">
          <Col>
            <Button
              variant="link"
              className="px-5 LoginBtn"
              style={{
                borderRadius: "4px",
                borderBottom: isLogin
                  ? "5px solid purple"
                  : "5px solid transparent",
                color: "inherit",
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "600",
              }}
              onClick={() => handleButtonClick(true)}
            >
              Sign In
            </Button>
          </Col>
          <Col>
            <Button
              variant="link"
              className="px-5 LoginBtn"
              style={{
                borderRadius: "4px",
                borderBottom: !isLogin
                  ? "5px solid purple"
                  : "5px solid transparent",
                color: "inherit",
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "600",
              }}
              onClick={() => handleButtonClick(false)}
            >
              Sign Up
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            {isLogin ? (
              <Signin
                data={data}
                setData={setData}
                showPassword={showPassword}
                handleClickShowPassword={handleClickShowPassword}
                postDataSignIn={postDataSignIn}
              />
            ) : (
              <Signup
                handleButtonClick={handleButtonClick}
                isLogin={isLogin}
                data={data}
                setData={setData}
                showPassword={showPassword}
                handleClickShowPassword={handleClickShowPassword}
                showConfirmPassword={showConfirmPassword}
                handleClickShowConfirmPassword={handleClickShowConfirmPassword}
                postDataSignUp={postDataSignUp}
              />
            )}
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Mainform;
