import React, { useState, useEffect, useRef } from "react";
import { useTransition, animated, useSpring } from "react-spring";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faDumbbell, faSignal } from '@fortawesome/free-solid-svg-icons';
import "./HeaderElements.css";

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

  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

  
  
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
    <div>
        <script
      src="https://kit.fontawesome.com/169dda284c.js"
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
<header>
      <div class="container">
        <div class="header_text_container">
          <h1 class="title">Websites As You Want.</h1>
          <ul class="header_ul">
            <li class="header_li">
              <FontAwesomeIcon icon={faEye} className="icon" />
              <h3 class="header_li_desc">Fancy Looks</h3>
            </li>
            <li class="header_li">
              <FontAwesomeIcon icon={faDumbbell} className="icon" />
              <FontAwesomeIcon icon="fa-solid fa-dumbbell" />
              <h3 class="header_li_desc">Strong Design</h3>
            </li>
            <li class="header_li">
              <FontAwesomeIcon icon={faEye} className="icon" />
              <FontAwesomeIcon icon={faSignal} className="icon" />
              <h3 class="header_li_desc">Full Live Server</h3>
            </li>
          </ul>
        </div>
        <div class="button_wrapper">
          <button class="button">Start Your Proffesionalism Today!</button>
        </div>
      </div>
      <div class="scroll click"></div>
    </header>
    <section class="benefits">
      <div class="benefits_container">
        <div class="benefits_titles reveal">
          <h1 class="benefits_title reveal">Benefits</h1>
          <h3 class="benefits_h3 reveal">One Of The Many Benefits Of Our Offerts Are..</h3>
        </div>
        <div class="benefit_container">
          <div class="benefit reveal">
            <div class="benefit_wrapper">
              <i class="fa-solid fa-repeat benefit_icon"></i>
              <h4 class="benefit_title">Unlimited Rebuilds</h4>
              <p class="benefit_p">So We just designed Your Website, but you don't like it? Don't Worry! We are open to any rebuilds that you will tell us!.</p>
            </div>
          </div>
          <div class="benefit reveal">
            <div class="benefit_wrapper">
              <i class="fa-solid fa-money-bill-1-wave benefit_icon"></i>
              <h4 class="benefit_title">Cheap Prices</h4>
              <p class="benefit_p">Every offert that will make you a "cool" Website, are totally overpriced! That's why We're here trying to help for your Better, Cheaper career journey!</p>
            </div>
          </div>
          <div class="benefit reveal">
            <div class="benefit_wrapper">
              <i class="fa-solid fa-users benefit_icon"></i>
              <h4 class="benefit_title">Client Service</h4>
              <p class="benefit_p">Client Service is super important for Us! We are almost every hour Online! If you have any questions, let us know!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="pricing">
      <div class="texts">
        <h1 class="section_title">PRICINGS</h1>
        <h2 class="pricing_title">Reasonable <span class="text--purple">Prices.</span></h2>
        <p class="pricing_para">Hope You Like That Cheap Prices!</p>
      </div>
      <div class="plans_container">
        <div class="plan">
          <div class="plan_header">
                <span class="name">NORMAL</span>
                <span class="price">$59.99 - $89.99</span>
                <span class="duration">One-Time Purchase</span>
              </div>
              <div class="plan_features">
                <span class="main_feature">BENEFITS</span>
                <span class="feature feature_bigger">Production Time: 1-2 Days</span>
                <span class="feature feature_bigger">Design Out Of Earth</span>
                <span class="feature feature_big">Unlimited Reworks</span>
                <span class="feature feature_big">24/7 Support</span>
                <span class="feature feature_big">Full-Live Server</span>
                <span class="feature">Interactable Features</span>
                <span class="feature">Mobile Support</span>
                <span class="feature">Animations</span>
                <span class="feature"></span>
              </div>
            </div>
        </div>
    </section>
    <section id="projects">
      <div class="container">
        <div class="row">
          <div class="benefits_titles">
            <h1 class="sectiontitle reveal">Projects</h1>
            <h3 class="benefits_h3 reveal">Here's Some Of Our Projects That We Made Up</h3>
          </div>
          <ul class="projectlist">
            <li class="project">
              <div class="projectwrapper reveal">
                {/* {<img src="./assets/my project.png" class="projectimg" alt="">} */}
                <div class="projectwrapper--bg"></div>
                <div class="projectdescription">
                  <h3 class="projectdescription--title">
                    TReact Template Rectreation
                  </h3>
                  <h4 class="projectdescription--sub-title">
                    Html, CSS, JS
                  </h4>
                  <p class="projectdescription--para">
                    TReact is a website with a huge number of templates for users all over the world. I recreated one.
                  </p>
                  <div class="projectdescription--links">
                    <a href="./assets/my project.png" class="project__description--link">
                      <i class="fas fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="footer_container">
        <ul class="nav_links nav_ul">
          <li class="nav_link footer_link">
            <a href="" class="footer-hover">ABOUT US</a>
          </li>
          <li class="nav_link footer_link">
            <a href="" class="footer-hover">PROJECTS</a>
          </li>
          <li class="nav_link footer_link">
            <a href="" class="footer-hover">PRICING</a>
          </li>
        </ul>
      </div>
    </footer>
    </div>
  );
};
export default Header;
