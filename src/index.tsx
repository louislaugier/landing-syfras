import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'

import Header from './components/Header'
import FullScreen from './components/FullScreen'
import Pricing from './components/Pricing'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
	return (
		<>
			<Header />
			<FullScreen/>
			<Pricing/>
			<Products/>
			<Testimonials/>
			<Footer/>
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
