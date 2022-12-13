import React from 'react'
import Star from '../../assets/images/Mask_group_12.png'
import Headphone from '../../assets/images/Mask_group_11.png'
import MaskGroup10 from '../../assets/images/Mask_group_10.png'
import MaskGroup9 from '../../assets/images/Mask_group_9.png'

import '../../styles/whyPartnerUs.scss'

function WhyPartnerUS() {
  return (
    <section className="secondSection">
      <div className="caption">
        <h1>Why partner with us</h1>
      </div>
      <div className="cards">
        <div className="card1">
          <img src={Star} alt="" />
          <p>
            <h1>Perks</h1>
            We put people first in everything we do. With connect it is not
            periodic payments , no commisions from your earning . your earning
            are yours
          </p>
        </div>
        <div className="card2">
          <img src={Headphone} alt="" />
          <p>
            <h1>Prompt Payments</h1>
            We put people first in everything we do. With connect it is not
            periodic payments , no commisions from your earning . your earning
            are yours
          </p>
        </div>
        <div className="card3">
          <img src={MaskGroup10} alt="" />
          <p>
            <h1>Excellent Support</h1>
            We put people first in everything we do. With connect it is not
            periodic payments , no commisions from your earning . your earning
            are yours
          </p>
        </div>
        <div className="card4">
          <img src={MaskGroup9} alt="" />
          <p>
            <h1>Grow Bussiness</h1>
            We put people first in everything we do. With connect it is not
            periodic payments , no commisions from your earning . your earning
            are yours
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyPartnerUS
