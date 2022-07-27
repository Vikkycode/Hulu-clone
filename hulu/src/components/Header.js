import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {MdOutlineFlashOn} from 'react-icons/md'
import { MdLiveTv } from 'react-icons/md';
import {MdVideoLibrary} from 'react-icons/md';
import {AiOutlineSearch} from 'react-icons/ai'
import './header.css';

function Header() {
  return (
    <div className='header'>
        <div className='header__icons'>
            <div className='header__icon header__icon--active'>
               <AiFillHome className='icon' /> 
              <p>Home</p>
            </div>
            <div className='header__icon  '>
               <MdOutlineFlashOn className='icon' /> 
              <p>Flash</p>
            </div>
            <div className='header__icon '>
               <MdVideoLibrary className='icon' /> 
              <p>Video Lib</p>
            </div>
            <div className='header__icon  '>
               <AiOutlineSearch className='icon'/> 
              <p>Search</p>
            </div>
        </div>
            <img 
           src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
           alt="logo"
           />
    </div>
  )
}

export default Header