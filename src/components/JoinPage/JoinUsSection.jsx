import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/joinUsSection.scss'

function JoinUsSection() {
  return (
    <section className="joinUsSection">
      <div className="joinDescription">
        <span>
          <h1>Join</h1>
          <p>our vast network</p>
        </span>

        {/* <h1>Join our vast network</h1> */}
        <p>Be our integral part of our team of community service</p>
        <Link className="JoinButton" to="/join_us">
          Join Us
        </Link>
      </div>
      <div className="joinImage">{/* <img src={JoinImage} alt="" /> */}</div>
    </section>
  )
}

export default JoinUsSection
