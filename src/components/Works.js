import React from 'react'
import ProgressiveImage from 'react-progressive-image'

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
	document.body.style.overflow = 'auto'

	const images = [
		{ large: largeChristmas, small: smallChristmas, alt: 'Christmas' },
		{ large: largeCloud, small: smallCloud, alt: 'Cloud' },
		{ large: largeHbs, small: smallHbs, alt: 'HostBigSpace' },
		{ large: largeMss, small: smallMss, alt: 'MSS' },
		{ large: largePage3, small: smallPage3, alt: 'Page 3' },
		{ large: largePage4, small: smallPage4, alt: 'Page 4' },
		{ large: largePage5, small: smallPage5, alt: 'Page 5' },
		{
			large: largePhotoshopWorkshop,
			small: smallPhotoshopWorkshop,
			alt: 'Photoshop Workshop'
		},
		{
			large: largeSeasonsGreeting,
			small: smallSeasonsGreeting,
			alt: "Season's Greetings"
		}
	]

	return (
		<>
			<div className="works">
				{images.map((image, index) => (
					<div className="work-container" key={index}>
						<ProgressiveImage src={image.large} placeholder={image.small}>
							{(src, loading) => (
								<img
									style={{ filter: loading ? 'blur(20px)' : 'none' }}
									src={src}
									alt=""
								/>
							)}
						</ProgressiveImage>
					</div>
				))}
			</div>
		</>
	)
}

export default Works
