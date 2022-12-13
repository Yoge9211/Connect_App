import React from 'react'

import About_us_pic_4 from '../../assets/images/aboutUs/about_us_pic_4.png'
import About_us_pic_3 from '../../assets/images/aboutUs/about_us_pic_3.png'
import About_us_pic_2 from '../../assets/images/aboutUs/about_us_pic_2.png'
import About_us_pic_1 from '../../assets/images/aboutUs/about_us_pic_1.png'

import '../../styles/about_us.scss'

function About_us() {
  return (
    <section className="about_us_page">
      <div className="headPart"></div>
      <div className="about_us_caption">
        <h1>About Us</h1>
        <p>
          Connect provides 24/7 emergency and medical transport support. Our
          fleet of 100+ ambulance can support patients in 15mins across mumbai,
          equipped with ALS, BLS and Patient Transport Ambulance.
        </p>
      </div>
      <div className="whatWeProvide">
        <h1>What services we provide</h1>
        <div className="servicescard">
          <div className="aboutUsCard">
            <div className="about_us_picture">
              <img src={About_us_pic_4} alt="" />
            </div>
            <h1>Easy to use</h1>
            <p>Connect is a 24*7 Ambulance Booking Service Platform</p>
          </div>
          <div className="aboutUsCard">
            <div className="about_us_picture">
              <img src={About_us_pic_2} alt="" />
            </div>
            <h1>Secured protocal</h1>
            <p>Available for emergency and non- emergency health situations</p>
          </div>
          <div className="aboutUsCard">
            <div className="about_us_picture">
              <img src={About_us_pic_3} alt="" />
            </div>
            <h1>Fully functional</h1>
            <p>
              Ambulances are equipped with all the required medical facilities
              and health professionals.
            </p>
          </div>
          <div className="aboutUsCard">
            <div className="about_us_picture">
              <img src={About_us_pic_1} alt="" />
            </div>
            <h1>Easy to track</h1>
            <p>
              Book via call or website or app with inbuilt live location
              tracking feature.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About_us
