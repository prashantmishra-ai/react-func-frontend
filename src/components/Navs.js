import React from 'react'
import { Link } from 'react-router-dom'
const Navs = () => {
  return (
    <div>
      <Link to="/wine">Test for Wine API</Link> <br />
      <Link to="/iris">Test for Iris API</Link> <br />
      <Link to="/calhousing">Test for Calhousing API</Link> <br />
    </div>
  )
}

export default Navs
