import React, { useState, useEffect } from "react";
import Chess from "./Chess";
import TFT from "./TFT";

import Games_Navbar from "./Games_Navbar";

const Games = () => {
  return (
    <div>
      <h1 className="component_header">Games</h1>
      <div className="game_main">
        <Games_Navbar />
        <div className="game_writeup">
          <div>
            I am a passionate gamer, and I enjoy playing a variety of games, but
            my two favorites are chess and Teamfight Tactics. In chess, I have
            achieved a peak Rapid rating of 1918 on Lichess which put me at the
            top 15% of players on the website. I was also part of NUS Chess and
            represented NUS to compete in tournaments. In Teamfight Tactics, I
            have reached the rank of Grand Master, which is the second highest
            rank in the game. My peak rank was rank 40 in Singapore. I enjoy the
            strategy and creativity involved in building a winning team. I also
            enjoy the competitive aspect of the game and the challenge of
            defeating other top players.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
