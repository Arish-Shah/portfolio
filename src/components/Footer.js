import React from 'react';

const Footer = () => {
	return (
		<div className="footer">
			<span>
				Made with
				<span role="img" aria-labelledby="heart">
					❤️
				</span>{' '}
				&copy; {new Date().getFullYear()}
			</span>
		</div>
	);
};

export default Footer;
