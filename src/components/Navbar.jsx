import React, { useState } from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.div`
	padding: 2rem 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	.navbar-brand {
		background: var(--color);
		color: var(--background);
		font-size: 2.5rem;
		font-weight: 600;
		padding: 0.5rem;
		font-family: monospace;
	}

	.links {
		display: flex;
		flex-direction: row;
		align-items: center;

		a {
			color: var(--color);
			padding: 0.25rem;
			margin: 0 1rem;
			position: relative;

			&:last-of-type {
				margin-right: 1.5rem;
			}

			&::after {
				content: '';
				z-index: -1;
				left: -0.1rem;
				right: -0.1rem;
				bottom: 0;
				background: rgba(0, 123, 255, 0.5);
				position: absolute;
				top: 90%;
				transition: all 0.25s cubic-bezier(0, 0.8, 0.13, 1);
			}

			&:hover:after {
				top: 0%;
			}
		}
	}
`;

const Navbar = () => {
	const [theme, setTheme] = useState('dark');

	const handleTheme = () => {
		const html = document.querySelector('html');
		html.classList.toggle('dark');
		html.classList.toggle('light');

		theme === 'dark' ? setTheme('light') : setTheme('dark');
	};

	return (
		<StyledNavbar>
			<a href="/" className="navbar-brand">
				ishaq.
			</a>
			<div className="links">
				<a href="#/works">Works</a>
				<a href="#/contact">Contact</a>
				<label className="switch">
					<input
						type="checkbox"
						onChange={handleTheme}
						checked={theme === 'dark'}
					/>
					<span className="slider round"></span>
				</label>
			</div>
		</StyledNavbar>
	);
};

export default Navbar;
