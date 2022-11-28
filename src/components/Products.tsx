import { Box, VStack, Button, Flex, Divider, chakra, Grid, GridItem, Container } from '@chakra-ui/react'
import {} from '@chakra-ui/react'

interface FeatureProps {
	heading: string
	text: string
}

const Feature = ({ heading, text }: FeatureProps) => {
	return (
		<GridItem>
			<chakra.h3 fontSize='xl' fontWeight='600'>
				{heading}
			</chakra.h3>
			<chakra.p>{text}</chakra.p>
		</GridItem>
	)
}

const Products = () => {
	return (
		<div id='products' style={{ backgroundColor: '#F7FAFC', width: '100%', padding: '5px 0 30px 0' }}>
			<Box as={Container} maxW='7xl' mt={14} p={4}>
				<Grid
					templateColumns={{
						base: 'repeat(1, 1fr)',
						sm: 'repeat(2, 1fr)',
						md: 'repeat(2, 1fr)'
					}}
					gap={4}
				>
					<GridItem colSpan={1}>
						<VStack alignItems='flex-start' spacing='20px'>
							<chakra.h2 fontSize='3xl' fontWeight='700'>
								Medium length title
							</chakra.h2>
							<Button bg='#00fead' size='md'>
								Call To Action
							</Button>
						</VStack>
					</GridItem>
					<GridItem>
						<Flex>
							<chakra.p>Provide your customers a story they would enjoy keeping in mind the objectives of your website. Pay special attention to the tone of voice.</chakra.p>
						</Flex>
					</GridItem>
				</Grid>
				<Divider mt={12} mb={12} />
				<Grid
					templateColumns={{
						base: 'repeat(1, 1fr)',
						sm: 'repeat(2, 1fr)',
						md: 'repeat(4, 1fr)'
					}}
					gap={{ base: '8', sm: '12', md: '16' }}
				>
					<Feature heading={'First product'} text={'Short text describing one of you product/service'} />
					<Feature heading={'Second product'} text={'Short text describing one of you product/service'} />
					<Feature heading={'Third product'} text={'Short text describing one of you product/service'} />
					<Feature heading={'Fourth product'} text={'Short text describing one of you product/service'} />
				</Grid>
			</Box>
		</div>
	)
}

export default Products
