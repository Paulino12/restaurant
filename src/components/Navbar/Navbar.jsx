import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images'
import './Navbar.css'


import './Navbar.css';

const Navbar = () => {

  const navItems = [
    {
      id: 1,
      title: 'home',
      url: '#home'
    },
    {
      id: 2,
      title: 'About',
      url: '#aboutus'
    },
    {
      id: 3,
      title: 'Menu',
      url: '#menu'
    },
    {
      id: 4,
      title: 'Awards',
      url: '#awards'
    },
    {
      id: 5,
      title: 'Contact',
      url: '#contact'
    }
  ]

  const [navTarget, setNavTarget] = useState('')

  const handleNav = (e) => {
    e.preventDefault()
    let target = e.target.getAttribute('href')
    setNavTarget(target)
    let location = document.querySelector(target).offsetTop
    window.scrollTo({
      left: 0,
      top: location - 55
    })
  } 

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='app__navbar' id='navbar'>
      <div className='app__navbar-logo'>
        <img src={images.saba} alt="app logo" />
      </div>
      <ul className='app__navbar-links'>
        {
          navItems.map((navItem, index) => {
            return <li onClick={handleNav} className={`p__opensans ${navTarget === navItem.url ? 'app__navbar-active': '' }`} key={navItem.id}>
                <a href={navItem.url}>{navItem.title}</a>
                </li>
            })
        }
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>Log In/Register</a>
        <div />
        <a href='/' className='p__opensans'>Book a Table</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        {
          toggleMenu && (
            <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
              <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
              <ul className='app__navbar-smallscreen_links'>
                {
                  navItems.map((navItem, index) => {
                    return <li onClick={handleNav} className={`p__opensans ${navTarget === navItem.url  ? 'app__navbar-active': '' }`} key={navItem.id}>
                        <a href={navItem.url}>{navItem.title} {navTarget}</a>
                        </li>
                    })
                }
              </ul>
            </div>
          )
        }
          
      </div>
    </div>
  ) 
};

export default Navbar;
