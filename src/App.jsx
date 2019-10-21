import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';

const App = () => {
	const [up, setUp] = useState(false);

	useEffect(() => {
		window.onscroll = () => {
			if (window.scrollY === 0) {
				setUp(false);
			} else {
				setUp(true);
			}
		};
	}, []);

	return (
		<div className="App">
			<Navbar goingUp={up} />
			<div style={{ height: '1000px' }}></div>
		</div>
	);
};

export default App;
