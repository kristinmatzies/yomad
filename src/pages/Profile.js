import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Profile({ events, profiles }) {
  return (
    <main>
      <NavLink to="/addprofile">Add Profile</NavLink>
      <section>
        {profiles.map((profile, index) => (
          <div key={index}>
            <p>{profile.name}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
