import { Box, Container, Stack, Text, useColorModeValue, Input, Button, Flex, chakra, VisuallyHidden, Alert, AlertIcon } from '@chakra-ui/react'
import { ReactNode, useState } from 'react'
import { BiMailSend } from 'react-icons/bi'
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import jsonp from 'jsonp'

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
	return (
		<chakra.button
			bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
			rounded={'full'}
			w={8}
			h={8}
			cursor={'pointer'}
			as={'a'}
			href={href}
			display={'inline-flex'}
			alignItems={'center'}
			justifyContent={'center'}
			transition={'background 0.3s ease'}
			_hover={{
				bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
			}}
			target='_blank'
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	)
}

export default function Footer(props: any) {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [subEmail, setSubEmail] = useState<string>('')
	return (
		<Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')} py={3}>
			<Container as={Stack} py={'2.5px'} px={10} direction={{ base: 'column', md: 'row' }} spacing={4} align={{ base: 'center', md: 'center' }} justifyContent='space-between' maxW='100%'>
				<Text>© 2022 Syfras Hosting. All rights reserved</Text>
				<Stack direction={'row'} spacing={6}>
					<SocialButton label={'Twitter'} href={'#'}>
						<FaTwitter />
					</SocialButton>
					<SocialButton label={'Instagram'} href={'#'}>
						<FaInstagram />
					</SocialButton>
					<SocialButton label={'LinkedIn'} href={'#'}>
						<FaLinkedin />
					</SocialButton>
				</Stack>
				<Stack direction={'row'} spacing={5} fontSize={14} textAlign='center'>
					<Link to='/terms'>Terms & Conditions</Link>
					<Link to='/privacy'>Privacy Policy</Link>
					<Link to='/cookies'>Cookie Policy</Link>
					<Link to='/aup'>Acceptable User Policy</Link>
				</Stack>

				<Stack direction={'row'}>
					<Input
						placeholder={'Your email address'}
						_placeholder={{ color: useColorModeValue('black', 'white') }}
						bg={useColorModeValue('blackAlpha.100', '#2D3748')}
						border={0}
						_focus={{
							bg: 'whiteAlpha.300',
							border: '1px solid #00fead',
							boxShadow: 'none'
						}}
						onChange={(e) => setSubEmail(e.target.value)}
					/>
					<Button
						bg={'#00fead'}
						color={'black'}
						// _hover={{
						// 	bg: 'green.600'
						// }}
						disabled={isLoading}
						onClick={(e) => {
							setIsLoading(true)
							try {
								jsonp('https://syfras.us21.list-manage.com/subscribe/post-json?u=8b43b928b30fdec9f301c86ea&amp;id=cdca402308&amp;f_id=00bdc0e1f0&EMAIL=' + subEmail.replace('@', '%40') + '&c=__jp0', { param: 'c' }, (err: any, data: any) => {
									if (data && data.msg && data.msg.includes('already')) {
										alert('You are already subscribed!')
										setIsLoading(false)
									} else if (!err || (data && data.result && data.result !== 'success')) {
										alert('Thanks for subscribing to Syfras!')
										setIsLoading(false)
										setSubEmail('')
									} else {
										alert('Internal server error. Please try again')
										setIsLoading(false)
									}
								})
							} catch (err) {
								alert('Internal server error. Please try again')
							}
							setIsLoading(false)
						}}
						_hover={{ color: 'white', backgroundColor: 'gray.700' }}
						aria-label='Subscribe'
					>
						<Flex justifyContent='center' alignItems='center' pl='27.5px' pr='30px'>
							<BiMailSend />
							<Text ml='5px'>Subscribe</Text>
						</Flex>
					</Button>
				</Stack>
			</Container>
		</Box>
	)
}
