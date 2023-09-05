import React from "react";
import Nav from "../Nav"; // Importing the Nav component

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      {/* Main header section */}
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Jaldhara Patel's Portfolio</h1>
          </div>
          <div>
            {/* Rendering the navigation component */}
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      {/* Hero section */}
      <section class="hero">
        {/* Placeholder for a cover image (commented out) */}
        <div class="hero-cta">
          {/* <img
            src={coverImage}
            className="my-2"
            style={{ width: "100%" }}
            alt="cover"
          /> */}

          <h2>Welcome</h2>
          <p>
            {/* Description of the portfolio */}
            Welcome to Jaldhara Patel's portfolio page built with React. Explore
            a showcase of my work and projects. Here, you'll find examples of my
            skills and experiences throughout my journey.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;
