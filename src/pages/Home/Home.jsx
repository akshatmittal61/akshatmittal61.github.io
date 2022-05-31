import React from 'react'
import me from '../../images/akshat_oval.png'
import {FiGithub,FiTwitter,FiLinkedin,FiMail,FiPhone} from 'react-icons/fi'
import './home.css'

const Home = () => {
    const socials=[
        {
            icon: <FiGithub />,
            username: '@akshatmittal61',
            link: 'https://github.com/akshatmittal61'
        },
        {
            icon: <FiTwitter />,
            username: '@akshatmittal61',
            link: 'https://twitter.com/akshatmittal61'
        },
        {
            icon: <FiLinkedin />,
            username: '@akshatmittal61',
            link: 'https://www.linkedin.com/in/akshatmittal61'
        },
        {
            icon: <FiMail />,
            username: 'akshatmittal2506@gmail.com',
            link: 'mailto:akshatmittal2506@gmail.com'
        },
        {
            icon: <FiPhone />,
            username: "+91 94568 49466",
            link: "tel:919456849466"
        },
    ]
  return (
    <main className='home'>
    <div className='home-left'>
        <div data-aos="fade-right" className='home-left-name'>
            <span>Akshat Mittal</span>
        </div>
        <div className='home-left-subtitle'>
            <span>MERN stack developer</span>
        </div>
        <div className='home-left-socials'>
        <ul>
            {
                socials.map((social,index)=>(
                    <li key={index}>
                    <a href={social.link} title={social.username} style={{fontSize: '2rem'}}>
                        {social.icon}
                    </a>
                    </li>
                ))
            }
            </ul>
        </div>
    </div>
    <div className='home-right'>
        <div className='home-right-image'>
            <img src={me} alt='Akshat Mittal' />
        </div>
    </div>
    </main>
  )
}

export default Home