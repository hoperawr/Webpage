import React, { useState, useRef, useEffect } from "react";
import home1 from "./banner2.jpg";
import home2 from "/src/pages/home/home_2.jpg";

const Home = () => {
  const text1 =
    "Welcome to my website! I'm Hope Leong, a recent Computer Science graduate from National University of Singapore. I am constantly seeking new opportunities to learn more about technology and I hope to use my skills to leave a positive impact on society.";
  return (
    <div>
      <img className="home_image_1" src={home1} alt="Nepal" />
      <main className="home_box">
        <p className="home_text">{text1}</p>
        <img className="home_image_2" src={home2} alt="Chiang Mai"></img>
      </main>
    </div>
  );
};

// THIS IS FOR THINGS TO APPEAR WHEN SCROLLING //

// const bodyRef = useRef(null);
// const [isAtTop, setIsAtTop] = useState(true);

// useEffect(() => {
//   const observer = new IntersectionObserver(([entry]) => {
//     setIsAtTop(entry.isIntersecting);
//   });

//   console.log(isAtTop);
//   observer.observe(bodyRef.current);

//   return () => {
//     observer.disconnect();
//   };
// }, [isAtTop]);

// return (
//   <div>
//     <h1 ref={bodyRef}>
//       {isAtTop ? (
//         <img className="homeImage" src={banner} alt="Nepal" />
//       ) : (
//         "You are not at the top of the page."
//       )}
//     </h1>

//     <h2>{text1}</h2>
//     <h2>{text2}</h2>
//   </div>
// );
// };

export default Home;
