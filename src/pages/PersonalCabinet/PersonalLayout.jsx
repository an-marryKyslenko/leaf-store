import React from 'react'

import { IoIosArrowDown } from 'react-icons/io'
import { BsDatabase, BsPersonCircle } from 'react-icons/bs'
import { LuClipboardList } from 'react-icons/lu'
import { RiFolderHistoryLine, RiLockPasswordLine } from 'react-icons/ri'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

import Title from '../../components/UI/Title/Title'
import { useGlobalContaxt } from '../../context'

import './styles/PersonalCabinet.css'
import { useState } from 'react'

const submenu = [
	{ path: '.', title: 'My cabinet', icon: (<BsPersonCircle />), end: true },
	{ path: 'current-orders', title: 'Current orders', icon: (<LuClipboardList />), end: false },
	{ path: 'personal-data', title: 'Personal data', icon: (<BsDatabase />), end: false },
	{ path: 'change-password', title: 'Change password', icon: (<RiLockPasswordLine />), end: false },
	{ path: 'history-orders', title: 'History of orders', icon: (<RiFolderHistoryLine />), end: false },

]
const PersonalLayout = () => {
	const [openSubmenu, setOpenSubmenu] = useState(false)
	const [titleSubmenu, setTitleSubmenu] = useState('My cabinet')
	const { windowWidth } = useGlobalContaxt()
	const location = useLocation()
	const path = location.pathname.split('/').filter(item => item)
	const title = path[path.length - 1].replace('-', ' ')
	const isMobile = windowWidth <= 920

	const handleChangeTitle = (e) => {
		const value = e.target.innerText
		setTitleSubmenu(value)
		setOpenSubmenu(false)
	}
	return (
		<main className='main cabinet'>
			<div className="container">
				<div className={`main__paths ${isMobile ? '_changed': ''}`}>
					<Link to='/' className="main__path">Home</Link>
					<p className="main__path">Personal cabinet</p>
					{path.length > 1 && <p className="main__path">{title}</p>}
				</div>
				{/* title component */}
				<Title title={title} clases="cabinet" secondLeaf />
				<div className="cabinet__content">
					<div className="cabinet__submenu">
						<div className="cabinet__menu-list">
							{isMobile
								?
								<>
									<div className={`cabinet__title-submenu ${openSubmenu ? '_open' : ''}`} onClick={() => setOpenSubmenu(!openSubmenu)}>
										<span>{titleSubmenu}</span>
										<span className='select-icon'><IoIosArrowDown /></span>
									</div>
									{submenu.map((item, index) => {
										const { title, path, end, icon } = item
										return (
											<NavLink
												key={index}
												end={end}
												to={path}
												className={({ isActive }) => isActive
													? `cabinet__link active ${openSubmenu ? '_open' : ''}`
													: `cabinet__link ${openSubmenu ? '_open' : ''}`
												}
												onClick={(e)=>handleChangeTitle(e)}
											>
												<span>{icon}</span>
												{title}
											</NavLink>
										)
									})}
								</>
								:
								(submenu.map((item, index) => {
									const { title, path, end, icon } = item
									return (
										<NavLink key={index} end={end} to={path} className={({ isActive }) => isActive ? "cabinet__link active" : "cabinet__link"}>
											<span>{icon}</span>
											{title}
										</NavLink>
									)
								}))
							}

						</div>
					</div>
					<Outlet />
				</div>
			</div>
		</main >
	)
}

export default PersonalLayout