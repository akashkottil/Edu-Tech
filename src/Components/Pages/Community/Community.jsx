import React from 'react'
import './Community.css'
import tc from '../../../assets/img/tc.png'

const Community = () => {

    const HandleChange=()=>{
        window.open('https://chat.whatsapp.com/H1qQxZ2iv5y0x5XE4dOg0b', '_self')
    }


  return (
    <div className='container'>
        <div className="start-wrapper">
            <div className="start-img">
                <img src={tc} alt="" />
            </div>
            <div className="start-content">
                <h2 className="section-title">
                    Join Our Free Tech Community
                </h2>
                <p>Unlock the power of knowledge and innovation by joinning our vibrant and free Whatsapp tech community</p>
                <button className='register-btn' onClick={HandleChange} >Join Now</button>
            </div>
        </div>
     
    </div>
  )
}

export default Community
