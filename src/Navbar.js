import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
        return (
      
      <div>
          <h1>Navbar</h1>
                <Link style={{margin:"5px"}} to="/">Home</Link>
          <Link style={{margin:"5px"}} to="/project">Project</Link>
          <Link style={{margin:"5px"}} to="/contact">Contact</Link>
          <Link style={{margin:"5px"}}to="/login">Login</Link>

    </div>
  )
}

export default Navbar