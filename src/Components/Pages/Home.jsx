import React from 'react'
import './Home.css'
import meta from '../../assets/img/meta.jpeg'

import { FaWhatsapp } from 'react-icons/fa';
import Courses from './Courses/Courses';
import Community from './Community/Community';
import Plans from './Plans/Plans';
import AboutUS from './AboutUS/AboutUS';

const Home = () => {

  const HandleChange =()=>{
    window.open('https://www.youtube.com/@techflixai','_self')
  }
  const HanadleChange2=()=>{
    window.open('https://youtu.be/vTGL1102HUc', '_self')
  }
  
  return (
    <div>
      <>
      <section>
        <div className="container">
            <div className="home-container">
                <div className="home-content">
                        <h2 className='section-title'>Learn Everything For Free!!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eligendi.</p>
                        <div className="home-btn">
                            <button className="register-btn" onClick={HandleChange} >Get Started</button>
                            <button className="register-btn" onClick={HanadleChange2}>Watch Now</button>
                        </div>
                </div>
                <div className="home-img">
                    <div className="home-img-wrapper">
                        <div className="box-01">
                            <div className="box-img">
                                <img src={meta} alt="" />
                            </div>
                        </div>

                        <div className="whatsapp-container">
                            <h5>500 + Students</h5>
                            <FaWhatsapp color='green '/>
                        </div>
                        <div className="support">
                          <h5>Active Support</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <Courses/>
      <Community/>
      <Plans/>
      <AboutUS/>
      </>

    </div>
  )
}

export default Home
