import React from 'react'
import { useGlobalContaxt } from '../../context'

import './Home.css'

import { FaLeaf } from 'react-icons/fa'

import aboutPhone from '../../assets/images/home-about.jpg'
import fullscrennImage from "../../assets/images/main-photo.jpg"

import { text, partners } from '../../data'
import Article from '../../components/Article/Article'
import SectionSwiper from '../../components/UI/SectionSwiper/SectionSwiper'
import Title from '../../components/UI/Title/Title'
import { useProducts } from '../../hooks/useProducts'
import { useState } from 'react'


const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const { specialProducts, isSpecialLoading } = useProducts()
  return (
    <main className='main home'>
      <section className="home__fullscreen fullscreen">
        <div className='fullscreen__fon-image'></div>
        <div className="fullscreen__container container">
          <div className="fullscreen__content">
            <h1 className="fullscreen__title">
              <FaLeaf className='leaf' />
              <span>Agricultural</span><br /> online store
            </h1>
            <p className="fullscreen__text">The main field of activity is the distribution of seeds, plant protection products, mineral macro- and microfertilizers</p>
            {windowWidth >= 767 && <a href='#' className="fullscreen__btn orange-btn">About compony</a>}
          </div>
          <div className="fullscreen__image">
            <img src={fullscrennImage} alt="" />
          </div>
          {windowWidth < 767 && <a href='#' className="fullscreen__btn orange-btn">About compony</a>}
        </div>
      </section>
      <div className="container">
        <section className="about-home home__section">
          <div className="about-home__img">
            <img src={aboutPhone} alt="about" />
          </div>
          <div className="about-home__content">
            <Title title="About us" clases="about-home" secondLeaf={false} />
            <p><span>DAMAR AGROTRADE LLC</span> is a young team that appeared on the agricultural market in 2020. We are not afraid of difficulties and challenges. Therefore, even the difficult covid period and the global pandemic did not stand in the way of a successful start.</p>
            <p>So, <span>we are brave, we are driven</span> , we are the ones who develop crop production and help thousands of domestic farmers to become successful.</p>
            <p><span>Vision:</span> the company "DAMAR AGROTRADE" LLC is on a course to increase the prestige and trust of plant protection products made in UA. We want our customers to have access to quality products and consulting from team specialists in every region of Ukraine.</p>
            <p><span>Mission:</span> the entire product portfolio, consulting services of DAMAR AGROTRADE LLC are aimed at increasing the profitability of crop production in the changing climatic conditions of Ukraine. We also set ourselves the task of raising customers' awareness of modern methods of crop production...</p>
          </div>
        </section>
        <SectionSwiper classes="home-news" isLoading={isSpecialLoading} title="News" data={specialProducts} totalSlides={12} paginationClass="news-section-pagination" />
        <SectionSwiper classes="home-sales" title="Sales" isLoading={isSpecialLoading} data={specialProducts} totalSlides={12} buttons paginationClass="sales-section-pagination" />

      </div>
      <SectionSwiper classes="home-partners" title="Partners" data={partners} totalSlides={6} paginationClass="partners-section-pagination" />
      <Article text={text} title="Seeds" />
    </main>
  )
}

export default Home