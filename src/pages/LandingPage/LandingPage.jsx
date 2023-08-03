import React from 'react'
import "../../bootstrap.min.css"
import "./LandingPage.css"
import Nav from '../../components/Nav/Nav'
import NavBar from '../../components/Nav/Nav'

const LandingPage = () => {
  return (
    <div className='landing-page'>
        <NavBar/>
        <div>
        <div className='flex'> 
            <img className='CarpoolingImage' src="/Assets/phone.svg" alt="Car pooling image" />
         </div>
        </div>
      <div className='textclass'>
        <div>
        <p className='textstyle'>Earn,<span className='textColor'>Connect Contribute</span>  to the society</p>
        </div>
            <button type="button" className='purplebutton'>Sign up</button>
            <button type="button" className='whitebutton'>Become a Driver</button>
        <div>
            <p>
                <span className='text1'>20+ Passengers</span>
                <span>10+ Drivers</span>
                <span>60+ routes</span>
            </p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage