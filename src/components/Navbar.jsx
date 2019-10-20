import React, { useState } from 'react';
import styled from 'styled-components';

import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';

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

		a {
			font-size: 0.9rem;
			color: var(--color);
			padding: 0 0.15rem;
			margin: 0 0.75rem;
			position: relative;

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
