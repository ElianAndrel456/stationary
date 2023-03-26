import { Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavMobile from '../components/NavMobile'

const LayoutMain = () => {
	return (
		<Container>
			<NavMobile />
			<Outlet />
		</Container>
	)
}

export default LayoutMain
