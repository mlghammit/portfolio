import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'



const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />
  
      <svg
        width="500"
        height="500"
        version="1.0"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M96 487.5 c0 -1.2 -2.7 -1.5 -16.2 -1.7 l-16.3 -0.3 0 -238.5 0 -238.5 57.5 0 57.5 0 0.3 16.3 c0.1 9.7 0.6 16.2 1.2 16.2 0.6 0 1 27.3 1 76 l0 76 15 0 c9.3 0 15 0.4 15 1 0 0.7 19.2 1 55.5 1 l55.5 0 0 -93.5 0 -93.5 57.3 0.2 57.2 0.3 0.3 16.2 c0.1 9.8 0.6 16.3 1.2 16.3 0.7 0 1 79.1 1 224 l0 224 -42.5 0 c-37.1 0 -42.5 -0.2 -42.5 -1.5 0 -1.3 -2.4 -1.5 -16 -1.5 l-16 0 0 -77.5 c0 -68.2 -0.2 -77.5 -1.5 -77.5 -1.3 0 -1.5 -2.3 -1.5 -14.5 l0 -14.5 -69 0 -69 0 0 93.5 0 93.5 -42.5 0 c-36.8 0 -42.5 -0.2 -42.5 -1.5z M96 493 l0 -7 41 0 41 0 0 -93.5 0 -93.5 72 -0.2 72 -0.3 0 16.3 0 16.2 -55.5 0 -55.5 0 0 84.5 0 84.5 -57.5 0 -57.5 0 0 -7z M354 493 l0 -7 41 0 41 0 0 -238.5 0 -238.5 -57 -0.3 -57 -0.2 57.2 0 57.3 0 0.3 16.2 0.2 16.3 16 0 16 0 0 229.5 0 229.5 -57.5 0 -57.5 0 0 -7z M63.5 246.8 l0 -238.3 57.5 0 57.5 0 0.3 16.3 0.2 16.2 16 0 16 0 0 77 0 77 55.3 0.3 c54.3 0.2 54.1 0.2 -16.5 0.5 l-71.8 0.2 0 -93.5 0 -93.5 -57 0 -57 0 -0.3 238 -0.2 238 0 -238.2z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo