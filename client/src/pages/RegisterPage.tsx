import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link as RouterLink } from 'react-router-dom'

const validationSchema = yup.object({
	email: yup.string().email('Ingrese un email válido').required('El email es obligatorio'),
	password: yup
		.string()
		.min(6, 'Password should be of 6 characters length')
		.required('La contraseña es obligatoria'),
	name: yup
		.string()
		.required('El nombre es obligatorio')
		.min(3, 'El nombre debe tener al menos 3 caracteres')
		.max(20, 'El nombre debe tener máximo 20 caracteres')
		.matches(/^[a-zA-Z ]*$/, 'El nombre solo puede contener letras y espacios'),
})

const RegisterPage = () => {
	const formik = useFormik({
		initialValues: {
			email: '',
			name: '',
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
				error={formik.touched.email && Boolean(formik.errors.email)}
				helperText={formik.touched.email && formik.errors.email}
			/>
			<TextField
				required
				label='Nombres'
				type='text'
				name='name'
				value={formik.values.name}
				onChange={formik.handleChange}
				error={formik.touched.name && Boolean(formik.errors.name)}
				helperText={formik.touched.name && formik.errors.name}
			/>
			<TextField
				required
				label='Password'
				type='password'
				name='password'
				value={formik.values.password}
				onChange={formik.handleChange}
				error={formik.touched.password && Boolean(formik.errors.password)}
				helperText={formik.touched.password && formik.errors.password}
			/>
			<Button type='submit'>Crear una cuenta</Button>
			<RouterLink to='/login'>Iniciar sesión</RouterLink>
		</Box>
	)
}

export default RegisterPage
