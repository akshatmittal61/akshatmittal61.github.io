import React from 'react'
import './about.css'
import wave from '../../images/wave.gif'

const About = () => {
  return (
    <main className='about'>
        <div className='about-head'>
            <h2 className='about-head__h2'>About Me</h2>
        </div>
        <div className='about-body'>
            <p className='about-body__p'>
                <span>
                    Hey there! 
                    <img src={wave} alt='Waving hand' /> 
                </span>
            </p>
            <p className='about-body__p'>
                <span>
                    I'm Akshat Mittal an aspiring MERN stack developer and an Open Source Enthusiast.
                </span>
            </p>
            <p className='about-body__p'>
                <span>
                    I am crazy about finding and exploring new technologies arising in the world of web, android and ML and many more.
                </span>
            </p>
        </div>
        <div className='about-head'>
            <h3 className='about-head__h3'>Education</h3>
        </div>
        <div className='about-body'>
            <p className='about-body__p'></p>
        </div>
    </main>
  )
}

export default About