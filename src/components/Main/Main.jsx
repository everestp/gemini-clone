import React from 'react'
import { assets } from '../../assets/assets'
import './Main.css'

const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>Juhi.ai</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Everest.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest Beautiful place to see on upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>

                <div className="card">
                    <p>Briefly Summarize this concept</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>

                <div className="card">
                    <p>BrainStorm team building</p>
                    <img src={assets.message_icon} alt="" />
                </div>

                <div className="card">
                    <p>Improve Readability of  code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter Promt Here'/>
                    <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} alt="" />
                </div>
               
                </div>
                <p className='bottom-info'>
Juhi may be wrong  please verify the information provided by Juhi.
            </p>
            </div>
          
        </div>

    </div>
  )
}

export default Main