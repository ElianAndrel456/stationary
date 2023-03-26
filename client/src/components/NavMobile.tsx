import React from 'react'
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material'
import {
	AccountCircleOutlined,
	ShoppingCartOutlined,
	DesignServicesOutlined,
	HomeMaxOutlined,
} from '@mui/icons-material'
const NavMobile = () => {
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
				/* value={value} */
				/* 	onChange={(event, newValue) => {
					setValue(newValue)
				}} */
			>
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
