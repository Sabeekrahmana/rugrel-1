import React from "react";
import "./Contact.css";
import { Container } from "react-bootstrap";

const ContactMap = () => {
  return (
    <>
      <Container>
        <iframe
          className="mapFrame mt-5  rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.988676487883!2d77.50991447412034!3d12.972575914858766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3c2d9890b203%3A0x58601c9f6165cb38!2sRug-Rel%20Components%20%26%20Systems%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1721888953690!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: 0, height: "400px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map showing the location of Rug-Rel Components & Systems Pvt Ltd"
        />
      </Container>
    </>
  );
};

export default ContactMap;
