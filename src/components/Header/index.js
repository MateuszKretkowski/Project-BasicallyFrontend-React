import React, { useState, useEffect, useRef } from "react";
import { useScroll, animated, useSpring } from "@react-spring/web";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./HeaderElements.css";
import "../Navbar/NavbarElements.css";

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
  return (
    <div className="header">
      <Parallax pages={3} style={{ height: "100%", width: "100%" }}>
        <ParallaxLayer offset={0.3} speed={1}>
          <p
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: 42,
              letterSpacing: 8,
            }}
          >
            INTRODUCTION
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={0.3}>
          <p
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.5,
              fontSize: 32,
            }}
          >
            {textWithRandomSpacing(textLength)}
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={0.1}>
          <p
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.2,
              fontSize: 36,
            }}
          >
            {textWithRandomSpacing(textLength)}
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={0.02}>
          <p
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.09,
              fontSize: 36,
            }}
          >
            {textWithRandomSpacing(textLength)}
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={0.05}>
          <p
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.1,
              fontSize: 36,
            }}
          >
            {textWithRandomSpacing(textLength)}
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={0.4}>
          <p
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.2,
              fontSize: 36,
            }}
          >
            {textWithRandomSpacing(textLength)}
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.3}>
            
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
export default Header;
