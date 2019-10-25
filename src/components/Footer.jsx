import React from 'react'

const Footer = () => {
	return (
		<div className="footer">
			<span>
				Made with{' '}
				<span role="img" style={{ color: 'red' }} aria-labelledby="heart">
					❤
				</span>{' '}
				&copy; Mohammed Ishaq {new Date().getFullYear()}
			</span>
		</div>
	)
}

export default Footer
