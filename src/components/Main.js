import React from 'react';
import Typewriter from './Typewriter';

const Hero = () => {
	return (
		<div className="hero-container">
			<Typewriter className="hero-title" text="Mohammed Ishaq" />
			<div className="hero-description">
				I am a designer who likes designing blah blah.
				<br />
				Check out my <a href="#projects">side-projects</a> below.
			</div>
		</div>
	);
};

export default Hero;
