import React, { useState, useEffect, useRef } from "react";
import { useTransition, animated } from "react-spring";
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

  const [showStripe, setShowStripe] = useState(false);

  // ... other code ...

  // Add this transition definition
  const stripeTransition = useTransition(showStripe, {
    from: { transform: "translateX(-500px)", top: "50%" },
    enter: { transform: "translateX(-300px)", top: "50%" },
    leave: { transform: "translateX(-500px)", top: "50%" },
    config: { duration: 1000 },
  });


  return (
    <div className="header">
      <div className="site">
        <div className="first_side">
          <div className="description_container">
            <h3 className="description">
              UPGRADE YOUR WEB-DEV CARRER: LEARN MODERN TECHNOLOGIES, AND
              PROSPER WITH INSPIRING LESSONS.
              <br /> JOIN OUR MOTIVATING COMMUNITY.
              <br /> ENROLL IN OUR COURSE TODAY, <br />
              AND INVEST IN YOUR FUTURE.
            </h3>
          </div>
        </div>
        <div className="second_side">
          <div className="introduction_container">
            <h1 className="title">BASICALLYFRONTEND</h1>
            <h3 className="subtitle">
              MASTER WEB DEVELOPMENT. TRANSFORM CAREERS, LAND GIGS, SUCCEED.
            </h3>
          </div>
        </div>
      </div>
      <button
        className="start_button"
        onClick={() => {
          setShowStripe(!showStripe);
        }}
      >
        START
      </button>
      <div className="container_items">
      {stripeTransition((style, item) =>
        item ? (
          <animated.div
            style={style}
            className="stripe"
          ></animated.div>
        ) : (
          ""
        )
      )}
      </div>
    </div>
  );
};
export default Header;
