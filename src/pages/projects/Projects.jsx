import React from "react";
import project5_image from "./project5.png";
import project3_image from "./project3.png";
import project4_image from "./project4.png";
import project1_image from "/src/pages/projects/github_link.png";

const Projects = () => {
  const project1 = (
    <html>
      <div className="project_subheader_box">
        <h2 className="project_sub_header">Personal Website</h2>
        <a
          className="project_link_button"
          href="https://github.com/hoperawr/Fur-get-Me-Not/tree/main"
        >
          <img className="project_link_image" src={project1_image}></img>
        </a>
      </div>
      <div className="project_box_image_text">
        <img
          src={"/src/pages/projects/project1.png"}
          className="project_image"
        ></img>
        <main className="project_text">
          <p>
            Developed a responsive portfolio website using React.js and CSS to
            showcase my skills and interests to the world. It includes pages for
            Home, About, Travel, Projects, Sports, and Games. I chose to use
            React for this project because it is a popular JavaScript library
            for building user interfaces and it allows me to create fast,
            interactive, and scalable websites.
          </p>
          <p>
            My personal website features a responsive layout, a clean and modern
            design, menu and galleries using React Routing, an interactive map
            using simple-maps, API calls from external websites, and graphs made
            using Recharts.
          </p>
          <p>Skills used: React, CSS</p>
        </main>
      </div>
    </html>
  );

  const project2 = (
    <html>
      <div className="project_subheader_box">
        <h2 className="project_sub_header">Furget Me Not</h2>
        <a
          className="project_link_button"
          href="https://github.com/hoperawr/Fur-get-Me-Not/tree/main"
        >
          <img
            className="project_link_image"
            src={"/src/pages/projects/github_link.png"}
          ></img>
        </a>
      </div>
      <div className="project_box_image_text">
        <iframe
          className="project_image"
          src="https://www.youtube.com/embed/H--22M367AY?si=P0Ac5wOeMx2hmI0U"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <main className="project_text">
          <p>
            Fur-get me not is a mobile application made using Unity that allows
            users to have adorable interactive virtual pets that will remind you
            of your deadlines and help you stay focused while studying.
          </p>
          <p>
            Some of the features include an inventory system, an auto generating
            calendar that allows events to be placed, study mode, mini games and
            achievements. This project was done for NUS Computing Orbital which
            we achieved the Apollo level of achievement.
          </p>
          <p>Skills used: Unity, C++</p>
        </main>
      </div>
    </html>
  );

  const project3 = (
    <html>
      <h2 className="project_sub_header">
        DNA Methylation Identification Transformer Model
      </h2>
      <div className="project_box_image_text">
        <img src={project3_image} className="project_image"></img>
        <main className="project_text">
          <p>
            DNA methylation is one of the several epigenetic mechanisms that
            cells use to control gene expression. Using nanopore, the company I
            interned at aimed to study the characteristic changes in signal to
            identify the methylation status of CpG sites using the Transformer
            machine learning model.
          </p>
          <p>
            During my time there, I helped conduct data analysis of alignment
            weights in model and implemented masking of attention weights across
            heads I also evaluated potential improvements to the model regarding
            discordant sites and presented findings to the team.
          </p>
          <p>Skills used: Python, Pytorch, Pandas, Linux, Seaborn </p>
        </main>
      </div>
    </html>
  );

  const project4 = (
    <html>
      <div className="project_subheader_box">
        <h2 className="project_sub_header">Static Program Analyser</h2>
        <a
          className="project_link_button"
          href="https://github.com/hoperawr/SPA"
        >
          <img
            className="project_link_image"
            src={"/src/pages/projects/github_link.png"}
          ></img>
        </a>
      </div>
      <div className="project_box_image_text">
        <img src={project4_image} className="project_image"></img>
        <main className="project_text">
          <p>
            SPA is an interactive tool that automatically answers queries about
            programs. This implementation of the program processes a SIMPLE
            source file provided by the user. and extracts and stores relevant
            design abstractions. Users can then ask questions about the input
            source in Program Query Language (PQL). The program will answer the
            users' queries based on its stored design abstractions.
          </p>
          <p>Skills used: C++, Data Structures and algorithm</p>
        </main>
      </div>
    </html>
  );

  const project5 = (
    <html>
      <div className="project_subheader_box">
        <h2 className="project_sub_header">
          Weapon Carrying Image Classification Model
        </h2>
        <a
          className="project_link_button"
          href="https://github.com/hoperawr/CS4243_Project"
        >
          <img
            className="project_link_image"
            src={"/src/pages/projects/github_link.png"}
          ></img>
        </a>
      </div>
      <div className="project_box_image_text">
        <img src={project5_image} className="project_image"></img>
        <div className="project_text">
          <p>
            Utilized ResNet for image classification to differentiate photos of
            armed and unarmed personnel. Futher modifications made to the model
            by using threshold-moving and tweaking cross entropy loss, and
            reviewed the results.
          </p>
          <p>Skills used: Python, Pytorch</p>
        </div>
      </div>
    </html>
  );

  const project6 = (
    <html>
      <h2 className="project_sub_header">SAT Solver with custom heuristics</h2>
      <div className="project_box_image_text">
        <main className="project_text">
          <p>
            The goal of the project is to design a Satisfiability Solver based
            on CDCL algorithm to check satisfiability of conjunctive normal form
            (CNF) formulas with custom heuristics. We then evaluate the
            performance of the solver according to the fixed-clause-length model
            and tested it on the Einstein's puzzle converted to CNF.
          </p>
          <p>Skills used: Python</p>
        </main>
      </div>
    </html>
  );

  return (
    <html>
      <h1 className="component_header">Projects</h1>
      <main>
        <div className="project_box">{project1}</div>
        <div className="project_box">{project2}</div>
        <div className="project_box">{project3}</div>
        <div className="project_box">{project4}</div>
        <div className="project_box">{project5}</div>
        <div className="project_box">{project6}</div>
      </main>
    </html>
  );
};

export default Projects;
