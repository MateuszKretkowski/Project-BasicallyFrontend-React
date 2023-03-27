import React, { useState, useEffect, useRef } from 'react';
import './HeaderElements.css';
import "../Navbar/NavbarElements.css";

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
      setLettersStorage(prevLettersStorage => prevLettersStorage + newLetters);
      setLetters(newLetters);
    }, []);
  
    useEffect(() => {
      if (divRef.current) {
        divRef.current.setAttribute('data-value', lettersStorage);
      }
    }, [lettersStorage]);

    return <div className='line' onScroll={hackMouseOverHandler} ref={divRef}>{letters}</div>;
};

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const hackMouseOverHandler = event => {
  let iterations = 0;
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
    .split("")
    .map((letter, index) => {
      if(index < iterations) {
        return event.target.dataset.value[index];
      }
      return letters[Math.floor(Math.random() * 26)]
    })
    .join("");
  
  if(iterations >= event.target.dataset.value.length){ 
    clearInterval(interval);
  }
  
  iterations += 1 / 3;
  }, 25);
}





const Header = () => {
    return (
        <div className='header'>
            <div className='first_section'>
                <div className='navBar_Border'></div>
                <div className='line_border'>
                    <RandomLetters />
                </div>
                <div className='sections'>
                    <h1 className='header_number'>01.</h1>
                    <h1 className='header_text anim-typewriter' data-value="INTRODUCTION" onMouseOver={hackMouseOverHandler}>INTRODUCTION</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;
