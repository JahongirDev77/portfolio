import React from 'react'
import './Banner.css'
import { FaTelegram } from "react-icons/fa";
import { SlActionRedo } from "react-icons/sl";
import { BiSolidUser } from "react-icons/bi";


function Banner() {
  return (
    <div>
      <div className="banner">
        <div className="banner_text">
            <h1><span>I design products </span>
            that delight and inspire people.
            </h1>
            <br />
            <br />
            <p>Hi! I'm Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups.</p>
            <div className="button">
            <button className='btn'>Book a call</button>
            <button className='btn2'>Download CV ›</button>
            </div>
        </div>
        <div className="banner_img"></div>
      </div>
      <br />
      <br />
      <div className="card">
        <span>
        <h3>Services</h3>
        <br />
        <h1>Design that solves problems,
          <br /> one product at a time.</h1>
        </span>
        <div className="main">


          {/* MAIN-1 */}
          <div className="main1">
          <FaTelegram className='icon'/>
          <br />
          <h3>What I can do for you</h3>
          <br />

          <p className='green'>Faster, better products that your
            <br /> users love. Here's all the services I
            <br /> provide:</p>
            <br />
            <p className='p'>Design Strategy</p>
            <br />
            <p className='p'>Web and Mobile App Design</p>
            <br />
            <p className='p'>Front-end Development</p>
          </div>



          {/* MAIN-2 */}
          <div className="main2">
          <SlActionRedo className='icon'/>
          <br />
          <h3>Applications I'm fluent in</h3>
          <br />

          <p className='green'>Every designer needs the right
            <br /> tools to do the perfect job.
            <br /> Thankfully, I'm multilingual.</p>
            <br />
            <p className='p'>Sketch</p>
            <br />
            <p className='p'>Webflow</p>
            <br />
            <p className='p'>Figma</p>
          </div>


          {/* MAIN-3 */}
          <div className="main3">
          <BiSolidUser className='icon'/>
          <br />
          <h3>What you can expect</h3>
          <br />

          <p className='green'>I design products that are more
            <br /> than pretty. I make them shippable
            <br /> and usable.</p>
            <br />
            <p className='p'>Clean and functional</p>
            <br />
            <p className='p'>Device and user friendly</p>
            <br />
            <p className='p'>Efficient and maintainable</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
