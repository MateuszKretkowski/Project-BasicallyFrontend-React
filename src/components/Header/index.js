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

  return (
<div className="header">
<Parallax pages={2} style={{ height: '100%', width: '100%' }}>
        <ParallaxLayer offset={0} speed={-0.5}>
          <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>INTRODUCTION</p>
        </ParallaxLayer>
      </Parallax>
</div>
  );
};
export default Header;
