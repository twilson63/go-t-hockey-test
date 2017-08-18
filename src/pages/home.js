import React from 'react'
import { Button } from 'jrs-react-components'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="tc pa4">
        <h1> WELCOME </h1>
      </div>
      <div className="tc pa4">
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  )
}

export default Home
