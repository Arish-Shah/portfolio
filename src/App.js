import React from 'react';

import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import ContactLinks from './components/ContactLinks';

import statements from './content/about-me';
import Footer from './components/Footer';
import Works from './components/Works';

const App = () => {
	return (
		<div className="container-lg">
			<div className="home-container">
				<Navbar />
				<Main />
				<About statements={statements} />
				<h2 id="/works" className="section-title">
					Works
				</h2>
				<Works />
				<div className="background" />
				<h2 id="/contact" className="section-title">
					Contact Me!
				</h2>
				<ContactLinks />
				<Footer />
			</div>
		</div>
	);
};

export default App;
