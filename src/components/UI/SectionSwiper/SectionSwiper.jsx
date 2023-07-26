import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Pagination } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './SectionSwiper.css'

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

import CartProduct from '../../CartProduct/CartProduct';
import Title from '../Title/Title';
import { useGlobalContaxt } from '../../../context';
import Loading from '../Loading/Loading';

const SectionSwiper = ({ data, classes, title, totalSlides, buttons, paginationClass }) => {
	const { isLoading } = useGlobalContaxt()
	console.log(isLoading);
	return (
		<section className={`home__section swiper-section ${classes}`}>
			<Title clases={classes} title={title} secondLeaf />
			<div className="swiper-container">
				{isLoading
					?
					<Loading />
					: 
					<>
						<button className='swiper__prev'><BsArrowLeft /></button>
						<Swiper
							modules={[Navigation, Pagination, FreeMode]}
							spaceBetween={10}
							slidesPerView={1}
							freeMode={true}
							slidesPerGroup={2}
							navigation={
								{
									nextEl: '.swiper__next',
									prevEl: '.swiper__prev',
								}
							}
							initialSlide={2}
							breakpoints={
								{
									640: {
										slidesPerView: 2,
										spaceBetween: 20
									},
									// when window width is >= 640px
									768: {
										slidesPerView: 3,
										spaceBetween: 30
									},
									// when window width is >= 768px
									1110: {
										slidesPerView: 4,
										spaceBetween: 30
									}
								}
							}
							pagination={{
								el: `.${paginationClass}`
							}}
						>
							{data[0].name
								?
								data.filter((item, index) => index < totalSlides).map((product, index) => (
									<SwiperSlide key={index}><CartProduct {...product} path="catalogue" /></SwiperSlide>
								))
								:
								data.map((partner, index) => {
									return (
										<SwiperSlide key={index}>
											<div key={index} className="slider__item">
												<img src={partner} alt="" />
											</div>
										</SwiperSlide>)
								})
							}
						</Swiper>
						<button className='swiper__next' ><BsArrowRight /></button>
					</>
				}
			</div>
			<div className={`swiper__pagination ${paginationClass}`}></div>
			{buttons && <a href='catalogue?category=seeds' className='orange-btn'>Show more</a>}
		</section>
	)
}

export default SectionSwiper