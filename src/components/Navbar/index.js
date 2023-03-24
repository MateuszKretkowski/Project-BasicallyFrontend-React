import React, { useState } from 'react';
import './NavbarElements.css';

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
          <img className='navBar_logo' src=''></img>
        </figure>
      </div>
      <div className='nav_right-side'>
        <div className='Line'></div>
        <ul className='navBar_list'>
          <li className='navBar_Link'>
            <h1 data-value="HYPERPLEXED" className='hack' onMouseOver={hackMouseOverHandler}>HYPERPLEXED</h1>
            <a href='#introduction' data-value="HYPERPLEXED" className='hack' onMouseOver={hackMouseOverHandler}> Introduction</a>
          </li>
          <li className='navBar_Link'>
            <a href='#introduction' data-value="HYPERPLEXED" className='hack' onMouseOver={hackMouseOverHandler}>Introduction</a>
          </li>
          <li className='navBar_Link'>
            <a href='#introduction' data-value="HYPERPLEXED" className='hack' onMouseOver={hackMouseOverHandler}>Introduction</a>
          </li>
        </ul>
      </div>   
    </div>
  );
};

export default Navbar;
