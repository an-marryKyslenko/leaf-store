import React from 'react'
import ShowMoreText from '../UI/ShowMore/ShowMoreText'

import './Article.css'
import Title from '../UI/Title/Title'

const Article = ({text,title}) => {
	return (
		<section className="home-article article">
			<div className="container">
				<Title title={title} clases="article" secondLeaf={false}/>
				<ShowMoreText text={text} />
			</div>
		</section>
	)
}

export default Article