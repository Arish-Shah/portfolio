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
		<a href={image.link} target="_blank" rel="noopener noreferrer">
			<div
				href={image.link}
				rel="noopener noreferrer"
				target="_blank"
				className="work"
			>
				<div className="work-description">{image.alt}</div>
				<div className="work-image-container">
					<img src={image.src} alt={image.alt} />
				</div>
			</div>
		</a>
	)
}

export default Works
