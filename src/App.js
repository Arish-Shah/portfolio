import React from 'react';

import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';

import statements from './content/about-me';

const App = () => {
	return (
		<div className="container-lg">
			<div className="home-container">
				<Navbar />
				<Main />
				<About statements={statements} />
			</div>
		</div>
	);
};

export default App;
