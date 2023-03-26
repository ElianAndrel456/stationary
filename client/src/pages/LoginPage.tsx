import { Box, Button, TextField } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import React from 'react'
import Swal from 'sweetalert2'

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
			Swal.fire({
				title: 'Iniciando sesión',
				text: 'Espere por favor',
				icon: 'success',
			})
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
				error={formik.touched.email && Boolean(formik.errors.email)}
				helperText={formik.touched.email && formik.errors.email}
			/>
			<TextField
				required
				name='password'
				label='Password'
				type='password'
				value={formik.values.password}
				onChange={formik.handleChange}
				error={formik.touched.password && Boolean(formik.errors.password)}
				helperText={formik.touched.password && formik.errors.password}
			/>
			<Button type='submit'>Iniciar Sesión</Button>
			<RouterLink to='/register'>Crear un nueva cuenta</RouterLink>
		</Box>
	)
}

export default LoginPage
