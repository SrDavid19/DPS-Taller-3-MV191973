import React from 'react'
import Picture from '../img/profile.png'

const profile = () => {
  return (
    <div>
        <img src={Picture} class="rounded float-start profile" alt="..."></img>
    </div>
  )
}

export default profile