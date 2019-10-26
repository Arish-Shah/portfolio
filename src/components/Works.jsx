import React from 'react'

//Image imports
import christmas from '../images/christmas.jpeg'
import cloud from '../images/cloud.jpeg'
import hbs from '../images/hbs.jpeg'
import mss from '../images/mss.jpeg'
import page2 from '../images/page-2.jpeg'
import photoshop from '../images/photoshop-workshop.jpeg'
import season from '../images/season.jpeg'

const Works = () => {
	const images = [
		{ src: christmas, alt: 'Christmas: HostBigSpace' },
		{ src: cloud, alt: 'Cloud Hosting: HostBigSpace' },
		{ src: hbs, alt: 'Wordpress Hosting: HostBigSpace' },
		{ src: mss, alt: 'Microsoft Student Society' },
		{ src: page2, alt: 'Synactics, Al Saqr' },
		{ src: photoshop, alt: 'Hands-on Workshop: Photoshop' },
		{ src: season, alt: "Season's Greetings: HostBigSpace" },
	]

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
