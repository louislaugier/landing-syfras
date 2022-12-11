import './index.css'

import React, { useEffect, useState } from 'react'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'

import { Button, ChakraProvider, Icon, useColorMode, useColorModeValue } from '@chakra-ui/react'

import Header from './components/Header'
import FullScreen from './components/FullScreen'
import Pricing from './components/Pricing'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import { ArrowUpIcon } from '@chakra-ui/icons'
import Technologies from './components/Technologies'
import Terms from './components/Terms'
import Aup from './components/Aup'
import Cookies from './components/Cookies'
import Privacy from './components/Privacy'

const App = () => {
	const navigate = useNavigate()
	const navigateSmoothly = async (label: string = '') => {
		if (window.location.pathname !== '/') navigate('/')
		setTimeout(() => window.scrollTo({
			// left: 0,
			top: (document.getElementById(label.toLowerCase())?.offsetTop ?? 0) - 59
		}), 1)
	}
	const { colorMode, setColorMode } = useColorMode()

	const [scrollToTopButton, setScrollToTopButton] = useState(false)
	const scrollToTopButtonStyle: any = useColorModeValue('gray.200', 'gray.700')

	useEffect(() => {
		// on page load, get & apply browser theme (comment line below to ignore browser setting & memorize setting when clicked from header )
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && colorMode === 'light') setColorMode('dark')
		else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches && colorMode === 'dark') setColorMode('light')
		// eslint-disable-next-linek

		window.addEventListener('scroll', () => {
			if (window.scrollY > 0 && !scrollToTopButton) setScrollToTopButton(true)
			else if (window.scrollY === 0 && scrollToTopButton) setScrollToTopButton(false)
		})
	}, [scrollToTopButton])

	return (
		<>
			<Header navigateSmoothly={navigateSmoothly} />
			<FullScreen navigateSmoothly={navigateSmoothly} />
			<Pricing />
			<Products />
			<Technologies />
			<Testimonials />
			<Footer />

			{scrollToTopButton ? (
				<Button onClick={() => (document.body.scrollTop = document.documentElement.scrollTop = 0)} backgroundColor={scrollToTopButtonStyle} h={50} w={50} borderRadius={25} position='fixed' bottom='9vh' right='2vw'>
					<ArrowUpIcon />
				</Button>
			) : (
				<></>
			)}
		</>
	)
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '/terms',
		element: <Terms />
	},
	{
		path: '/privacy',
		element: <Privacy />
	},
	{
		path: '/cookies',
		element: <Cookies />
	},
	{
		path: '/aup',
		element: <Aup />
	}
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<ChakraProvider>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</ChakraProvider>
)
