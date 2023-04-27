import React, { useState, useEffect, useRef } from "react";
import { useTransition, animated, useSpring } from "react-spring";
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import "./HeaderElements.css";

const Header = () => {
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.pageYOffset;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const RandomLetters = () => {
    const [letters, setLetters] = useState("");
    const [lettersStorage, setLettersStorage] = useState("");

    const divRef = useRef(null);

    useEffect(() => {
      const numOfLetters = Math.round(window.innerHeight / 10);
      let newLetters = "";
      for (let i = 0; i < numOfLetters; i++) {
        const randomCode = Math.floor(Math.random() * 26) + 65;
        newLetters += String.fromCharCode(randomCode);
      }
      setLettersStorage(newLetters);
      setLetters(newLetters);
    }, []);

    useEffect(() => {
      if (divRef.current) {
        divRef.current.setAttribute("data-value", lettersStorage);
      }
    }, [lettersStorage]);

    useEffect(() => {
      const numOfLetters = Math.round(window.innerHeight / 10);
      let newLettersStorage = "";
      for (let i = 0; i < numOfLetters; i++) {
        const randomCode = Math.floor(Math.random() * 26) + 65;
        newLettersStorage += String.fromCharCode(randomCode);
      }
      setLettersStorage(newLettersStorage);
      divRef.current.setAttribute("data-value", newLettersStorage);
    }, [letters]);
    return (
      <div className="line" onScroll={hackMouseOverHandler} ref={divRef}>
        {letters}
      </div>
    );
  };

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const hackMouseOverHandler = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      const lineDiv = document.querySelector(".line");
      const numOfLetters = lineDiv?.getAttribute("data-value")?.length || 0;
      if (!lineDiv) return;

      lineDiv.innerText = lineDiv.innerText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return lineDiv.getAttribute("data-value")[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations >= numOfLetters) {
        clearInterval(interval);
      }

      iterations += window.scrollY / 100;
    }, 25);
  };

  const headerFirstText = () => {
    return <h1 className="header_text">INTRODUCTION</h1>;
  };
  useEffect(() => {
    window.addEventListener("scroll", hackMouseOverHandler);
    return () => window.removeEventListener("scroll", hackMouseOverHandler);
  }, []);

  function randomLetterSpacing() {
    const value = Math.random() * 28 + 8;
    return `${value}px`;
  }
  function randomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  function textWithRandomSpacing(length) {
    return Array.from({ length }).map((_, index) => (
      <span key={index} style={{ letterSpacing: randomLetterSpacing() }}>
        {randomLetter()}
      </span>
    ));
  }
  const textLength = 36;

  const [items, setItems] = useState([]);
  const transition = useTransition(items, {
    from: { x: -1080, y: -500 },
    enter: (item) => async (next) => {
      await next({ y: item.y, x: item.x, delay: item.delay });
    },
  });

  const [toggle, setToggle] = useState(false);

  const fadein = useSpring({
    opacity: toggle ? 0 : 1,
    x: toggle ? 100 : -100,
  });

  const [moveLeft, setMoveLeft] = useState(false);
  const handleMoveLeft = () => {
    setMoveLeft(!moveLeft);
  };
  const moveLeftAnimation = useSpring({
    transform: moveLeft ? "translateX(-100px)" : "translateX(0px)",
    config: { tension: 200, friction: 20 },
  });
  

  return (
    <div className="header">
      <div className="site">
        <div className="first_side">
          <animated.div
            className="description_container"
            style={{ ...items, ...moveLeftAnimation }}
          >
            <h3 className="description">
              UPGRADE YOUR WEB-DEV CARRER: LEARN MODERN TECHNOLOGIES, AND
              PROSPER WITH INSPIRING LESSONS.
              <br /> JOIN OUR MOTIVATING COMMUNITY.
              <br /> ENROLL IN OUR COURSE TODAY, <br />
              AND INVEST IN YOUR FUTURE.
            </h3>
          </animated.div>
        </div>
        <div className="second_side">
          <animated.div
            className="introduction_container"
            style={moveLeftAnimation}
          >
            <h1 className="title">BASICALLYFRONTEND</h1>
            <h3 className="subtitle">
              MASTER WEB DEVELOPMENT. TRANSFORM CAREERS, LAND GIGS, SUCCEED.
            </h3>
          </animated.div>
        </div>
      </div>
      <button className="start_button" onClick={() => setToggle(!toggle)}>
        START
      </button>
      <div className="container_items">
      <animated.div
  className={"stripe"}
  style={{ ...fadein, cursor: "pointer" }}
  onClick={handleMoveLeft}
>

          <h3 className="small_text white">ABOUT US</h3>
          <h3 className="small_text white">MAIN PAGE</h3>
        </animated.div>
      </div>
    </div>
  );
};
export default Header;
