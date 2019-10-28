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
				<WorkContent title={image.title} text={image.text} type={image.type} />
				<div className="work-image">
					<div className="work-image-container">
						<img src={image.src} alt={image.alt} />
					</div>
				</div>
			</div>
		</a>
	)
}

const WorkContent = ({ title, text, type }) => {
	return (
		<div className="work-description-container">
			<div className="work-description">
				<h6>{type}</h6>
				<h3>{title}</h3>
				<p>{text}</p>
				<div className="work-button">
					Details
					<span>→</span>
				</div>
			</div>
		</div>
	)
}

export default Works
