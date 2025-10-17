import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome(){
  return (
    <div>
      <div style={{height:260,display:'flex',alignItems:'center',justifyContent:'center'}}>
        {/* Decorative circles as in video */}
        <svg width="160" height="200" viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g fill="#f59e0b" fillOpacity="0.95">
            <circle cx="30" cy="40" r="12"/>
            <circle cx="50" cy="70" r="12"/>
            <circle cx="70" cy="100" r="12"/>
            <circle cx="90" cy="130" r="12"/>
            <circle cx="110" cy="160" r="12"/>
            <circle cx="20" cy="20" r="12"/>
          </g>
        </svg>
      </div>

      <h2 className="huge">Welcome to PopX</h2>
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div style={{marginTop:18}}>
        <Link to="/register"><button className="button">Create Account</button></Link>
      </div>

      <div style={{marginTop:10}}>
        <Link to="/login"><button className="ghost">Already Registered? Login</button></Link>
      </div>
    </div>
  )
}
