import React from 'react'
import {Link} from 'react-router-dom'

const Header = props => {
   return(
      <header>
         <Link to='/'>Dashboard</Link>         
         <Link to='/add'>Form</Link>         
      </header>
   )
}

export default Header

