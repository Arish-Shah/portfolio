import React, { useState } from 'react'

//images import
import christmas from '../assets/christmas.png'
import cloud from '../assets/cloud.jpg'
import hbs from '../assets/hbs.jpg'
import mss from '../assets/mss.jpg'
import page3 from '../assets/page-3.jpg'
import page4 from '../assets/page-4.jpg'
import page5 from '../assets/page-5.jpg'
import photoshopWorkshop from '../assets/photoshop-workshop.jpg'
import seasonsGreeting from '../assets/seasons-greeting.jpg'

const Works = () => {
	// const [selectedImage, setSelectedImage] = useState(null)
	// const showImage = null

	const images = [
		{ src: christmas, alt: 'Christmas' },
		{ src: cloud, alt: 'Cloud' },
		{ src: hbs, alt: 'HostBigSpace' },
		{ src: mss, alt: 'MSS' },
		{ src: page3, alt: 'Page 3' },
		{ src: page4, alt: 'Page 4' },
		{ src: page5, alt: 'Page 5' },
		{ src: photoshopWorkshop, alt: 'Photoshop Workshop' },
		{ src: seasonsGreeting, alt: "Season's Greetings" }
	]

	return (
		<div className="works">
			{images.map((image, index) => (
				<img key={index} src={image.src} alt={image.alt} />
			))}
		</div>
	)
}

const PopUp = ({ img, alt }) => {
	return (
		<div className="backdrop">
			<div className="modal">
				<img src={img} alt={alt} />
			</div>
		</div>
	)
}

export default Works
