import React from 'react'
import {Link} from 'react-router-dom'
import {IoIosArrowDropdownCircle} from 'react-icons/io'

const Header = props => {
   return(
      <header className="header-container">
         <div className='logo-container'>
            <IoIosArrowDropdownCircle size={60} color={'white'}/>
            <h1>SHELFIE</h1>
         </div>
         <nav>
            <Link className='nav' to='/'>Dashboard</Link>         
            <Link className='nav' to='/add'>Add Inventory</Link>         
         </nav>
      </header>
   )
}

export default Header

