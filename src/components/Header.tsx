import React, { useState, useEffect } from 'react';
import $ from 'jquery';

import TextTransition, { presets } from 'react-text-transition';


const TEXTS: string[] = [
  'SOFTWARE ENGINEER',
  'SOFTWARE DEVELOPER',
  'JAVA DEVELOPER',
  'BACKEND DEVELOPER',
  'API DEVELOPER',
  'WEBSITE DEVELOPER'
];

const HeaderComponent = ({ }) => {

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    // Your custom logic here
    $('ul.nav').toggleClass('show');

  };

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearInterval(intervalId);
  }, []);



  return (
    <>
      <nav className="custom-navbar" data-spy="affix" data-offset-top="20">
        <div className="container">
          <a className="logo" href="#">Portfolio</a>
          <ul className="nav">
            <li className="item">
              <a className="link" href="#home">Home</a>
            </li>
            <li className="item">
              <a className="link" href="#about">About</a>
            </li>
            <li className="item">
              <a className="link" href="#resume">Resume</a>
            </li>
            <li className="item">
              <a className="link" href="#project">Project</a>
            </li>
            <li className="item ml-md-3">
              <a href="#contact" className="btn btn-primary">contact</a>
            </li>
          </ul>
          <a href="#" onClick={handleClick} id="nav-toggle" className="hamburger hamburger--elastic">
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </a>
        </div>
      </nav>
      <header id="home" className="header">
        <div className="overlay"></div>
        <div className="header-content container">
          <h1 className="header-title">
            <span className="up">HI!</span>
            <span className="down">I am Sopheak Reth</span>
          </h1>
          <p className="header-subtitle">
            <TextTransition springConfig={presets.wobbly as any}>{TEXTS[index % TEXTS.length]}</TextTransition>
          </p>
          <a href="#resume" className="btn btn-primary" >Visit My Experiences</a>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;