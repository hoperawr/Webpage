import React from "react";
import Popup from "reactjs-popup";

const Sports = () => {
  return (
    <div>
      <h1>Sports</h1>
      <div className="sport_box">
        <div className="project_sub_header">Tchoukball</div>
        <div className="sport_text">
          I have been playing Tchoukball competitively since junior college and
          have represented both Hwa Chong Junior College and the National
          University of Singapore (NUS) at interschool tournaments. While
          Tchoukball is a relatively niche sport, I enjoy the small and
          supportive community. If you are curious about how to play, check out
          this video made by me and my exco members!
        </div>
        <div className="sports_video_box">
          <iframe
            className="sports_video"
            src="https://www.youtube.com/embed/h3rEX6fJaiI?si=RISvyp0Zv_qpLanF"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="sport_text">
          At Hwa Chong, we clinched the championship in the A division. At NUS,
          I was the captain of the Varsity Team and led the team to various
          competitions, including the ICC, IVP, and Sunig, where we placed
          fourth. I also managed the restructured training during COVID and
          successfully coordinated decentralized activities, which resulted in
          high retention of competitive players. In addition to the competitive
          side, I also established a vibrant recreational Tchoukball wing with
          over 600 members to promote the sport to the public. Currently I play
          Tchoukball at Genesis Tchoukball Club which represents Ang Mo Kio CC.
        </div>
        <div className="sport_image_box">
          <img className="sport_image" src={"src/pages/sports/hwach.jpg"}></img>
          <img className="sport_image" src={"src/pages/sports/nus_3.jpg"}></img>
        </div>
        <div className="sport_text">
          Through Tchoukball, I have learned the importance of teamwork,
          discipline, and perseverance. I have also developed my leadership
          skills and learned how to motivate and inspire others. I am grateful
          for the opportunity to have played Tchoukball at such a high level,
          and I am confident that the lessons I have learned will help me
          succeed in all areas of my life.
        </div>

        <div className="sport_image_box">
          <img className="sport_image" src={"src/pages/sports/nus_2.jpg"}></img>
          <img className="sport_image" src={"src/pages/sports/nus_1.jpg"}></img>
          <img className="sport_image" src={"src/pages/sports/nus_4.jpg"}></img>
        </div>
      </div>

      <div className="sport_box">
        <div className="project_sub_header">Chess</div>

        <div className="sport_text">
          Besides physical sports, I also enjoy mind sports such as chess. I
          have been playing chess recreationally for a few years. My first
          exposure to chess was in primary school when I joined the chess club.
          However, I recently regained interest in the sport due to the COVID-19
          situation, as online chess became easily accessible. Subsequently, I
          joined NUS Chess and represented them at the SUTD Blitz Invitationals.
          Although my skills may not be the best, I enjoy learning and playing
          the game.
        </div>
        <div className="sport_image_box">
          <img
            className="sport_image"
            src={"src/pages/sports/chess.jpeg"}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Sports;
