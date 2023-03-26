import { Box, Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import React from 'react'

const validationSchema = yup.object({
	email: yup.string().email('Ingrese un email válido').required('El email es obligatorio'),
	password: yup
		.string()
		.min(6, 'Password should be of 6 characters length')
		.required('La contraseña es obligatoria'),
})

const LoginPage = () => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema,
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
				name='password'
				label='Password'
				type='password'
				value={formik.values.password}
				onChange={formik.handleChange}
			/>
			<Button type='submit'>Iniciar Sesión</Button>
		</Box>
	)
}

export default LoginPage
