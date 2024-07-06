import React from 'react'
import './Card.css'
import { GoArrowUpRight } from "react-icons/go";


function Card() {
  return (
    <div>
      <div className="card2">
        <div className="card_left">
            <h1>📚 Education</h1> 
            <br />
            <br />
            <br />
            <h3>Stanford University</h3>
            <br />
            <span className='span_card'>
            <p>MSc (Human Computer Interaction)</p>
            <p>• 2013-2015   <GoArrowUpRight />
            </p>
            </span>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <br />
            <h3>MIT Summer School</h3>
            <br />
            <span className='span_card'>
            <p>UX Training Bootcamp</p>
            <p>• 2013-2014 <GoArrowUpRight />
            </p>
            </span>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <br />
            <h3>California State University</h3>
            <br />
            <span className='span_card'>
            <p>BSc in Software Engineering</p>
            <p>• 2009-2012 <GoArrowUpRight />
            </p>
            </span>
            <br />
            <br />
            <hr />
        </div>
        <div className="card_right">
        <h1>💼 Work Experience</h1> 
            <br />
            <br />
            <br />
            <h3>SpaceFleet</h3>
            <br />
            <span className='span_card'>
            <p>Senior Product Designer</p>
            <p>• April 2019 - Current   <GoArrowUpRight />
            </p>
            </span>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <br />
            <h3>MusicMash</h3>
            <br />
            <span className='span_card'>
            <p>Information Architect</p>
            <p>• April 2016 - May 2017 <GoArrowUpRight />
            </p>
            </span>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <br />
            <h3>Kingdom</h3>
            <br />
            <span className='span_card'>
            <p>UI Designer</p>
            <p>• April 2016 - May 2017 <GoArrowUpRight />
            </p>
            </span>
            <br />
            <br />
            <hr />
        </div>
      </div>
    </div>
  )
}

export default Card
