import React from 'react'
import { Link } from 'react-router-dom'
import AmbulancePicture from '../../assets/images/Ambulance_section_als.png'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import SliderItems from './AmbulanceSliderData'
import PointerImage from '../../assets/images/PointerImage.png'
import '../../styles/ambulanceSection.scss'
import { useState } from 'react'

import styled from 'styled-components'
const Wrapper = styled.div`
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Pointer = styled.div`
  ${'' /* margin-left: ((props) =>props.slideIndex *35)vw; */}
  ${'' /* transform: translateX(${(props) => props.slideIndex * 15}vw); */}
`
function Ambulance() {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }
  // const [pointerIndex, setPointerIndex] = useState(1)
  // const handlePointer = (slideIndex) => {
  //   if (slideIndex === 0) {
  //     setPointerIndex(pointerIndex)
  //   } else if (slideIndex === 1) {
  //     setPointerIndex(3)
  //   } else {
  //     setPointerIndex(5)
  //   }
  // }

  return (
    <section className="ambulanceSection">
      <h1>Types of Ambulances</h1>
      <div className="ambulanceType">
        <div className="ambulances">
          <div>
            <img src={AmbulancePicture} alt="" />
          </div>
          <h1>ALS</h1>
          <p>(Advanced life support)</p>
        </div>
        <div className="ambulances">
          <div>
            <img src={AmbulancePicture} alt="" />
          </div>
          <h1>BLS</h1>
          <p>(Basic life support)</p>
        </div>
        <div className="ambulances">
          <div>
            <img src={AmbulancePicture} alt="" />
          </div>
          <h1>PTS</h1>
          <p>(Patient transport Service)</p>
        </div>
      </div>
      <Pointer
        slideIndex={slideIndex + 1}
        // pointerIndex={() => handlePointer(slideIndex)}
        className="pointer"
      >
        <img src={PointerImage} alt="" />
      </Pointer>
      <div className="ambulanceDescription">
        <BiLeftArrow
          className="arrow leftArrow"
          onClick={() => handleClick('left')}
          // onClick={() => handlePointer(slideIndex)}
        />
        <div className="slider">
          {SliderItems.map((item) => {
            return (
              <Wrapper
                key={item.id}
                slideIndex={slideIndex}
                className="imageAndDescription"
              >
                <div className="ambulanceTypeImage">
                  <img src={item.imgSrc} alt="Ambulance" />
                </div>
                <div className="ambulanceDescriptionCaption">
                  <h1>{item.title}</h1>
                  <p>{item.desc}</p>
                  <div className="ambulanceBookButton">
                    <Link className="linkTag" to="/book">
                      Book Now
                    </Link>
                  </div>
                </div>
              </Wrapper>
            )
          })}
        </div>

        <BiRightArrow
          onClick={() => handleClick('right')}
          className="arrow rightArrow"
        />
      </div>
    </section>
  )
}

export default Ambulance
