import './index.css'

import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider, useColorMode } from '@chakra-ui/react'

import Header from './components/Header'
import FullScreen from './components/FullScreen'
import Pricing from './components/Pricing'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const navigate = (label: string) => {
		window.scroll({
			behavior: 'smooth',
			left: 0,
			top: (document.getElementById(label.toLowerCase())?.offsetTop ?? 0) - 59
		})
	}

	useEffect(() => {
		// on page load, get & apply browser theme (comment line below to ignore browser setting & memorize setting when clicked from header )
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && colorMode === 'light') toggleColorMode()
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<Header toggleColorMode={toggleColorMode} navigate={navigate}/>
			<FullScreen navigate={navigate}/>
			<Pricing/>
			<Products/>
			<Testimonials/>
			<Footer navigate={navigate}/>
		</>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<ChakraProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ChakraProvider>
)
