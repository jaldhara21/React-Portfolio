import React from "react";
import profileImage from "../../assets/Profile/Profile-pic.jpg";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
  Hello, I'm Jaldhara Patel, a dedicated Full Stack Developer based in North Carolina. My journey began with a Bachelor's degree in Nursing, which I completed in India back in 2013. I initially pursued a career in healthcare, working at a nursing home, but the COVID-19 pandemic prompted a significant change in my career path.
</p>
<p>
  During these challenging times, I made a life-altering decision to pivot into the tech world. I embarked on a web development bootcamp to acquire the skills needed to thrive in the ever-evolving digital landscape. This transition has opened up exciting opportunities for me to work remotely and contribute to the world of technology.
</p>
<p>
  Beyond coding, I have a passion for cooking and savoring quality time with my family. Exploring diverse cuisines and creating delicious dishes brings me immense joy. My family and I cherish these moments together, which have become even more meaningful in recent times.
</p>

        </div>
      </div>
    </section>
  );
}

export default About;