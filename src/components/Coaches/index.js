import './index.scss'
import React, { useState } from 'react'
import Combat from '../../assets/images/combat.jpeg'

const Coaches = () => {
  const [flip, setFlip] = useState(false)
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Combat} alt="Ivana" Style="width:400px; height:400px;" />
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Combat} alt="Stefan" Style="width:400px; height:400px;" />
          </div>
          <div className="flip-card-back">
            <h1>Stefan</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Coaches
