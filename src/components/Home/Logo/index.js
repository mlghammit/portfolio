import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import LogoS from '../../../assets/images/logo-s.png';
import './index.scss';

const Logo = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // 1 second delay for loading animation

    const drawTimer = setTimeout(() => {
      setIsDrawing(true);
    }, 4000); // 4 second delay for drawing animation

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(drawTimer);
    };
  }, []);

  const logoAnimation = useSpring({
    opacity: isLoaded ? 1 : 0,
  });

  const outlineAnimation = useSpring({
    opacity: isDrawing ? 1 : 0,
  });

  return (
    <div className="logo-container">
      <animated.img
        className={`solid-logo ${isLoaded ? 'loaded' : ''}`}
        src={LogoS}
        alt="JavaScript, Developer"
        style={logoAnimation}
      />

      <svg
        width="500"
        height="500"
        version="1.0"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="svg-container" fill="none">
          <animated.path
            className={`outline-logo ${isDrawing ? 'drawing' : ''}`}
            d="M96 487.5 c0 -1.2 -2.7 -1.5 -16.2 -1.7 l-16.3 -0.3 0 -238.5 0 -238.5 57.5 0 57.5 0 0.3 16.3 c0.1 9.7 0.6 16.2 1.2 16.2 0.6 0 1 27.3 1 76 l0 76 15 0 c9.3 0 15 0.4 15 1 0 0.7 19.2 1 55.5 1 l55.5 0 0 -93.5 0 -93.5 57.3 0.2 57.2 0.3 0.3 16.2 c0.1 9.8 0.6 16.3 1.2 16.3 0.7 0 1 79.1 1 224 l0 224 -42.5 0 c-37.1 0 -42.5 -0.2 -42.5 -1.5 0 -1.3 -2.4 -1.5 -16 -1.5 l-16 0 0 -77.5 c0 -68.2 -0.2 -77.5 -1.5 -77.5 -1.3 0 -1.5 -2.3 -1.5 -14.5 l0 -14.5 -69 0 -69 0 0 93.5 0 93.5 -42.5 0 c-36.8 0 -42.5 -0.2 -42.5 -1.5z"
            style={outlineAnimation}
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
