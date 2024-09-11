import React from "react";
import { Container } from "react-bootstrap";

const ProductFeature = ({ features }) => {
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
        <div className="featureBut">
          <button className="rugbtn ">Download</button>
        </div>
      </div>
    </Container>
  );
};

export default ProductFeature;
