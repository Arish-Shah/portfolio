import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;

	a {
		color: var(--muted);
		padding: 2rem 0.15rem;
		margin: 0 2rem;
		transition: width 200ms ease-in-out;

		&::after {
			content: '';
			width: 0;
			display: block;
			height: 5px;
			background: var(--blue);
			margin-top: 1rem;
			transition: width 200ms ease-in-out;
		}

		&:hover {
			color: var(--blue);

			&::after {
				width: 100%;
			}
		}
	}
`;

const Navbar = () => {
	return (
		<StyledNavbar>
			<a href="#/works">Works</a>
			<a href="#/contact">Contact</a>
		</StyledNavbar>
	);
};

export default Navbar;
