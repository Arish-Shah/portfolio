import React from 'react'
import { images } from '../content/works'

const Works = () => {
	return (
		<div className="works">
			{images.map((image, index) => (
				<Work key={index} image={image} />
			))}
		</div>
	)
}

const Work = ({ image }) => {
	return (
		<div className="work" href="hello">
			<div className="work-description">{image.alt}</div>
			<div className="work-image-container">
				<img src={image.src} alt={image.alt} />
			</div>
		</div>
	)
}

export default Works
