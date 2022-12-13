import React from 'react'

import InputComponent from './InputComponent'
import AddressInput from './AddressInput'
import NextButton from './NextButton'

const FormSection = () => {
  return (
    <>
      <div className="formsection">
        <div className="mainHeading">
          <h1>Personal Information</h1>
        </div>
        <div className="nameInput">
          <form action="/bankinformation" method="POST">
            <div className="name">
              <InputComponent labelText="Name" placeHolderText="Full name" />
              <InputComponent placeHolderText="Full name" />
            </div>
            <div className="nameMobileView">
              <InputComponent labelText="Name" placeHolderText="Full name" />
            </div>
            <InputComponent
              labelText="Email"
              placeHolderText="example@example.com"
            />
            <div className="address">
              <AddressInput
                labelText="Address"
                placeHolderText="street address"
              />
              <AddressInput placeHolderText="street address line 2" />
            </div>
            <div className="name">
              <InputComponent placeHolderText="city" />
              <InputComponent placeHolderText="state/province" />
            </div>
            <AddressInput placeHolderText="postal/zip code" />
            <InputComponent labelText="phone number" />
          </form>
        </div>
      </div>
      <NextButton ButtonText="Next" NextPage="/bankinformation" />
    </>
  )
}

export default FormSection
