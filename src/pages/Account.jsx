import React from 'react'
import avatar from '../assets/avatar.jpeg';

export default function Account(){
  return (
    <div>
      <h3 style={{fontSize:16,fontWeight:600}}>Account Settings</h3>
      <div style={{height:12}}></div>
      <div className="card">
        <div className="profile">
          <div className="avatar"><img src="/src/assets/avatar.jpeg" alt="avatar" /></div>
          <div>
            <div style={{fontWeight:700}}>Marry Doe</div>
            <div className="text-muted">Marry@Gmail.Com</div>
          </div>
        </div>

        <p className="text-muted">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat. Sed Diam.</p>
      </div>
    </div>
  )
}
