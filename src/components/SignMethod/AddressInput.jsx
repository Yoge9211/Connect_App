import React from 'react'

import './addressInput.scss'

const AddressInput = ({ labelText, placeHolderText }) => {
  return (
    <div className="addressInputComponent">
      <label htmlFor="">{labelText}</label>
      <input type="text" />
      <p> {placeHolderText}</p>
    </div>
  )
}

export default AddressInput
