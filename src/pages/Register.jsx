import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register(){
  const [form,setForm]=useState({full:'',phone:'',email:'',password:'',company:''})
  const [agency,setAgency]=useState('no')
  const nav = useNavigate()

  function onChange(e){
    setForm({...form,[e.target.name]:e.target.value})
  }
  function submit(e){
    e.preventDefault()
    // basic validation
    if(!form.full||!form.phone||!form.email||!form.password){ alert('Please fill required fields'); return }
    nav('/account')
  }

  return (
    <div>
      <h2 className="huge">Create your PopX account</h2>
      <div style={{height:8}}></div>

      <form onSubmit={submit}>
        <div className="form-row">
          <label style={{fontSize:13}}>Full Name*</label>
          <input name="full" className="input" value={form.full} onChange={onChange} placeholder="Marry Doe" />
        </div>
        <div className="form-row">
          <label style={{fontSize:13}}>Phone number*</label>
          <input name="phone" className="input" value={form.phone} onChange={onChange} placeholder="9876543210" />
        </div>
        <div className="form-row">
          <label style={{fontSize:13}}>Email address*</label>
          <input name="email" className="input" value={form.email} onChange={onChange} placeholder="marry@example.com" />
        </div>
        <div className="form-row">
          <label style={{fontSize:13}}>Password*</label>
          <input name="password" type="password" className="input" value={form.password} onChange={onChange} placeholder="Create password" />
        </div>
        <div className="form-row">
          <label style={{fontSize:13}}>Company name</label>
          <input name="company" className="input" value={form.company} onChange={onChange} placeholder="Company name (optional)" />
        </div>

        <div className="form-row">
          <label style={{fontSize:13}}>Are you an Agency?</label>
          <div className="radio-row">
            <label><input type="radio" name="agency" checked={agency==='yes'} onChange={()=>setAgency('yes')} /> Yes</label>
            <label><input type="radio" name="agency" checked={agency==='no'} onChange={()=>setAgency('no')} /> No</label>
          </div>
        </div>

        <div style={{marginTop:12}}>
          <button className="button" type="submit">Create Account</button>
        </div>
      </form>
    </div>
  )
}
