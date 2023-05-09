import React, { useState, useEffect, useRef } from "react";
import { useTransition, animated, useSpring } from "react-spring";
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

  // const [isLeft, setIsLeft] = useState([]);
  // const transition = useTransition(isLeft, {
  //   from: (item) => (next) => next({ y: item.y, x: item.x }),
  //   enter: (item) => (next) =>
  //   next({ y: (item.y += 100), x: (item.x += 100), delay: item.delay }),
  //   leave: (item) => (next) =>
  //     next({ y: (item.y), x: (item.x), delay: item.delay }),
  // });

  // const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.pageYOffset;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isLeft, setIsLeft] = useState(false);

  const titleStyle = useSpring({
    transform: !isLeft ? "translateX(0%)" : "translateX(-400%)",
    config: { mass: 2, tension: 100, friction: 20 },
  });

  const descriptionTitleStyle = useSpring({
    transform: !isLeft ? "translateX(0%)" : "translateX(-200%)",
    config: { mass: 2, tension: 170, friction: 26 },
  });

  const buttonStyle = useSpring({
    transform: !isLeft ? "translateX(0%)" : "translateX(0%)",
    config: { mass: 1, tension: 5, friction: 3 },
  });

  return (
    <div className="header">
      <div className="site">
        <div className="first_side">
        <animated.div className="introduction_container" style={titleStyle}>
            <h1 className="title">BASICALLYFRONTEND</h1>
            <h3 className="subtitle">
              MASTER WEB DEVELOPMENT. TRANSFORM CAREERS, LAND GIGS, SUCCEED.
            </h3>
          </animated.div>
        </div>
        <div className="second_side">
        <animated.div
            className="description_container"
            style={descriptionTitleStyle}
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
        <div className="stripes">
          <animated.button
            className={"stripe stripe_1"}
            style={buttonStyle}
            onClick={() => {
              setIsLeft((v) => !v);
            }}
          >
            <h3 className="small_text black">ABOUT US</h3>
          </animated.button>
        </div>
      </div>
    </div>
  );
};
export default Header;
