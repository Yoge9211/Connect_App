import React from 'react'

import processStepsImage from '../../assets/images/processImage.svg'
import '../../styles/ourProcess.scss'

export default function OurProcess() {
  return (
    <section className="processSection">
      <div className="processCaption">
        <h1>Our Process</h1>
      </div>
      <div className="processSteps">
        <img src={processStepsImage} alt="ProcessImage" />
      </div>
    </section>
  )
}
