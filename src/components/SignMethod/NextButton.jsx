import React from 'react'
import { Link } from 'react-router-dom'
import './nextButton.scss'
const NextButton = ({ NextPage, ButtonText }) => {
  return (
    <div className="nextButton">
      <Link className="linkButton" to={NextPage}>
        {ButtonText}
      </Link>
    </div>
  )
}

export default NextButton
