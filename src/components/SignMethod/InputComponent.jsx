import React from 'react'

import './inputComponent.scss'

const InputComponent = ({ labelText, placeHolderText }) => {
  return (
    <div className="inputComponent">
      <label htmlFor="">{labelText}</label>
      <input type="text" />
      <p> {placeHolderText}</p>
    </div>
  )
}

export default InputComponent
