import React from 'react'

export const FilterBox = ({ subtitle, data, onClick }) => {

	return (
		<div className="filter__box">
			<h5 className="filter__subtitle">{subtitle}</h5>
			{data.map((name, index) => {
				return (
					<label
						key={index}
						htmlFor={`production-${index}`}
						className="filter__item"
					>
						<input
							onClick={(e) => onClick(e)}
							type="checkbox"
							name={`production-${index}`}
							id={`production-${index}`}
							value={name}
						/>
						<span className='filter__name'> {name}</span>
					</label>

				)
			})}
		</div>
	)
}
