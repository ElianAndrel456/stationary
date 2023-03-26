import { createBrowserRouter } from 'react-router-dom'
import LayoutMain from '../layout/LayoutMain'
import CartPage from '../pages/CartPage'
import DashboardAdminPage from '../pages/DashboardAdminPage'
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import RegisterPage from '../pages/RegisterPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <LayoutMain />,
		children: [
			{
				path: '/',
				element: <HomePage />,
				errorElement: <ErrorPage />,
			},
			{
				path: 'login',
				element: <LoginPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: 'register',
				element: <RegisterPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: 'dashboard',
				element: <DashboardAdminPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: 'cart',
				element: <CartPage />,
			},
		],
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
])
