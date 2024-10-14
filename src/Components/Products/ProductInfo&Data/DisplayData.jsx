import React from "react";
import "./ProInfo&Data.css";
import { Container } from "react-bootstrap";

const DisplayData = ( {PDD1,PDD2,PDD3,PTD1,PTD2,PTD3}) => {
  return (
    <>
      <Container className="displaydata">
        <div className="DS_Data-one">
          {/* ------pdd>>>>PRODUCT DISPLAY DATA*/}
          <p> {PDD1}</p>
          <p> {PDD2} </p>
          <p> {PDD3}</p>
        </div>
        <div className="DS_Data-two">
          {/* ------ptd>>>>PRODUCT TEXT DATA*/}
          <p>{PTD1}</p>
          <p> {PTD2}</p>
          <p> {PTD3}</p>
        </div>
      </Container>
    </>
  );
};

export default DisplayData;
