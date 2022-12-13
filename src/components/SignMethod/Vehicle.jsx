import React from 'react'
import InputComponent from './InputComponent'
import NextButton from './NextButton'

import './vehicle.scss'

const Vehicle = () => {
  return (
    <>
      <section className="vehicleSection">
        <div className="vehicleCaption">
          <h1>Vehicle details</h1>
        </div>
        <form action="" className="vehicleFormData">
          <div className="firstVehicleDiv">
            <InputComponent labelText="Types of vehicle" />
            <InputComponent labelText="Insurance provider" />
          </div>
          <div className="secondVehicleDiv">
            <InputComponent labelText="Driver license number" />
            <InputComponent labelText="Insurance policy number" />
          </div>
        </form>
      </section>
      <NextButton ButtonText="Submit" NextPage="/" />
    </>
  )
}

export default Vehicle
