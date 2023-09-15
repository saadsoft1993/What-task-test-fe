import React from 'react'
import './style.scss'

import { Alert } from 'react-bootstrap';
import Input from 'app/components/Input'
import Button from 'app/components/Button'

const Login = () => {
  return (
    <div className="login-container">
      <form className="w-100">
        <div className="login-form-content">
          <h3 className="login-form-title">Sign In</h3>
          <div className="error-message my-4">
            <Alert className='text-danger alert alert-danger fade show'>
              This is a danger alert — check it out!
            </Alert>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <Input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <Input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-4">
            <Button className="btn btn-primary">
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;