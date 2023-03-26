import React from 'react'
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material'
import {
	AccountCircleOutlined,
	ShoppingCartOutlined,
	DesignServicesOutlined,
	HomeMaxOutlined,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
const NavMobile = () => {
	const [value, setValue] = React.useState(0)
	const navigate = useNavigate()

	React.useEffect(() => {
		const pathname = window.location.pathname
		if (pathname === '/') setValue(0)
		if (pathname === '/products') setValue(1)
		if (pathname === '/cart') setValue(2)
		if (pathname === '/account') setValue(3)
	}, [])

	return (
		<Box
			component='nav'
			sx={{
				position: 'fixed',
				bottom: 0,
				left: 0,
				right: 0,
				zIndex: 999,
			}}>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(_, newValue) => {
					setValue(newValue)
					if (newValue === 0) navigate('/')
					if (newValue === 1) navigate('/products')
					if (newValue === 2) navigate('/cart')
					if (newValue === 3) navigate('/login')
				}}>
				<BottomNavigationAction
					label='Inicio'
					icon={<HomeMaxOutlined />}
				/>
				<BottomNavigationAction
					label='Productos'
					icon={<DesignServicesOutlined />}
				/>
				<BottomNavigationAction
					label='Carrito'
					icon={<ShoppingCartOutlined />}
				/>
				<BottomNavigationAction
					label='Account'
					icon={<AccountCircleOutlined />}
				/>
			</BottomNavigation>
		</Box>
	)
}

export default NavMobile
