import React, { useState, useEffect, useRef } from "react";
import { useTransition, animated, useSpring } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-brands-svg-icons";
import "./HeaderElements.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { click } from "@testing-library/user-event/dist/click";

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
  const [image, setImage] = useState("./img_1.png");
  const clickable = document.getElementsByClassName("clickable")
  const swap = () => {
    for (var i=0; i < clickable.length; i++) {
      clickable[i].addEventListener("click", function() {
        var contentText = this.getAtribute("data-value1");
        var contentImg = this.getAtribute("data-value2");
        document.getElementsByClassName("howitworks_text").innerText = contentText;
        setImage(contentImg);
      })
    }
  }

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
        <div className="navBar">
          <div className="navBar_wrapper">
            <ul className="links_wrapper">
              <li className="link">
                <h4 className="link_title link_title_hover">Parents</h4>
              </li>
              <li className="link">
                <h4 className="link_title link_title_hover">Sitters</h4>
              </li>
              <li className="link">
                <h4 className="link_title link_title_hover">Trust & Safety</h4>
              </li>
              <li className="link">
                <h4 className="link_title link_title_hover">Blog</h4>
              </li>
            </ul>
            <img className="logo" src={require("./l.png")}></img>
            <ul className="links_wrapper">
              <li className="link_title link_login_hover">
                <h4>Log in</h4>
              </li>
              <li className="link_title link_signup_hover">
                <h4>Sign up</h4>
              </li>
            </ul>
          </div>
        </div>
        <header>
          <div className="header_wrapper">
            <div className="header_container">
              <img className="img imgnum1" src={require("./img_1.png")}></img>
              <div className="img imgnum2"></div>
              <img className="img imgnum3" src={require("./img_2.png")}></img>
              <img className="img imgnum4" src={require("./img_3.png")}></img>
              <div className="img imgnum5"></div>
            <div className="header_texts_wrapper">
              <h1 className="header_text">Reliable Kidcare On Demand</h1>
              <h2 className="header_text">Otter matches parents who need care with trusted sitters in their community, on-demand</h2>
              <div className="header_signup">
                <h4 className="header_text btn_text">Sign up</h4>
              </div>
            </div>
            </div>
          </div>
        </header>
        <section className="howitworks">
          <div className="howitworks_container">
            <div className="howitworks_wrapper">
              <div className="left_side">
                <h5>HOW IT WORKS</h5>
                <h1>
                We help families find reliable, flexible kidcare
                </h1>
                <h2>We'll match you with sitters based on your family's needs and their availability.</h2>
                <ul className="howitworks_action_wrapper">
                  <li className="howitworks_action clickable" data-value1="We like to keep it simple. Tell us your name, contact information, and a little bit about you and your kids. Just like that, you're all set." data-value="./img_1.png">
                    Sign up
                  </li>
                  <li className="howitworks_action clickable" data-value1="Let us know when you need care and we'll match you with a sitter based on your family's needs and their availability." data-value="./img_2.png">
                    Book a sitter
                  </li>
                  <li className="howitworks_action clickable" data-value1="We've got it from here. Your sitter will show up so you can head out. After your booking wraps up you'll receive a payment request through our app." data-value="./img_3.png">
                    Get care & pay
                  </li>
                </ul>
              </div>
              <div className="right_side">
              <img className="hiwimg" src={require(`${image}`)}></img>
                <h4 className="howitworks_text">
                </h4>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};
export default Header;
