import React from 'react'
import { useGlobalContaxt } from '../../../context'

export const FilterBox = ({ data, subtitle}) => {
	const { setChosenCompany,chosenCompany } = useGlobalContaxt()

	const handleChooseCompany = (e) => {
		const value = e.target.value;
		if(chosenCompany.includes(value)){
			let newArr = chosenCompany.filter(item=>item !== value)
			setChosenCompany(newArr)
		}else{
			setChosenCompany(prev=>([...prev,value]))
		}
	}
	return (
		<div className="filter__box">
			<h5 className="filter__subtitle">{subtitle}</h5>
			{data.map((production, index) => {
				let name = Array.isArray(production) ? production[0] : production
				return (
					<label
						key={index}
						htmlFor={`production-${index}`}
						className="filter__item"
					>
						<input
							onClick={(e) => handleChooseCompany(e)}
							type="checkbox"
							name={`production-${index}`}
							id={`production-${index}`}
							value={name}
						/>
						<span className='filter__name'> {name}</span>
						{Array.isArray(production) && <span className='filter__total'>({production[1]})</span>}
					</label>

				)
			})}
		</div>
	)
}
