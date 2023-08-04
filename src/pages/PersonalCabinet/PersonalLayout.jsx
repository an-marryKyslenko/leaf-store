import React from 'react'
import { BsDatabase, BsPersonCircle } from 'react-icons/bs'
import { LuClipboardList } from 'react-icons/lu'
import { RiFolderHistoryLine, RiLockPasswordLine } from 'react-icons/ri'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

import Title from '../../components/UI/Title/Title'

import './styles/PersonalCabinet.css'

const PersonalLayout = () => {
	const location = useLocation()
	const path = location.pathname.split('/').filter(item=>item)
	const title = path[path.length-1].replace('-',' ')

	return (
		<main className='main cabinet'>
			<div className="container">
				<div className="main__paths">
					<Link to='/' className="main__path">Home</Link>
					<p className="main__path">Personal cabinet</p>
					{path.length > 1 && <p className="main__path">{title}</p>}
				</div>
				{/* title component */}
				<Title title={title} clases="cabinet" secondLeaf />
				<div className="cabinet__content">
					<div className="cabinet__submenu">
						<div className="cabinet__menu-list">
							<NavLink end className={({isActive})=>isActive ? "cabinet__link active": "cabinet__link"}><span><BsPersonCircle/></span>My cabinet</NavLink>
							<NavLink to="current-orders" className={({isActive})=>isActive ? "cabinet__link active": "cabinet__link"}><span><LuClipboardList/></span>Current orders</NavLink>
							<NavLink to="personal-data" className={({isActive})=>isActive ? "cabinet__link active": "cabinet__link"}><span><BsDatabase/></span>Personal data</NavLink>
							<NavLink to="change-password" className={({isActive})=>isActive ? "cabinet__link active": "cabinet__link"}><span><RiLockPasswordLine/></span>Change password</NavLink>
							<NavLink to="history-orders" className={({isActive})=>isActive ? "cabinet__link active": "cabinet__link"}><span><RiFolderHistoryLine/></span>History of orders</NavLink>
						</div>
					</div>
					<Outlet/>
				</div>
			</div>
		</main>
	)
}

export default PersonalLayout