/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import connect from '../../assets/images/connect.png'
import { CgMenu, CgClose } from 'react-icons/cg'
import '../../styles/header.scss'
class Header extends Component {
  state = {
    clicked: false,
  }
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    })
  }
  handleHideClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    })
  }
  render() {
    return (
      <nav className="nav">
        <div className="logoImage">
          <img src={connect} alt="Connect" />
        </div>
        <div className="link">
          <div className={this.state.clicked ? 'links' : 'links active'}>
            <Link
              className="mobile-links"
              to="/ambulance"
              onClick={this.handleHideClick}
            >
              Ambulance
            </Link>
            <Link
              className="mobile-links"
              to="/join_us"
              onClick={this.handleHideClick}
            >
              Join Us
            </Link>
            <Link
              className="mobile-links"
              to="/contact"
              onClick={this.handleHideClick}
            >
              Contact Us
            </Link>
            <Link
              className="mobile-links"
              to="/about"
              onClick={this.handleHideClick}
            >
              About
            </Link>
          </div>
        </div>
        <div className="bookButtonDiv">
          <Link
            className="bookButton"
            to="/"
            // to={isAuthenticated ? '/bookAmbulance' : 'Signup'}
          >
            Book Now
          </Link>
        </div>
        <div onClick={this.handleClick} className="mobileNavIcon">
          {/* <CgMenu
          onClick={() => {
            setOpenMenu(true)
          }}
          className="openMenu "
        />
        <CgClose
          onClick={() => {
            setOpenMenu(false)
          }}
          className="closeMenu"
        /> */}
          {this.state.clicked ? (
            <CgClose className="icon" />
          ) : (
            <CgMenu className="icon" />
          )}
        </div>
      </nav>
    )
  }
}

export default Header
