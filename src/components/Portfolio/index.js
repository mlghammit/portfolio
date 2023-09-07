import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import websitePortfolio from '/Users/hamzakhamissa/react-website/src/assets/images/This Website.png'
import websitePhoto from '/Users/hamzakhamissa/react-website/src/assets/images/reactwebsite.jpg'
import councilWeb from '/Users/hamzakhamissa/react-website/src/assets/images/shelley-website.png'
import sortingAlgo from '/Users/hamzakhamissa/react-website/src/assets/images/Pathing-Algorithm.png'
import pcStore from '/Users/hamzakhamissa/react-website/src/assets/images/text-base-pc-store.png'
import { Contact, Gallary} from '/Users/hamzakhamissa/react-website/src/components/Portfolio/ImageGallery.js';

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    const Urls = [
        councilWeb,
        sortingAlgo,
        websitePortfolio,
        pcStore,
        websitePhoto,
        websitePhoto,
        websitePhoto,
        websitePhoto,
        websitePhoto,
      ];

    const Descriptions = [
        "Created & emplemented a comprehensive website for City Councillor and Budget Chief Shelley Carroll, this included SEO, mailchimp API integration, as well as website security, Javascript, HTML, CSS, & creating a website search engine",
        "Developed a pathfinding algorithm to navigate a pyramid of interconnected chambers. The algorithm optimally identifies paths by prioritizing treasure chambers, lighted ones, and then dim chambers. To handle backtracking in dead-end scenarios, I implemented a stack using a doubly linked list. Java Programming, Advanced Data Structures (doubly linked lists), Pathfinding Algorithms, Object-Oriented Programming, Exception Handling, Documentation.",
        "This website was made using elements: React Java Script, SCSS, HTML, SVG Animatics, Emailjs API, Google Maps API, Elements of UI design",
        "A Python-based PC shop simulation where users can choose to build a custom PC or purchase a pre-built one. that taught me about user-interaction input & Validation, taking in resposnes and checking if valid.",
        "Description for image 5",
        "Description for image 6",
        "Description for image 7",
        "Description for image 8",
        "Description for image 9",
    ];

    return (
        <>
        <div className="container portfolio-page">
          <h1 className="page-title"> 
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Portfolio".split("")}
              idx={15}
            />
          </h1>
          <Gallary imageUrls={Urls} imageDescriptions={Descriptions} />
          {/* <Contact className='about' /> */}
        </div>
        <Loader type="pacman" />
      </>
      
    );
}

export default Portfolio;
