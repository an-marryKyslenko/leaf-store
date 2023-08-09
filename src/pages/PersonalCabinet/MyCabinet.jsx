import React from 'react'
import { Link } from 'react-router-dom'
import { BsDatabase} from 'react-icons/bs'
import { LuClipboardList } from 'react-icons/lu'
import { RiFolderHistoryLine, RiLockPasswordLine } from 'react-icons/ri'
import './styles/MyCabiten.css'

const MyCabinet = () => {
	return (
		<div className='cabinet__information my-cabinet'>
			<ul className="my-cabinet__content">
				<li className='my-cabinet__item'>
					<Link to="personal-data" className="my-cabinet__link">
						<span><BsDatabase/></span>
						Personal data
					</Link>
				</li>
				<li className='my-cabinet__item'>
					<Link to="change-password" className="my-cabinet__link">
						<span><RiLockPasswordLine/></span>
						Change password
					</Link>
				</li>
				<li className='my-cabinet__item'>
					<Link to="history-orders" className="my-cabinet__link">
						<span><RiFolderHistoryLine/></span>
						History of orders
					</Link>
				</li>
				<li className='my-cabinet__item'>
					<Link to="delete-user" className="my-cabinet__link">
						<span><LuClipboardList/></span>
						Delete user
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default MyCabinet