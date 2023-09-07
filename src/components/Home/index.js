import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';
import Animation from '/Users/hamzakhamissa/react-website/src/components/Home/Animation/animation.js';
import { About } from '/Users/hamzakhamissa/react-website/src/components/Home/About.home.js';
import { Cube } from '/Users/hamzakhamissa/react-website/src/components/Home/Cube.js';
import { Project } from '/Users/hamzakhamissa/react-website/src/components/Home/Portfolio.home.js';
import { Contact } from '/Users/hamzakhamissa/react-website/src/components/Home/Contact.home.js';
import { Resume } from '/Users/hamzakhamissa/react-website/src/components/Home/resume.js';
import { Scroll } from '/Users/hamzakhamissa/react-website/src/components/Home/scroll.js'
import { Socials } from '/Users/hamzakhamissa/react-website/src/components/Home/Socials.js'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ['a', 'm', 'z', 'a'];
  const jobArray = [
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);


  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <section id="home-section"> {/* Home Section */}
            <h3>
              <About />
              <Cube />
            </h3>

            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m&nbsp; </span>
              <span className={`${letterClass} _15`}>H</span>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={18}
              />
            </h1>
            <h2> <Animation /> </h2>
          </section>

          <section id="portfolio-section"> {/* Portfolio Section */}
            <div>
              <Project />
            </div>
          </section>

          <section id="contact-section"> {/* Contact Section */}
            <div>
              <Contact />
            </div>
          </section>

          <section id="flat-button"> {/* Resume Section */}
            <div>
              <Resume />
            </div>
          </section>
          <section id="scroll-learning">
          <div>
            <Scroll />
          </div>
          </section>
          <section id="social-media">
          <div>
            <Socials />
          </div>
          </section>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
