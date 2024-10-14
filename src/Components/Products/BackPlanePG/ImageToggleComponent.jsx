// ImageToggleComponent.js
import React, { useState } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import './Ordering.css'
import pcb1 from "../../../Assets/images/AllproductsImages/BackplaneImg/Backplane/forShow/showVpx (1).png";
import pcb2 from "../../../Assets/images/AllproductsImages/BackplaneImg/Backplane/forShow/showVpx (2).png";
import pcb3 from "../../../Assets/images/AllproductsImages/BackplaneImg/Backplane/forShow/showVpx (3).png";
import pcb4 from "../../../Assets/images/AllproductsImages/BackplaneImg/Backplane/forShow/showVpx (4).png";
import pcb5 from "../../../Assets/images/AllproductsImages/BackplaneImg/Backplane/forShow/showVpx (5).png";
import pcb6 from "../../../Assets/images/AllproductsImages/BackplaneImg/Backplane/forShow/showVpx (6).png";
// import "./ImageToggleComponent.css"; // Optional: For custom styles

const ImageToggleComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  // Array of image data
  const pcbData = [
    { imgSrc: pcb1, title: "3U 1-Slot Open VPX Backplane", alt: "PCB Type 1" },
    { imgSrc: pcb2, title: "3U 2-Slot Open VPX Backplane", alt: "PCB Type 2" },
    { imgSrc: pcb3, title: "3U 3-Slot Open VPX Backplane", alt: "PCB Type 3" },
    { imgSrc: pcb4, title: "3U 4-Slot Open VPX Backplane", alt: "PCB Type 4" },
    { imgSrc: pcb5, title: "3U 5-Slot Open VPX Backplane", alt: "PCB Type 5" },
    { imgSrc: pcb6, title: "3U 6-Slot Open VPX Backplane", alt: "PCB Type 6" },
  ];

  return (
    <Container>
      <div className="image-toggle-component">
        {/* Line and Button */}
        <div className="lineBtn my-5 text-center">
          <div className="border-line"></div>
          <Button className="onclickbtn" onClick={handleButtonClick}>
            {isExpanded ? "View Less" : " View More VPX"}
          </Button>
        </div>

        {/* Display images when "Read More" is clicked */}
        {isExpanded && (
          <div className="my-4">
            <Row>
              {pcbData.map((img, idx) => (
                <Col md={4} key={idx} className="text-center my-3">
                  <div className="ImgToggle">
                    <img
                      src={img.imgSrc}
                      alt={img.alt}
                      className="img-fluid mb-2 pcb_image"
                    />
                  </div>
                  <h5>{img.title}</h5> {/* Optional: Display image title */}
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ImageToggleComponent;
