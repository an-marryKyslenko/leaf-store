import React from 'react'
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const ShowMoreText = ({ text, id }) => {
	const [readMore, setReadMore] = useState(false);
	return (
		<div className='text' >
			{!readMore
				?
				text.map((pr, index) => (
					<p key={index}>{pr}</p>
				))
				:
				<>
					<p>{text[0]}</p>
					<p>{text[1]}</p>
				</>
			}
			<button
				className="show-text-btn"
				type='button'
				onClick={() => setReadMore(!readMore)}
			>
				{readMore
					? 'Read more'
					: 'Read less'
				}
				{readMore ? <IoIosArrowDown/>:<IoIosArrowUp/>}
			</button>

		</div>
	)
}

export default ShowMoreText