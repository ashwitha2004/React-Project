import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Register from './pages/Register'
import Account from './pages/Account'

function FooterPips({current}){
  return (
    <div className="footer-nav">
      <span className={current===1? 'pip active':'pip'}></span>
      <span className={current===2? 'pip active':'pip'}></span>
      <span className={current===3? 'pip active':'pip'}></span>
      <span className={current===4? 'pip active':'pip'}></span>
    </div>
  )
}

export default function App(){
  const loc = useLocation();
  // map pathname to pip index
  const mapping = {'/':1,'/login':2,'/register':3,'/account':4}
  const current = mapping[loc.pathname] || 1

  return (
    <div className="app-shell">
      <div className="mobile-frame" role="region" aria-label="PopX mobile app">
        <div className="header">PopX</div>
        <div className="container">
          <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/account" element={<Account/>} />
          </Routes>
        </div>
        <FooterPips current={current} />
      </div>
    </div>
  )
}
