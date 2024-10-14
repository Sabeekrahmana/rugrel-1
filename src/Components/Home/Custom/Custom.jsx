import React from "react";
import "./Custom.css";
import Container from "react-bootstrap/Container";
import conImg from "../../../Assets/images/CustomImg/customImg.png";


const Custom = () => {
  return (
    <>
      <Container
        fluid
        className="CusContainer px-5  d-flex justify-content-between .align-items-center  py-5 "
      >
        <div className="frrstcon">
          <h2 className="py-2 fw-bold">CUSTOM SOLUTIONS</h2>
          <p className="fs-6">
          At Rug-Rel Components & Systems Pvt. Ltd., we understand that every project has unique requirements and challenges. We specialize in delivering tailored, innovative  and high-quality solutions that meet the specific needs of our clients in the defence and aerospace sectors. Leveraging our deep industry expertise and innovative approach, we collaborate closely with clients from the initial consultation through to design, prototyping, and full-scale implementation, ensuring that every solution is optimized for performance, reliability, and efficiency.
          </p>
          <div className="classbtn pt-4 mt-5 ">
            <span>We’re ready to collaborate whenever you are. </span>
            <button className="btn-con" href="#">
              Let's Talk!
            </button>
          </div>
        </div>
        {/* second */}
        <div className="conimg ps-4 ">
          <img src={conImg} alt="productimg" className="imgcon w-200px" />
        </div>
      </Container>
    </>
  );
};

export default Custom;
