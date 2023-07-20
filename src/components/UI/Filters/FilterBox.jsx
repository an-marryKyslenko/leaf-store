import React from 'react'

export const FilterBox = ({data,subtitle}) => {
	return (
		<div className="filter__box">
			<h5 className="filter__subtitle">{subtitle}</h5>
			{data.map((production, index) => {
			return (
				<div key={index} id={index} className="filter__item">
					<label htmlFor={`production-${index}`} className="filter__name">
						<input type="checkbox" name={`production-${index}`} id={`production-${index}`} value="" />
						<span>{Array.isArray(production) ? production[0]: production}</span>
					</label>
					{Array.isArray(production) && <span className='filter__total'>({production[1]})</span>}
				</div>
			)})}
		</div>
	)
}
