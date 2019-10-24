import React, { useState } from 'react'
import Img from 'react-image'

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
import smallChristmas from '../assets/small/christmas.jpeg'
import smallCloud from '../assets/small/cloud.jpeg'
import smallHbs from '../assets/small/hbs.jpeg'
import smallMss from '../assets/small/mss.jpeg'
import smallPage3 from '../assets/small/page-3.jpeg'
import smallPage4 from '../assets/small/page-4.jpeg'
import smallPage5 from '../assets/small/page-5.jpeg'
import smallPhotoshopWorkshop from '../assets/small/photoshop-workshop.jpeg'
import smallSeasonsGreeting from '../assets/small/seasons-greeting.jpeg'

const Works = () => {
	const [selectedImage, setSelectedImage] = useState(null)
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

	const handleClick = index => {
		setSelectedImage(images[index])
	}

	const closeModal = event => {
		if (!event.target.classList.contains('modal')) setSelectedImage(null)
	}

	return (
		<>
			<div className="works">
				{images.map((image, index) => (
					<div className="work-container" key={index}>
						<Img
							src={image.large}
							loader={image.small}
							alt={image.alt}
							onClick={() => handleClick(index)}
						/>
					</div>
				))}
			</div>
			{selectedImage && <PopUp image={selectedImage} closeModal={closeModal} />}
		</>
	)
}

const PopUp = ({ image, closeModal }) => {
	document.body.style.overflow = 'hidden'

	return (
		<div className="pop-up">
			<div className="backdrop">
				<span className="cross" onClick={e => closeModal(e)}>
					&times;
				</span>
				<div className="modal">
					<Img src={image.large} loader={image.small} />
				</div>
			</div>
		</div>
	)
}

export default Works
