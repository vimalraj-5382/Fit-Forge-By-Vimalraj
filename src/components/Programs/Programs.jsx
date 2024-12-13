import React from 'react';
import './Programs.css';
import {programsData} from '../../data/programsData';
import rightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="Programs" id='programs'>

        {/* Header for the programs */}
        <div className="programs-header">
            <span className='stroke-text'> Explore our</span>Programs<span className='stroke-text'>to Shape you</span>
        </div>

        <div className="program-categories">
            {programsData.map((programs)=>(
                <div className="gategories">
                    {programs.image}
                    <span>{programs.heading}</span><span>{programs.details}</span>
                    <div className="join-now"><span>Join Now</span><img src={rightArrow} /></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs