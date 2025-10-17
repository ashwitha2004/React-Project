import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const nav = useNavigate()

  function submit(e){
    e.preventDefault()
    if(!email||!password){ setError('Please fill both fields'); return }
    // mock login -> navigate to account
    nav('/account')
  }

  return (
    <div>
      <h2 className="huge">Signin to your PopX account</h2>
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <form onSubmit={submit} style={{marginTop:12}}>
        <div className="form-row">
          <label style={{fontSize:13}}>Email Address</label>
          <input className="input" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter email address" />
        </div>
        <div className="form-row">
          <label style={{fontSize:13}}>Password</label>
          <input type="password" className="input" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter password" />
        </div>
        {error && <div style={{color:'#ef4444',marginBottom:8}}>{error}</div>}
        <button className="button" type="submit">Login</button>
      </form>
    </div>
  )
}
