import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <>
    <div className="login-form-container">
  <div className="login-desktop-img-container">
    <img
      className="login-desktop-img"
      src="https://res.cloudinary.com/dinhpbueh/image/upload/v1662553915/LoginImageDesktop_w3keid.png"
      alt=""
    />
  </div>
  <div className="form-container">
    <img
      className="login-mobile-img"
      src="https://res.cloudinary.com/dinhpbueh/image/upload/v1662553670/Ellipse_99_gsgnqs.png"
      alt="website login"
    />
    <img
      className="login-website-logo"
      src="https://res.cloudinary.com/dinhpbueh/image/upload/v1662553813/BookHub_qnzptf.png"
      alt="login website logo"
    />
    <form className="form">
      <div className="input-container">
        <label className="input-label" htmlFor="username">
          Username*
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          placeholder="Username"
          defaultValue=""
        />
      </div>
      <div className="input-container">
        <label className="input-label" htmlFor="password">
          Password*
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          placeholder="Password"
          defaultValue=""
        />
      </div>
      <div className="input-container">
        <div className="checkbox-input-container">
          <input
            id="checkboxInput"
            type="checkbox"
            className="checkbox-input-field"
          />
          <label className="input-label checkbox-label" htmlFor="checkboxInput">
            Show Password
          </label>
        </div>
      </div>
      <button type="submit" className="login-button">
        Login
      </button>
    </form>
  </div>
</div>

    </>
  )
}
