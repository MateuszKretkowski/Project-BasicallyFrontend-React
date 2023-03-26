import React, { useState, useEffect } from 'react';
import './HeaderElements.css';


const RandomLetters = () => {
    const [letters, setLetters] = useState("");
  
    useEffect(() => {
        const numOfLetters = Math.round(window.innerHeight / 5);
        let newLetters = "";
        for (let i = 0; i < numOfLetters; i++) {
            const randomCode = Math.floor(Math.random() * 26) + 97;
            newLetters += String.fromCharCode(randomCode);
        }
        setLetters(newLetters);
    }, []);

    return <div className='line'>{letters}</div>;
};

const Header = () => {
    return (
        <div className='header'>
            <div className='first_section'>
                <div className='sections_inverted'>
                    <h1 className='header_number'>01.</h1>
                    <h1 className='header_text'>INTRODUCTION</h1>
                </div>
                <RandomLetters />
                <div className='sections'>
                    <h1 className='header_number'>01.</h1>
                    <h1 className='header_text'>INTRODUCTION</h1>
                </div>
            </div>
            <div className='first_section'></div>
        </div>
    );
};

export default Header;
