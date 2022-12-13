import React from 'react'
import AddressInput from './AddressInput'
import InputComponent from './InputComponent'
import NextButton from './NextButton'
import './bankInformation.scss'

const BankInformation = () => {
  return (
    <>
      <section className="bankInformation">
        <div className="bankCaption">
          <h1>Bank Information</h1>
        </div>
        <form action="" className="bankFormSection">
          <div className="bankName">
            <InputComponent labelText="Name" placeHolderText="Bank name" />
            <InputComponent placeHolderText="Branch name" />
          </div>
          <div className="name">
            <InputComponent placeHolderText="First name" />
            <InputComponent placeHolderText="Last name" />
          </div>
          <InputComponent placeHolderText="Branch number" />
          <div className="address"></div>
          <AddressInput
            labelText="Branch Address"
            placeHolderText="street address"
          />
          <AddressInput placeHolderText="street address line 2" />
          <div className="city">
            <InputComponent placeHolderText="city" />
            <InputComponent placeHolderText="state/province" />
          </div>
          <div className="zipCode">
            <AddressInput placeHolderText="postal/zip code" />
          </div>
        </form>
      </section>
      <NextButton NextPage="/vehicle" ButtonText="Next" />
    </>
  )
}

export default BankInformation
