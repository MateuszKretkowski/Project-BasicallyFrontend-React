import React, { useState } from 'react';
import { useScroll, animated, useSpring } from "@react-spring/web";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import './NavbarElements.css';
import "../Header/HeaderElements.css";

const Navbar = () => {

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
    }, 30);
  }

  return (
    <div className='navBar'>
      <div className='nav_left-side'>
        <figure className='navBar_logo-warpper'>
          <h2>LOGO</h2>
          {/* <img className='logo' src={require('./logo.png')}></img> */}
        </figure>
      </div>
      <div className='nav_right-side'>
        <ul className='navBar_list'>
          <li className='navBar_Link'>
            <h6 className='hack'>01.</h6>
            <a href='#introduction' data-value="INTRODUCTION" className='hack hack_hover_effect' onMouseOver={hackMouseOverHandler}>INTRODUCTION</a>
          </li>
          <li className='navBar_Link'>
            <h6>01.</h6>
            <a href='#introduction' data-value="INTRODUCTION" className='hack hack_hover_effect' onMouseOver={hackMouseOverHandler}>INTRODUCTION</a>
          </li>
          <li className='navBar_Link'>
            <h6>01.</h6>
            <a href='#introduction' data-value="INTRODUCTION" className='hack hack_hover_effect' onMouseOver={hackMouseOverHandler}>INTRODUCTION</a>
          </li>
        </ul>
      </div>   
    </div>
  );
};

export default Navbar;
