import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import final from "../../Assets/Projects/final.png";
import todo from "../../Assets/Projects/todo.png";
import quiz from "../../Assets/Projects/quiz.png";
import movie from "../../Assets/Projects/movie.png";
import project from "../../Assets/Projects/project-happy-thoughts-vite-technigo-week6.png";
import Survey from "../../Assets/Projects/Project-Survey-Vite-Technigo-Week5.png";
import Music from "../../Assets/Projects/PairProject-Music-Releases-Technigo-Week4.png";
import weather from "../../Assets/Projects/weather.png";
import ASPNet from "../../Assets/Projects/ASPNet-crud.jpg";
import Apartment from "../../Assets/Projects/Apartment-Management-System.png";
import Recipe from "../../Assets/Projects/Recipe-Book.png";
import Flask from "../../Assets/Projects/python-flask.png";
import Book from "../../Assets/Projects/python-book.png";
import Zoo from "../../Assets/Projects/python-zoo.png";
import Django from "../../Assets/Projects/django-book.png";
import Platform from "../../Assets/Projects/olp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Platform}
              isBlog={false}
              title="Django-SQlite-Online-Learning-Platform"
              description="The objective of this project is to develop an innovative online learning platform that offers a wide range of courses across different domains, catering to the diverse learning needs of users. Inspired by popular platforms like Udemy and Pluralsight, the platform provides users with access to comprehensive course content."
              ghLink="https://github.com/Olcaytp/OnlineLearningPlatform/tree/main"
              demoLink="https://github.com/Olcaytp/OnlineLearningPlatform/blob/main/assets/homepage.png"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Django}
              isBlog={false}
              title="Django-SQlite-BookStore-Management-Project"
              description="Welcome to the BookStore project! This project is a web application built with Django, designed to provide a comprehensive platform for managing a bookstore. Users can browse, review, and purchase books, as well as manage their shopping carts."
              ghLink="https://github.com/Olcaytp/Django-Bookstore-Project/tree/main"
              demoLink="https://github.com/Olcaytp/Django-Bookstore-Project/blob/main/assets/home-2.png"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Flask}
              isBlog={false}
              title="Python-Flask-Web-App"
              description="This project is a Flask web application that incorporates various features such as routing, form handling, file upload functionality, API endpoints, and styling using Bootstrap."
              ghLink="https://github.com/Olcaytp/Flask-Python-Web-App/tree/main"
              demoLink="https://github.com/Olcaytp/Flask-Python-Web-App/blob/main/assets/2.png"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Book}
              isBlog={false}
              title="Python-MongoDB-Bookstore Application"
              description="Welcome to the Console-Based Bookstore Application! This application allows users to manage a collection of books through a simple command-line interface."
              ghLink="https://github.com/Olcaytp/Python-MongoDB"
              demoLink="https://github.com/Olcaytp/Python-MongoDB/blob/main/assets/3.png"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Zoo}
              isBlog={false}
              title="Python-Zoo Simulation Project"
              description="This project is a simulation of a zoo environment where various animals interact with each other and with visitors. The goal of the project is to create a dynamic environment where animals can eat, sleep, and interact with each other and the park's visitors."
              ghLink="https://github.com/Olcaytp/Python-zooProject"
              demoLink="https://github.com/Olcaytp/Python-zooProject/blob/main/assets/1.png/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={final}
              isBlog={false}
              title="Expence Tracker React App"
              description="Users can easily log their expenses, categorize transactions, and gain valuable insights into their spending patterns, making ExpensifyTracker an essential tool for personal financial management."
              ghLink="https://github.com/Olcaytp/technigo-final-project"
              demoLink="https://technigo-final-week-project.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo App"
              description="With the power of React components and state management, users can efficiently create, update, and mark tasks as completed, making it an essential tool for anyone seeking an efficient and user-friendly task management solution."
              ghLink="https://github.com/Olcaytp/technigo-week9-project-todos-redux"
              demoLink="https://technigo-project-redux.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz App"
              description="QuizzyReact is an engaging and interactive web application developed using React, aimed at providing users with an enjoyable quiz-taking experience. This app is designed to be both user-friendly and visually appealing, offering a wide range of quizzes on diverse topics."
              ghLink="https://github.com/Olcaytp/Technigo-week8-project-redux-quiz"
              demoLink="https://technigo-react-redux-quizz-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie App"
              description="The Movie Explorer App is a web application built using React, designed to provide users with an immersive and user-friendly platform for discovering and exploring a vast collection of movies. The app leverages the power of React components, state management, and external APIs to deliver a seamless and dynamic user experience."
              ghLink="https://github.com/Olcaytp/technigo-week7-project-movies-vite"
              demoLink="https://olcay-movie-site.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Happy Thoughts"
              description="Happy Thoughts is a Twitter-like social media app that allows users to post and like messages. The app was built using React and the API was built using Express and MongoDB."
              ghLink="https://github.com/Olcaytp/project-happy-thoughts-vite-technigo-week6"
              demoLink="https://happy-thoughts-olcay-preeti.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Survey}
              isBlog={false}
              title="Survey"
              description="Survey is a web app that allows users to create and answer surveys. The app was built using React and the API was built using Express and MongoDB."
              ghLink="https://github.com/Olcaytp/Project-Survey-Vite-Technigo-Week5"
              demoLink="https://preeti-olcay-survey-technigo.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Music}
              isBlog={false}
              title="Music Releases"
              description="Music Releases is a web app that allows users to browse new music releases. The app was built using React and the API was built using Express and MongoDB."
              ghLink="https://github.com/Olcaytp/PairProject-Music-Releases-Technigo-Week4"
              demoLink="https://music-releases-vite.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Weather App is a web app that allows users to search for weather information. The app was built using React and the API was built using Express and MongoDB."
              ghLink="https://github.com/Olcaytp/PairProject-WeatherApp-Technigo-Week3"
              demoLink="https://weather-app-ayumi-olcay.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ASPNet}
              isBlog={false}
              title="ASP.NET CRUD"
              description="This Projects contains the source code for an application developed as part of BTK Academy's ASP.NET Core MVC Training. This training series provides essential knowledge and practical experience for those looking to learn ASP.NET Core MVC."
              ghLink="https://github.com/Olcaytp/ASP.NET-Core-MVC-BTKAKADEMI"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Apartment}
              isBlog={false}
              title="Apartment Management System"
              description="The Angular Apartment Management System is an advanced thesis project that leverages the power of the Angular framework to create a comprehensive system for managing apartment complexes. This project is designed to showcase the capabilities of Angular in building robust and scalable applications."
              ghLink="https://github.com/Olcaytp/AYS-angular-apartment-management-system-thesis-project/"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Recipe}
              isBlog={false}
              title="Recipe Book"
              description="This Udemy course serves as a foundational starting point for those eager to learn the Angular framework. The course provides participants with an interactive experience through a project that progresses, allowing them to grasp the fundamental concepts of Angular."
              ghLink="https://github.com/Olcaytp/AngularUdemyAssignments/tree/main/BasicCourseProject/"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
