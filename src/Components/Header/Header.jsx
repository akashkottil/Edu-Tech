import React from 'react'
import logo from '../../assets/img/logo.png'
const Header = () => {
    const nav_title = [
        {
          path: '/', display: 'Home'
        },
        {
          path: '/services', display: 'Services'
        },
        {
          path: '/courses', display: 'Courses'
        },
        {
          path: '/about-us', display: 'About Us'
        },
      ]
  return (


    <div>
      <header className="header">
        <div className="container">
            <div className="nav-container">
                <div className="logo">
                    <div className="logo-img">
                        <img src={logo} alt="" />
                    </div>
                    <h3>TechFlix AI</h3>
                </div>
                <div className="navigation">
                    <ul className='menu' >
                        {
                            nav_title.map((item)=>(
                                <li className='nav-item'>{item.display}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header
