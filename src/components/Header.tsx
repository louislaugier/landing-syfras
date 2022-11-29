import { Box, Flex, Text, IconButton, Stack, Collapse, Link, Popover, PopoverTrigger, useColorModeValue, useBreakpointValue, useDisclosure, Button } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

const Header = (props: any) => {
	const { isOpen, onToggle } = useDisclosure()
	const linkColor = useColorModeValue('black', 'white')
	const linkHoverColor = '#00fead'

	return (
		<Box position='fixed' w='100%' zIndex={1}>
			<Flex bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('gray.600', 'white')} minH={'60px'} py={{ base: 2 }} px={{ base: 4 }} borderBottom={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.900')} align={'center'}>
				<Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
					<IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} variant={'ghost'} aria-label={'Toggle Navigation'} />
				</Flex>
				<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
					<Text id='logo' onClick={() => window.scrollTo(0, 0)} cursor='pointer' textAlign={useBreakpointValue({ base: 'center', md: 'left' })} fontFamily={'heading'} color={useColorModeValue('black', '#00fead')}>
						Syfras
					</Text>
					<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
						<Stack direction={'row'} spacing={4}>
							{NAV_ITEMS.map((navItem) => (
								<Box key={navItem.label}>
									<Popover trigger={'hover'} placement={'bottom-start'}>
										<PopoverTrigger>
											<Link
												p={2}
												onClick={() => props.navigate(navItem.label)}
												fontSize={'sm'}
												fontWeight={500}
												color={linkColor}
												_hover={{
													textDecoration: 'none',
													color: linkHoverColor
												}}
											>
												{navItem.label}
											</Link>
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
					<Button
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
						Call to action
					</Button>
				</Stack>
				<Button ml='15' onClick={props.toggleColorMode}>
					{useColorModeValue(<MoonIcon color='black' />, <SunIcon />)}
				</Button>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav navigate={props.navigate} />
			</Collapse>
		</Box>
	)
}

const MobileNav = ({ navigate }: any) => {
	return (
		<Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} navigate={navigate} />
			))}
		</Stack>
	)
}

const MobileNavItem = ({ label }: NavItem, { navigate }: any) => {
	// eslint-disable-next-line
	const { isOpen, onToggle } = useDisclosure()

	return (
		<Stack spacing={4} onClick={onToggle}>
			<Flex
				py={2}
				as={Link}
				onClick={() => navigate(label)}
				justify={'space-between'}
				align={'center'}
				_hover={{
					textDecoration: 'none'
				}}
			>
				<Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
					{label}
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
		label: 'Testimonials'
	}
]

export default Header
