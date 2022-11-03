import React from 'react'
import{useNavigate} from 'react-router-dom'
const Home = () => {
    
    const Navigate = useNavigate();

  return (
      <div>
          <h1>Home</h1>
          <h2>Simple examples for Routing process in react using 'react-router-dom'</h2>
          <p>Navigate to login </p>
          <button onClick={()=>Navigate("/login")}>Go to Login Page</button>
      </div>
  )
}

export default Home