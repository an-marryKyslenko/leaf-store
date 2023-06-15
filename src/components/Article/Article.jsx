import React from 'react'
import ShowMoreText from '../UI/ShowMore/ShowMoreText'
import { FaLeaf } from 'react-icons/fa'

import './Article.css'

const Article = ({text}) => {
	return (
		<section className="home-article article">
			<div className="container">
				<h2 className="article__title title"><FaLeaf className='leaf' />Seets</h2>
				<ShowMoreText text={text} />
			</div>
		</section>
	)
}

export default Article