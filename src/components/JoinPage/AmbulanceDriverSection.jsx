import React from 'react'
import MaskMan from '../../assets/images/Mask_group_3.png'

import '../../styles/ambulanceDriverSection.scss'

function Ambulance() {
  return (
    <section className="AmbulanceDriverSection">
      <div className="heading">
        <h1>Ambulance Driver</h1>
      </div>
      <div className="Details">
        <div className="image">
          <img src={MaskMan} alt="" />
        </div>
        <div className="listOfBenefits">
          <ul>
            <li>Join our community of 500 ambulance service providers</li>
            <li>Customize your vehicle with connect app</li>
            <li>Get the accurate lead based on your location</li>
            <li>Track your booking through the app</li>
            <li>Instant payment after completion of every ride</li>
            <li>Get guidance of support team in case of any technical issue</li>
          </ul>
        </div>
      </div>
      <div className="joinUsNowButton">
        <a href="/fdb">Join Us Now</a>
      </div>
    </section>
  )
}

export default Ambulance
