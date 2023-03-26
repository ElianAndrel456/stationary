import React, { useEffect } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { useFormik } from 'formik'

const RegisterPage = () => {
	const formik = useFormik({
		initialValues: {
			email: '',
			name: '',
			password: '',
		},
		onSubmit: (values) => {
			console.log(values)
		},
	})

	return (
		<Box
			component='form'
			onSubmit={formik.handleSubmit}>
			<TextField
				required
				label='Email'
				type='email'
				name='email'
				value={formik.values.email}
				onChange={formik.handleChange}
			/>
			<TextField
				required
				label='Nombres'
				type='text'
				name='name'
				value={formik.values.name}
				onChange={formik.handleChange}
			/>
			<TextField
				required
				label='Password'
				type='password'
				name='password'
				value={formik.values.password}
				onChange={formik.handleChange}
			/>
			<Button type='submit'>Crear una cuenta</Button>
		</Box>
	)
}

export default RegisterPage
