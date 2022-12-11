import { Box, Container, Heading, SimpleGrid, Image, Text, Stack, HStack, VStack } from '@chakra-ui/react'

// Replace test data with your own
const features = [
	{
		title: 'Cloud Linux',
		logoPath: '/logos/cloud_linux.png',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.'
	},
	{
		title: 'Litespeed',
		logoPath: '/logos/litespeed.svg',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
		w: 170
	},
	{
		title: 'Plesk',
		logoPath: '/logos/plesk.svg',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
		w: 130
	},
	{
		title: 'Nginx',
		logoPath: '/logos/nginx.png',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.'
	},
	{
		title: 'Apache',
		logoPath: '/logos/apache.png',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.'
	},
	{
		title: 'Google Pagespeed',
		logoPath: '/logos/pagespeed.svg',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
		w: 81
	},
	{
		title: 'WordPress',
		logoPath: '/logos/wordpress.png',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
		w: 81
	},
	{
		title: 'PHP',
		logoPath: '/logos/php.png',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
		w: 120
	},
	{
		title: 'NodeJS',
		logoPath: '/logos/nodejs.png',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
		w: 125
	},
	{
		title: 'Ruby',
		logoPath: '/logos/ruby.png',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
		w: 70
	},
	{
		title: 'BTCPay Server',
		logoPath: '/logos/btcpay.svg',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.'
	},
	{
		title: 'Docker',
		logoPath: '/logos/docker.webp',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
		w: 100
	},
	{
		title: 'MariaDB',
		logoPath: '/logos/mariadb.png',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
		w: 95
	},
	{
		title: 'PostgreSQL',
		logoPath: '/logos/postgresql.png',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
		w: 85
	}
]

export default function Technologies() {
	return (
		<div id='technologies'>
			<Box p={4} pt='60px' pb='80px'>
				<Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
					<Heading fontSize={'3xl'}>Technologies</Heading>
					<Text color={'gray.600'} fontSize={'xl'}>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
					</Text>
				</Stack>

				<Container maxW={'6xl'} mt={10}>
					<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
						{features.map((feature, i) => (
							<HStack key={i} align={'center'}>
								{/* <Box color={'green.400'} px={2}>
									<Icon as={CheckIcon} />
								</Box>
								 */}
								<Image w={feature.w ?? 150} src={feature.logoPath} alt='Logo'/>
								<VStack align={'center'}>
									<Text align='center' fontWeight={600}>{feature.title}</Text>
									<Text align='center' color={'gray.600'}>{feature.text}</Text>
								</VStack>
							</HStack>
						))}
					</SimpleGrid>
				</Container>
			</Box>
		</div>
	)
}
