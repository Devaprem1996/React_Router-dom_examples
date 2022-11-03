import React from 'react'
import{useParams} from 'react-router-dom'

const Project = () => {
    const {names} = useParams();
  return (
      <div>
          <h1>Project</h1>
          <h3>Routing to different names using useParams </h3>
          <h2>Project name is "{names}" </h2>
    </div>
  )
}

export default Project