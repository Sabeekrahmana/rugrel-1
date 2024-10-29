// import React from "react";
// import { Container } from "react-bootstrap";

// const ProductFeature = ({ features }) => {
//   return (
//     <Container>
//       <div className="disFeatures  d-flex  justify-content-between  align-items-start flex-wrap  w-100 h-100  ">
//         <div>
//           <h4 className="w-100 mb-3 fw-bolder ">Features</h4>
//           <ul>
//             {features.map((feature, index) => (
//               <li key={index}>{feature}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="featureBut">
//           <button className="rugbtn ">Download</button>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default ProductFeature;








// import React from "react";
// import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Signup from "../../LoginPages/Signup";
import Signin from "../../LoginPages/Signin";
import "../../LoginPages/SignPG.css";



const ProductFeature = ({ features }) => {
  const [lgShow, setLgShow] = useState(false);

  // ----main form deatils
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
    <Container>
      <div className="disFeatures  d-flex  justify-content-between  align-items-start flex-wrap  w-100 h-100  ">
        <div>
          <h4 className="w-100 mb-3 fw-bolder ">Features</h4>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        {/* featureBut */}
        <div className="">
          {/* <button className="rugbtn ">Download</button> */}

          <Button className="rugbtn " onClick={() => setLgShow(true)}>
            Downlode
          </Button>

          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
            <Modal.Body>
              <div className="">
                <div className="p-4 " style={{ borderRadius: "10px" }}>
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
                          handleClickShowConfirmPassword={
                            handleClickShowConfirmPassword
                          }
                          postDataSignUp={postDataSignUp}
                        />
                      )}
                    </Col>
                  </Row>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </Container>
  );
};

export default ProductFeature;















