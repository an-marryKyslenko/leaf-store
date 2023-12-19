import icon1 from './assets/images/icons/icon-btn-1.svg'
import icon2 from './assets/images/icons/icon-btn-2.svg'
import icon3 from './assets/images/icons/icon-btn-3.svg'
import icon4 from './assets/images/icons/icon-btn-4.svg'
import icon5 from './assets/images/icons/icon-btn-5.svg'


export const BASE_API_URL = 'https://leaf-server.vercel.app/api/v1'
export const FILTER = [
	{
		id: 12,
		category: 'seeds',
		icon: icon1,
		type: ['vegetables', 'flowers', 'fruits'],
		company: ["Ukraine", "USA", "Poland", "others"]
	},
	{
		id: 13,
		category: 'plants protectiong tools',
		icon: icon2,
		type: ["insecticides", "herbicides"],
		company: ["Ukraine", "USA", "Poland", "others"]
	},
	{
		id: 14,
		category: 'fertilizers',
		icon: icon3,
		type: ["others"],
		company: ["Ukraine", "USA", "Poland", "Others"]
	},
	{
		id: 15,
		category: 'feed group',
		icon: icon4,
		type: ["others"],
		company: ["Ukraine", "USA", "Poland", "Others"]
	},
	{
		id: 16,
		category: 'help the apronomist',
		icon: icon5,
		type: ['herbicides', 'others'],
		company: ["Ukraine", "USA", "Poland", "Others"]
	},


]