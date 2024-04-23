import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <ul>
          <li className="about-activity">Hi Everyone, I am <span className="purple">Olcay Tapan</span> from <span className="purple">Gothenburg, Sweden</span>.</li>
          <br />
          <li className="about-activity"><ImPointRight /> I have recently completed the Acumant internship program and am now attending the Lexicon System Developer Education program.</li><br />
          <li className="about-activity"><ImPointRight /> Previously, I studied English at Anadolu University for 1 year and completed my Civil Engineering bachelor's degree entirely in English.</li><br />
          <li className="about-activity"><ImPointRight /> I also completed the Ahmet Yesevi University Computer Engineering bachelor's degree in 2023.</li><br />
          <li className="about-activity"> Apart from coding, there are many other activities that I love to do!</li>
        </ul>
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
