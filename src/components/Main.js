import React from 'react'
import Typewriter from './Typewriter'

const Hero = () => {
	const goto = (event, top) => {
		event.preventDefault()

		window.scrollTo({
			top,
			behavior: 'smooth'
		})
	}

	return (
		<div className="hero-container">
			<Typewriter className="hero-title" text="Mohammed Ishaq" />
			<div className="hero-description">
				I am a Graphic designer.
				<br />
				Check out some of my{' '}
				<a onClick={event => goto(event, 1050)} href="#/works">
					works
				</a>{' '}
				below.
			</div>
		</div>
	)
}

export default Hero
