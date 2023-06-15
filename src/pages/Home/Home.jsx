import React from 'react'
import { Link ,useSearchParams} from 'react-router-dom'
import './Home.css'

import { FaLeaf } from 'react-icons/fa'

import {partners, products} from '../../data'

import aboutPhone from '../../assets/images/home-about.png'
import fullscrennImage from "../../assets/images/main-photo.jfif"
import { useGlobalContaxt } from '../../context'


import Article from '../../components/Article/Article'
import CartProduct from '../../components/CartProduct/CartProduct'

const text = [
'Growing vegetables and flowers on your plot or just on the balcony is a favorite activity of many summer residents and gardeners. Of course, fresh vegetables from your own city are natural, tasty and healthy. But in order to get a good harvest of tomatoes or cabbage, enjoying the flowering of petunias or roses, it is important not only to properly care for the plants. It all starts with the selection of seed material. And here the question arises: which one to choose? After all, they must be of high quality, give a good similarity.',
'We offer customers a wide selection of vegetable seeds. Here you can find seeds of eggplants, different types of cabbage, beans and gourds, tomatoes, peppers, cucumbers, onions, lettuce, garlic, potatoes from domestic and foreign producers.',
'A wide range of seedlings of fruit trees, roses, and berry bushes is presented. From us you can buy lawn grass seeds, as well as related products: fertilizers, protection products, biopreparations, garden equipment, substrates, soils, agricultural fiber, pots, cassettes for seedlings.',
'You can also find in our catalog flower seeds: annual (petunia, snapdragon, calendula, etc.), biennial (viola, primrose, mallow), perennial (iberis, anemone, hibiscus, delphinium, freesia), bulbs (tulips , lily, iris, daffodils), room plants (gerbera, begonia, cactus, mimosa, passion flower). Of course, this is far from the entire list - every hostess will find her favorite flower here.',
]
const Home = () => {
	const[searchParams,setSearchParams] = useSearchParams()
console.log(searchParams);
  const { windowWidth} = useGlobalContaxt()
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
            <h2 className="about-home__title title"><FaLeaf className='leaf' /> About us</h2>
            <p><span>DAMAR AGROTRADE LLC</span> is a young team that appeared on the agricultural market in 2020. We are not afraid of difficulties and challenges. Therefore, even the difficult covid period and the global pandemic did not stand in the way of a successful start.</p>
            <p>So, <span>we are brave, we are driven</span> , we are the ones who develop crop production and help thousands of domestic farmers to become successful.</p>
            <p><span>Vision:</span> the company "DAMAR AGROTRADE" LLC is on a course to increase the prestige and trust of plant protection products made in UA. We want our customers to have access to quality products and consulting from team specialists in every region of Ukraine.</p>
            <p><span>Mission:</span> the entire product portfolio, consulting services of DAMAR AGROTRADE LLC are aimed at increasing the profitability of crop production in the changing climatic conditions of Ukraine. We also set ourselves the task of raising customers' awareness of modern methods of crop production...</p>
            <Link className='orange-btn'>Read more</Link>
          </div>
        </section>
        <section className="home-new  home__section">
          <h2 className="home-new__title title"><FaLeaf className='leaf' />News<FaLeaf className='leaf second' /></h2>
          <div className="home-new__content">
            <CartProduct/>              
            <CartProduct/>              
            <CartProduct/>              
            <CartProduct/>              
          </div>
        </section>
      </div>
      <section className="home-sales home__section">
        <div className="container">
          <h2 className="home-sales__title title"><FaLeaf className='leaf' />Sales<FaLeaf className='leaf second' /></h2>
          <div className="home-new__content">
            <CartProduct/>              
            <CartProduct/>              
            <CartProduct/>              
            <CartProduct/>              
          </div>
          <a href="#" className='orange-btn'>Watch all products</a>
        </div>
      </section>
      <section className='home-partners home__section'>
        <h2 className="home-partners__title title"><FaLeaf className='leaf' />Partners<FaLeaf className='leaf second' /></h2>
        <div className="home-partners__slider slider">
          <div className="slider__wrapper container">
            
              {partners.map((partner,index)=>{
                return (
                <div key={index} className="slider__item">
                  <img src={partner} alt="" />
                </div>)
              })}
            </div>
          

        </div>
      </section>
      <Article text={text}/>
    </main>
  )
}

export default Home