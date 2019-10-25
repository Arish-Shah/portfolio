import React from 'react'

const Navbar = () => {
	const goto = (event, top) => {
		event.preventDefault()

		window.scrollTo({
			top: top,
			behavior: 'smooth'
		})
	}

	return (
		<div className="navbar-container">
			<nav className="navbar">
				<a onClick={event => goto(event, 1100)} href="#/works">
					Works
				</a>
				<a onClick={event => goto(event, 10000)} href="#/contact">
					Contact
				</a>
			</nav>
		</div>
	)
}

export default Navbar
