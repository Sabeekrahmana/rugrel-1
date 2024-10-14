import React from "react";
import "./Button.css";
import { Button } from "react-bootstrap";

const RugButton = ({ label, href, icon }) => {
  return (
    <Button
      href={href}
      variant="outline-warning"
      className="fw-bold purple-button ms-5"
    >
      {label}
      {icon && <span className="me-2">{icon}</span>}
    </Button>
  );
};

export default RugButton;
