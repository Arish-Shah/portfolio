import React, { useState } from 'react'

//images import
//LARGE
import largeChristmas from '../assets/large/christmas.png'
import largeCloud from '../assets/large/cloud.jpg'
import largeHbs from '../assets/large/hbs.jpg'
import largeMss from '../assets/large/mss.jpg'
import largePage3 from '../assets/large/page-3.jpg'
import largePage4 from '../assets/large/page-4.jpg'
import largePage5 from '../assets/large/page-5.jpg'
import largePhotoshopWorkshop from '../assets/large/photoshop-workshop.jpg'
import largeSeasonsGreeting from '../assets/large/seasons-greeting.jpg'

//SMALL
import smallChristmas from '../assets/small/christmas.jpg'
import smallCloud from '../assets/small/cloud.jpg'
import smallHbs from '../assets/small/hbs.jpg'
import smallMss from '../assets/small/mss.jpg'
import smallPage3 from '../assets/small/page-3.jpg'
import smallPage4 from '../assets/small/page-4.jpg'
import smallPage5 from '../assets/small/page-5.jpg'
import smallPhotoshopWorkshop from '../assets/small/photoshop-workshop.jpg'
import smallSeasonsGreeting from '../assets/small/seasons-greeting.jpg'

const Works = () => {
	const images = [
		{
			large: largeChristmas,
			small: smallChristmas,
			alt: 'Christmas Sale',
			loaded: false
		},
		{
			large: largeCloud,
			small: smallCloud,
			alt: 'Cloud Hosting',
			loaded: false
		},
		{ large: largeHbs, small: smallHbs, alt: 'HostBigSpace', loaded: false },
		{
			large: largeMss,
			small: smallMss,
			alt: 'Microsoft Student Society',
			loaded: false
		},
		{ large: largePage3, small: smallPage3, alt: 'Page 3', loaded: false },
		{ large: largePage4, small: smallPage4, alt: 'Page 4', loaded: false },
		{ large: largePage5, small: smallPage5, alt: 'Page 5', loaded: false },
		{
			large: largePhotoshopWorkshop,
			small: smallPhotoshopWorkshop,
			alt: 'Photoshop Workshop',
			loaded: false
		},
		{
			large: largeSeasonsGreeting,
			small: smallSeasonsGreeting,
			alt: "Season's Greetings",
			loaded: false
		}
	]

	return (
		<div className="works">
			{images.map((image, index) => (
				<Work key={index} details={image} />
			))}
		</div>
	)
}

const Work = ({ details }) => {
	const [loaded, setLoaded] = useState(false)

	return (
		<div className="work">
			<div className="image-placeholder">
				<img
					src={details.large}
					onLoad={() => setLoaded(true)}
					alt={details.alt}
					style={{ opacity: loaded ? '1' : '0' }}
				/>
			</div>
		</div>
	)
}

export default Works
