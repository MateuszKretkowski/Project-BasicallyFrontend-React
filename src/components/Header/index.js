import React, { useState, useEffect, useRef } from "react";
import { useTransition, animated, useSpring } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faDumbbell,
  faSignal,
  faMoneyBill1Wave,
  faRepeat,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "./HeaderElements.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Header = () => {
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

  const headerFirstText = () => {
    return <h1 className="header_text">INTRODUCTION</h1>;
  };

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

  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const hackMouseOverHandler = (event) => {
    let iterations = 0;

    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iterations += 1 / 3;
    }, 30);
  };

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <div className="website">
      <script
        src="https://kit.fontawesome.com/169dda284c.js"
        crossorigin="anonymous"
      ></script>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      ></link>
                  <Parallax pages={2}>
      <div className="navBar">
        <div className="nav_left-side">
          <figure className="navBar_logo-warpper">
            <h2 className="logo"></h2>
            {/* <img className='logo' src={require('./logo.png')}></img> */}
          </figure>
        </div>
        <div className="nav_right-side">
          <ul className="navBar_list">
            <li className="navBar_Link">
              <h6>01.</h6>
              <a
                href="#introduction"
                data-value="INTRODUCTION"
                className="hack hack_hover_effect"
                onMouseOver={hackMouseOverHandler}
              >
                INTRODUCTION
              </a>
            </li>
            <li className="navBar_Link">
              <h6>02.</h6>
              <a
                href="#introduction"
                data-value="BENEFITS"
                className="hack hack_hover_effect"
                onMouseOver={hackMouseOverHandler}
              >
                BENEFITS
              </a>
            </li>
            <li className="navBar_Link">
              <h6>03.</h6>
              <a
                href="#introduction"
                data-value="PRICING"
                className="hack hack_hover_effect"
                onMouseOver={hackMouseOverHandler}
              >
                PRICING
              </a>
            </li>
          </ul>
        </div>
      </div>
      <header>
        <div className="header_container">
          <div className="header_wrapper">
              <ParallaxLayer
                className="header_background_wrapper"
                speed={0.2}
              >
                <img
                  className="header_background"
                  src={require("./header_background.jpg")}
                ></img>
              </ParallaxLayer>
              <ParallaxLayer
                speed={1}
              >
                <img
                  className="header_miles_morales web"
                  src={require("./web.png")}
                ></img>
                <img
                  className="header_miles_morales"
                  src={require("./My project (1).png")}
                ></img>
              </ParallaxLayer>
              <ParallaxLayer className="header_title_wrapper">
                <h2>01.</h2>
                <div className="title">
                  <h2>Spider-Man</h2>
                  <h2>Beyond The Spiderverse</h2>
                </div>
              </ParallaxLayer>
          </div>
        </div>
      </header>
            </Parallax>
    </div>
  );
};
export default Header;
