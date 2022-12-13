import React from 'react'
import PictureAndCaption from './PictureAndCaption'
import FormSection from './FormSection'
import '../../styles/signin.scss'

const SignIn = () => {
  return (
    <>
      <section className="signInSection">
        <PictureAndCaption />
      </section>
      <FormSection />
    </>
  )
}

export default SignIn
