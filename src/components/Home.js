import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
	return (
		<Container>
			<Section
				title='Model S'
				description='Order Online for Touchless Delivery'
				imgPath='model-s.jpg'
				leftBtnText='Custom order'
				rightBtnText='Existing inventory'
			/>
			<Section
				title='Model Y'
				description='Order Online for Touchless Delivery'
				imgPath='model-y.jpg'
				leftBtnText='Custom order'
				rightBtnText='Existing inventory'
			/>
			<Section
				title='Model 3'
				description='Order Online for Touchless Delivery'
				imgPath='model-3.jpg'
				leftBtnText='Custom order'
				rightBtnText='Existing inventory'
			/>
			<Section
				title='Model X'
				description='Order Online for Touchless Delivery'
				imgPath='model-x.jpg'
				leftBtnText='Custom order'
				rightBtnText='Existing inventory'
			/>
			<Section
				title='Lowest Cost Solar Panel in America'
				description='Money-back guarantee'
				imgPath='solar-panel.jpg'
				leftBtnText='Order now'
				rightBtnText='Learn more'
			/>
			<Section
				title='Solar for New Roofs'
				description='Solar Roof Costs Less Than a New Roof'
				imgPath='solar-roof.jpg'
				leftBtnText='Order now'
				rightBtnText='Learn more'
			/>
			<Section title='Accessorios' description='' imgPath='accessories.jpg' leftBtnText='Show up' />
		</Container>
	)
}

export default Home

const Container = styled.div`
	height: 100vh;
`
