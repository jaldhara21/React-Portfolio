import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h2>Made by Jaldhara Patel©</h2>
      <p>
        <ul>
          {/* Links to social media profiles */}
          <a href="https://github.com/jaldhara21">
            <li className="logo">
              {/* GitHub icon */}
              <VscGithubAlt />
            </li>
          </a>
          <a href="">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a href="https://www.instagram.com/jaldhara6103/">
            <li className="logo">
              <FaInstagram />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
