import React, { useState, useEffect, useRef } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { useParallax } from 'react-scroll-parallax';
import './HeaderElements.css';
import '../Navbar/NavbarElements.css';

function MyComponent() {
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.pageYOffset;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])};

const RandomLetters = () => {
  const [letters, setLetters] = useState('');
  const [lettersStorage, setLettersStorage] = useState('');

  const divRef = useRef(null);

  useEffect(() => {
    const numOfLetters = Math.round(window.innerHeight / 10);
    let newLetters = '';
    for (let i = 0; i < numOfLetters; i++) {
      const randomCode = Math.floor(Math.random() * 26) + 65;
      newLetters += String.fromCharCode(randomCode);
    }
    setLettersStorage(newLetters);
    setLetters(newLetters);
  }, []);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.setAttribute('data-value', lettersStorage);
    }
  }, [lettersStorage]);

  useEffect(() => {
    const numOfLetters = Math.round(window.innerHeight / 10);
    let newLettersStorage = '';
    for (let i = 0; i < numOfLetters; i++) {
      const randomCode = Math.floor(Math.random() * 26) + 65;
      newLettersStorage += String.fromCharCode(randomCode);
    }
    setLettersStorage(newLettersStorage);
    divRef.current.setAttribute('data-value', newLettersStorage);
  }, [letters]);
    return (
      <div className="line" onScroll={hackMouseOverHandler} ref={divRef}>
      {letters}
    </div>
  );
};


const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const hackMouseOverHandler = () => {
  let iterations = 0;
  const interval = setInterval(() => {
    const lineDiv = document.querySelector('.line');
    const numOfLetters = lineDiv.getAttribute('data-value').length;
    lineDiv.innerText = lineDiv.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return lineDiv.getAttribute('data-value')[index];
        }
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");

    if (iterations >= numOfLetters) {
      clearInterval(interval);
    }

    iterations += window.scrollY / 100;
  }, 25);
};

const introductionText = () => {
  return (
    <Parallax
    y={['-30%', '30%']}
    alpha={[1, 0]}
    styleInner={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
  >
    <h1 className="header_text anim-typewriter" data-value="INTRODUCTION">
      INTRODUCTION
    </h1>
  </Parallax>
  )
}

const Header = () => {
  useEffect(() => {
    window.addEventListener('scroll', hackMouseOverHandler);
    return () => window.removeEventListener('scroll', hackMouseOverHandler);
  }, []);

  return (
    <div className="header">
      <div className="first_section">
        <div className="navBar_Border" />
        <div className="line_border">
          <RandomLetters />
        </div>
        <div className="sections">
            <introductionText />
          <div className='video_wrapper'>
            {/* <video src={}></video> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
