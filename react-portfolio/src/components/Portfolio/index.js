import React from "react";
import pwaTextEditorImage from "../../assets/small/PWA-Text-Editor.png";
import studentMarkImage from "../../assets/small/Student-Mark-image.png";
import weatherDashImage from "../../assets/small/Weather-Dashboard.png";
import theTechBlogImage from"../../assets/small/The-Tech-Blog.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://jaldhara21.github.io//Weather-Dashboard">
                {" "}
                <img
                  src={weatherDashImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather-Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
              This project aims to create a Weather Dashboard.Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. are often tasked with retrieving data from another application's API and using it in the context of their own. The challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/jaldhara21/PWA-Text-Editor">
                {" "}
                <img
                  src={pwaTextEditorImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="PWA Text Editor"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>PWA-Text-Editor</h4>
              <p>
              The PWA-Text-Editor is a Progressive Web Application (PWA) that provides a convenient way for developers to create, store, and manage notes or code snippets. With offline functionality and seamless integration of modern web technologies, this text editor aims to enhance productivity regardless of network connectivity.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://shielded-everglades-30738-44134476de15.herokuapp.com/">
                {" "}
                <img
                  src={studentMarkImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Student Mark"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Student Mark</h4>
              <p>
              Our app empowers students to rate teachers, promoting accountability and open communication in schools. With a user-friendly webpage, we foster transparency and aim for an enriched educational experience. Join us in celebrating excellent teaching and building a brighter future in education. Welcome to our teacher performance rating platform!{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://thawing-falls-32628-e001715a23b9.herokuapp.com/">
                {" "}
                <img
                  src={theTechBlogImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="The Tech Blog"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>The Tech Blog</h4>
              <p>
              The Tech Blog is Heroku deployed application, which serves as a CMS-style platform designed for newcomers alike. It allows those in the blog communtiy to publish blog posts based on their thoughts and opinions. Additionally, the comment section below, allows users to interact and engage with another on blog posts. The application follows the MVC paradigm, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.{" "}
              </p>
            </div>
          </div>
        </div>

    
        </section>
    </div>
        );
}
export default Portfolio;