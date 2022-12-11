import { Box, Flex, Text, IconButton, Stack, Collapse, Popover, PopoverTrigger, useColorModeValue, useBreakpointValue, useDisclosure, Button, useColorMode } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { FaUserAlt } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const Header = (props: any) => {
	const { isOpen, onToggle } = useDisclosure()
	const linkColor = useColorModeValue('black', 'white')
	const linkHoverColor = '#00fead'
	const { toggleColorMode } = useColorMode()

	const [darkmodeHeaderBg, setDarkmodeHeaderBg] = useState('black')
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 0 && darkmodeHeaderBg !== 'grey.800') setDarkmodeHeaderBg('gray.800')
			else if (window.scrollY === 0 && darkmodeHeaderBg !== 'black') setDarkmodeHeaderBg('black')
		})
	}, [darkmodeHeaderBg])

	return (
		<Box position='fixed' w='100%' zIndex={2}>
			<Flex backgroundColor={useColorModeValue('white', darkmodeHeaderBg)} color={useColorModeValue('gray.600', 'white')} minH={'60px'} py={{ base: 2 }} px={{ base: 4 }} borderBottom={useColorModeValue(1, darkmodeHeaderBg === 'black' ? 0 : 1)} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', darkmodeHeaderBg === 'black' ? '' : 'gray.700')} align={'center'}>
				<Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
					<IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} variant={'ghost'} aria-label={'Toggle Navigation'} />
				</Flex>
				<Flex onClick={() => {
					if (window.location.pathname === '/') props.navigateSmoothly('')
				}}>
					<Link to={window.location.pathname === '/' ? '' : '/'}>
						<Text id='logo' cursor='pointer' textAlign={useBreakpointValue({ base: 'center', md: 'left' })} fontFamily={'heading'} color={useColorModeValue('black', '#00fead')} ml={1}>
							Syfras
						</Text>
					</Link>
				</Flex>
				<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'center' }}>
					<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
						<Stack direction={'row'} spacing={4}>
							{NAV_ITEMS.map((navItem) => (
								<Box key={navItem.label}>
									<Popover trigger={'hover'} placement={'bottom-start'}>
										<PopoverTrigger>
											<Flex
												cursor='pointer'
												p={2}
												onClick={() => props.navigateSmoothly(navItem.label)}
												fontSize={'sm'}
												fontWeight={500}
												color={linkColor}
												_hover={{
													textDecoration: 'none',
													color: linkHoverColor
												}}
											>
												{navItem.label}
											</Flex>
										</PopoverTrigger>
									</Popover>
								</Box>
							))}
						</Stack>
					</Flex>
				</Flex>
				<Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
					{/* <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
						Sign In
					</Button> */}
					{/* <Button
						display={{ base: 'none', md: 'inline-flex' }}
						fontSize={'sm'}
						fontWeight={600}
						color={'black'}
						bg={'#00fead'}
						//   href={'#'}
						_hover={
							{
								// bg: 'pink.300'
							}
						}
					>
						CTA espace client
					</Button> */}
					<Button ml='15' onClick={() => window.open('https://client.syfr.as')}>
						{<FaUserAlt color={useColorModeValue('black', 'white')} />}
						{/* <Text ml={2}>Texte facultatif</Text> */}
					</Button>
				</Stack>
				<Button ml='15' onClick={toggleColorMode}>
					{useColorModeValue(<MoonIcon color='black' />, <SunIcon />)}
				</Button>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav navigateSmoothly={props.navigateSmoothly}/>
			</Collapse>
		</Box>
	)
}

const MobileNav = (navigateSmoothly: any) => {
	return (
		<Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem navigateSmoothly={navigateSmoothly} key={navItem.label} {...navItem} />
			))}
		</Stack>
	)
}

const MobileNavItem = (props: any) => {
	// eslint-disable-next-line
	const { isOpen, onToggle } = useDisclosure()

	return (
		<Stack spacing={4} onClick={onToggle}>
			<Flex
				py={2}
				as={Link}
				onClick={() => props.navigateSmoothly(props.label)}
				justify={'space-between'}
				align={'center'}
				_hover={{
					textDecoration: 'none'
				}} to={''}			>
				<Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
					{props.label}
				</Text>
			</Flex>
		</Stack>
	)
}

interface NavItem {
	label: string
	navigate?: void
}

const NAV_ITEMS: Array<NavItem> = [
	{
		label: 'Pricing'
	},
	{
		label: 'Products'
	},
	{
		label: 'Technologies'
	},
	{
		label: 'Testimonials'
	}
]

export default Header
