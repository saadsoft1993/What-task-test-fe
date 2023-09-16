import React, { useEffect } from 'react'
import { object, string } from 'yup'

import { Alert } from 'react-bootstrap';
import Input from 'app/components/Input'
import Button from 'app/components/Button'

import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { loginAction, clearError } from './store/slice'

import { RootState } from 'store'

import './style.scss'

const Login = () => {
  const loading: boolean = useSelector((state: RootState) => state.login.loading)
  const hasError: boolean = useSelector((state: RootState) => state.login.hasError)

  const dispatch = useDispatch()

  const validationSchema = object().shape({
    email: string().email().required("Email is required"),
    password: string().required("Password is required")
  })

  const { handleChange, values, errors, isValid } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: () => { },
  })

  const onLogin = () => {
    dispatch(loginAction({
      email: values.email,
      password: values.password
    }))
  }

  useEffect(() => {
    dispatch(clearError())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="login-container">
      <form className="w-100">
        <div className="login-form-content">
          <h3 className="login-form-title">Sign In</h3>
          {hasError && (
            <div className="error-message my-4">
              <Alert className='text-danger alert alert-danger fade show'>
                Please provide authentic credentials.
              </Alert>
            </div>
          )}
          <div className="form-group mt-3">
            <label>Email address</label>
            <Input
              name="email"
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && <p className='text-danger'>{errors.email}</p>}
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <Input
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && <p className='text-danger'>{errors.password}</p>}
          </div>
          <div className="d-grid gap-2 mt-4">
            <Button className="btn btn-primary" onClick={onLogin} disabled={!isValid || loading || !values.email || !values.password}>
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;