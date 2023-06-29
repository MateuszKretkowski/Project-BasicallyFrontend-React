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

  const [text, setText] = useState(
    "We like to keep it simple. Tell us your name, contact information, and a little bit about you and your kids. Just like that, youre all set."
  );
  const [img, setImg] = useState(require("./img_1.png"));

  const handleClick1 = () => {
    setText(
      "We like to keep it simple. Tell us your name, contact information, and a little bit about you and your kids. Just like that, youre all set."
    );
    setImg(require("./img_1.png"));
    triggerFadeIn();
    triggerBumpIn();
  };
  const handleClick2 = () => {
    setText(
      "Let us know when you need care and well match you with a sitter based on your familys needs and their availability."
    );
    setImg(require("./img_2.png"));
    triggerFadeIn();
    triggerBumpIn();
  };
  const handleClick3 = () => {
    setText(
      "We like to keep it simple. Tell us your name, contact information, and a little bit about you and your kids. Just like that, youre all set."
    );
    setImg(require("./img_3.png"));
    triggerFadeIn();
    triggerBumpIn();
  };

  const triggerFadeIn = () => {
    setFadeIn(false);
    setTimeout(() => {
      setFadeIn(true);
    }, 0);
  };

  const triggerBumpIn = () => {
    setBumpIn(false);
    setTimeout(() => {
      setBumpIn(true);
    }, 0);
  };

  const [fadeIn, setFadeIn] = useState(false);
  const [bumpIn, setBumpIn] = useState(false);

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
              <h2 className="header_text">
                Otter matches parents who need care with trusted sitters in
                their community, on-demand
              </h2>
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
              <h5 className="section_title">HOW IT WORKS</h5>
              <h1 className="title">
                We help families find reliable, flexible kidcare
              </h1>
              <h2 className="description">
                We'll match you with sitters based on your family's needs and
                their availability.
              </h2>
              <ul className="ul_wrapper">
                <li className="hiw_clickable clickable1" onClick={handleClick1}>
                  Sign up
                </li>
                <li className="hiw_clickable clickable2" onClick={handleClick2}>
                  Book a sitter
                </li>
                <li className="hiw_clickable clickable3" onClick={handleClick3}>
                  Get care & pay
                </li>
              </ul>
            </div>
            <div className="right_side">
              <img
                className={`clickableImg ${fadeIn ? "fade-in" : ""}`}
                Onanimation={() => setFadeIn(false)}
                src={img}
              />
              <h4
                className={`howitworks_text ${bumpIn ? "bump-in" : ""}`}
                onAnimationEnd={() => setBumpIn(false)}
              >
                {text}
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials">
      <div className="testimonials_texts">
        <h5 className="section_title">TESTIMONIALS</h5>
        <h2 className="testimonials_title">See What Our Village Is Saying..</h2>
      </div>
        <div className="slider">
          <div className="slide-track">
            <div className="slide a1">
              <img src={require("./image (3).png")} alt="" />
            </div>
            <div className="slide a2">
              <img src={require("./image (4).png")} alt="" />
            </div>
            <div className="slide a3">
              <img src={require("./image (5).png")} alt="" />
            </div>
            <div className="slide a4">
              <img src={require("./image (6).png")} alt="" />
            </div>
            <div className="slide a5">
              <img src={require("./image (7).png")} alt="" />
            </div>
            <div className="slide a1">
              <img src={require("./image (3).png")} alt="" />
            </div>
            <div className="slide a2">
              <img src={require("./image (4).png")} alt="" />
            </div>
            <div className="slide a3">
              <img src={require("./image (5).png")} alt="" />
            </div>
            <div className="slide a4">
              <img src={require("./image (6).png")} alt="" />
            </div>
            <div className="slide a5">
              <img src={require("./image (7).png")} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="featured">
        <h3 className="section_title">AS FEATURED IN</h3>
        <div className="featured_img_wrapper">
        <img src={require("./image (8).png")} className="featured_img"/>
        <img src={require("./image (9).png")} className="featured_img"/>
        <img src={require("./image (10).png")} className="featured_img"/>
        <img src={require("./image (11).png")} className="featured_img"/>
        </div>
      </section>
      <section className="whyotter">
        <div className="whyotter_container">
        <div className="whyotter_titles_wrapper">
          <h5 className="section_title">WHY OTTER?</h5>
          <h2 className="title">We pop in so you can pop out</h2>
          <h3 className="subtitle">Making the impossible things about childcare possible.</h3>
        </div>
        <div className="whyotter_examples_wrapper">
          <div className="whyotter_example">
            <div className="whyotter_text_wrapper">
              <h2 className="whyotter_text">Looking Ahead</h2>
              <h3 className="whyotter_subtext">
                Look at you being so ahead of the game. We can book childcare up to a month out — we look forward to seeing you then.
              </h3>
            </div>
            <img src={require("./image (14).png")} className="whyotter_img" />
          </div>
          <div className="whyotter_example">
          <img src={require("./image (15).png")} className="whyotter_img reflected" />
            <div className="whyotter_text_wrapper">
              <h2 className="whyotter_text">A Night Out</h2>
              <h3 className="whyotter_subtext">
                Nothing should get in the way of the time you spend together, without your kids. Our sitters make date night easy to pull off.
              </h3>
            </div>
            
          </div>
          <div className="whyotter_example long">
          <img src={require("./image (12).png")} className="whyotter_img" />
            <div className="whyotter_text_wrapper long_text">
              <h2 className="whyotter_text">In a Pinch</h2>
              <h3 className="whyotter_subtext">
              Emergency? Sick nanny? No problem, we can help! We can fill requests with as little as two hours' notice.
              </h3>
            </div>
            <img src={require("./image (13).png")} className="whyotter_img" />
          </div>          
        </div>
        </div>
      </section>
      <section className="commonq">
        <div className="commonq_container">
          <div className="commonq_texts_wrapper">
            <h2 className="title">Common Questions</h2>
            <button className="link_title link_signup_hover longbtn">
              <h4>View All FAQs</h4>
            </button>
          </div>
          <ul className="commonq_questions_wrapper">
            <li className="commonq_question">
              <div className="commonq_visible">
                <h3 className="commonq_action">What is Otter?</h3>
                <div className="commonq_plus-sing" />
              </div>
              <div className="commonq_hidden">
                <h4 className="text_hidden">Otter is the childcare solution we wished existed, so we created it! We match families who need care with trusted sitters in their community, on-demand. If you've ever thought about sending the "bat signal" when you're in a kidcare bind, us too. That's why our care options are designed to cater to both future plans and unplanned schedule changes. Sitters benefit from the flexibility to earn money on their schedules while providing quality care.</h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Header;
