import React from 'react'

const Footer = () => {
	return (
		<div className="footer">
			<span>
				Made with{' '}
				<span role="img" aria-label="heart" style={{ color: 'red' }}>
					❤️
				</span>{' '}
				&copy; Mohammed Ishaq {new Date().getFullYear()}
			</span>
		</div>
	)
}

export default Footer
