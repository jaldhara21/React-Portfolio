// Importing necessary modules and components
import React, { useState } from "react";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Resume";
import Footer from "../src/components/Footer";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  // Using React state to manage the current tab
  const [currentTab, handleTabChange] = useState("about");

  // Function to render the appropriate component based on the currentTab state
  const renderTab = () => {
    if (currentTab === "About") {
      return <About />;
    }
    if (currentTab === "Contact") {
      return <Contact />;
    }
    if (currentTab === "Portfolio") {
      return <Portfolio />;
    }
    if (currentTab === "Resume") {
      return <Resume />;
    }
    return <About />;
  };

  return (
    <>
      <Helmet>
        <title>Jaldhara Patel's Portfolio | {currentTab} </title>
      </Helmet>
      ;
      {/* Rendering the Header component and passing props */}
      <Header
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      ></Header>
      {/* Rendering the main content based on the currentTab */}
      <main>{renderTab()}</main>
      {/* Rendering the Footer component */}
      <Footer></Footer>
    </>
  );
}

export default App;
