import React from "react";
import about_image_1 from "./thailand2.jpg";

const About = () => {
  return (
    <html>
      <h1 className="component_header">About me</h1>
      <main>
        <div className="about_box">
          <img src={about_image_1} className="about_image"></img>
          <div>
            <p>
              Hello! I'm Hope, a recent graduate of NUS Computer Science with a
              specialization in Artificial Intelligence and a minor in Life
              Sciences. I'm passionate about the constantly changing field of
              technology and am always looking for new ways to learn and grow.
            </p>
            <p>
              In my free time, I enjoy playing Tchoukball, doing Leetcode
              (although I don't enjoy it very much), and traveling the world.
              I'm also a big fan of nature and mountain climbing, and my dream
              is to one day complete the Explorer's Grand Slam, which is to
              climb the highest mountain on every continent.
            </p>
            <p>
              I'm currently looking for job opportunities, so please feel free
              to reach out to me if you have any questions.
            </p>
          </div>
        </div>
      </main>
    </html>
  );
};

export default About;
