import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Olcay Tapan </span>
            from <span className="purple"> Gothenburg, Sweden.</span>
            <br />
            I am currently employed as a software developer at Acumant for jobbsprånget program.
            <br />
            I studied English at Anadolu University for 1 year and after that completed the Civil Engineering bachelor's degree in 100% English.<br />
            I completed the Ahmet Yesevi University Computer Engineering bachelor's degree in 2023.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Walking in the Nature
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Board Games with Friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Destiny is in love with effort…"{" "}
          </p>
          <footer className="blockquote-footer">Yunus Emre</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
