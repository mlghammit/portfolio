import { useEffect, useState } from 'react'


import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Headshot from '../../assets/images/headshot.jpeg'

export function About() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious Computer Science student currently looking for
            a summer internship, with the opportuninity to work with the newest
            technologies and finding ways to challenge myself with all kinds of 
            learning by projects.
          </p>
          <p align="LEFT">
            I'm very confident, an advocate for leadership, and continous learning
            and is constant search for the next big opportuninity to better myself
            and my knowledge of the science
          </p>
          <p>
            If I were to give you a snippit of who I am, I will work in any field 
            that challenges me, I want to make the world better then I found in,
            with cracking some jokes along the way.
          </p>
        </div>

        <div>
              <img src={Headshot} alt="Headshot" className="headshot" />
        </div>
      </div>
    </>
  )
}
