import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FiYoutube } from 'react-icons/fi'

import ConnectImage from '../../assets/images/connect_white.png'
import '../../styles/footer.scss'

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="about">
          <h2>About </h2>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/media">Media</Link>
        </div>
        <div className="joinUs">
          <h2>Join Us</h2>
          <Link to="/join_us">Join Us</Link>
          <Link to="">Privacy Policy</Link>
          <Link to="">Refund Policy</Link>
          <Link to="">Cancellation Policy</Link>
        </div>
        <div className="help">
          <h2>Help</h2>
          <Link to="">Contact Us</Link>
          <Link to="">FAQs</Link>
          <Link to="">Accessibility</Link>
        </div>
        <div className="social">
          <div className="connectImage">
            <img src={ConnectImage} alt="" />
          </div>
          <div className="socialIcons">
            <Link to="/facebook">
              <FaFacebookF />
            </Link>
            <Link to="/instagram">
              <FaInstagram />
            </Link>
            <Link to="/twitter">
              <FaTwitter />
            </Link>
            <Link to="/youtube">
              <FiYoutube />
            </Link>
          </div>
        </div>
      </section>
      <section className="mobile_responsive-social-links">
        <div className="social">
          <Link to="/facebook">
            <FaFacebookF />
          </Link>
          <Link to="/instagram">
            <FaInstagram />
          </Link>
          <Link to="/twitter">
            <FaTwitter />
          </Link>
          <Link to="/youtube">
            <FiYoutube />
          </Link>
        </div>
        <div className="policySectionMobile">
          <Link to="">Terms of services</Link>
          <Link to="">Privacy Policy</Link>
        </div>
      </section>
      <section className="footerPolicySection">
        <div className="reserveSection">
          <p>&copy; 2022 Connect</p>
          <p>All rights are reserved</p>
        </div>
        <div className="policySection">
          <Link to="">Terms of services</Link>
          <Link to="">Privacy Policy</Link>
        </div>
      </section>
    </>
  )
}

export default Footer
