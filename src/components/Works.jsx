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
				<div className="work-description">
					<div className="work-description-container">
						<span>Poster Design</span>
						<span>{image.alt}</span>
					</div>
				</div>
				<div className="work-image">
					<div className="work-image-container">
						<img src={image.src} alt={image.alt} />
					</div>
				</div>
			</div>
		</a>
	)
}

export default Works
