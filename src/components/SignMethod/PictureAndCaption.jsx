import React from 'react'
import SignInPicture from '../../assets/images/signup.png'

const PictureAndCaption = () => {
  return (
    <div className="signinpicture">
      <div className="picture">
        <img src={SignInPicture} alt="SignIn" />
      </div>
      <div className="caption">
        <h2>Sign In</h2>
        <p>Fill in the details given below</p>
      </div>
    </div>
  )
}

export default PictureAndCaption
