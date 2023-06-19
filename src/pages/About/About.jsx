import React from 'react'
import { Link } from 'react-router-dom'

import './About.css'

import Title from '../../components/UI/Title/Title'

const About = () => {
  return (
    <main className='main about'>
      <div className="container">
        <div className="main__paths">
          <Link to='/' className="main__path">Home</Link>
          <a href='#' className="main__path">About</a>
        </div>
        {/* title component */}
        <Title title="About us" clases="about" secondLeaf />
        <div className="about__content">
          <p><span>DAMAR AGROTRADE LLC</span> is a young team that appeared on the agricultural market in 2020. We are not afraid of difficulties and challenges. Therefore, even the difficult covid period and the global pandemic did not stand in the way of a successful start.</p>
          <p>So, <span>we are brave, we are driven</span> , we are the ones who develop crop production and help thousands of domestic farmers to become successful.</p>
          <p><span>Vision:</span> the company "DAMAR AGROTRADE" LLC is on a course to increase the prestige and trust of plant protection products made in UA. We want our customers to have access to quality products and consulting from team specialists in every region of Ukraine.</p>
          <p><span>Mission:</span> the entire product portfolio, consulting services of DAMAR AGROTRADE LLC are aimed at increasing the profitability of crop production in the changing climatic conditions of Ukraine. We also set ourselves the task of raising customers' awareness of modern methods of crop production...</p>
          <ul className='about__list'>
            <span>Values:</span>
            <li>itransparency of business relations with colleagues, counterparties, clients;</li>
            <li>equally high-class service for a small farmer and a powerful holding;</li>
            <li>improving the quality of goods and services;</li>
            <li>constant support of the partner at all stages of plant production;</li>
            <li>environmental friendliness in work, thoughts and goals;</li>
            <li>support of the domestic product and the domestic producer;</li>
            <li>constant self-development...."</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default About