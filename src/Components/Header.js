import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import {Icon} from '@iconify/react';


function Header() {
  return (
    <div className='header'>
      <p className='image'>ROGU</p>

      <div className='header-center'>
        <input type="text" placeholder="What would you like to do?"></input>
        <SearchIcon />
      </div>

      <div className='header-right'>
        <p>Host a Space</p>
        <Icon icon='fa6-solid:language' height="24px" width="65px"/>
        <MenuIcon />

      </div>
    </div>
  )
}

export default Header