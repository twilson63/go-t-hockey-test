import React from 'react'
import { Button, TextField } from 'jrs-react-components'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div className="pl4">
        <h1>LOGIN</h1>
      </div>
      <div className="pa4">
        <form>
          <TextField label="User Name" optional={false} />
          <TextField label="Password" optional={false} />
          <Link to="/alerts">
            <Button>Login</Button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
