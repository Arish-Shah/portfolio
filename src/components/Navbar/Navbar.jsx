import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const StyledNavbar = styled.div`
	padding: 1rem 0;
	width: 100%;
	position: fixed;
	display: flex;
`;

const Navbar = ({ goingUp }) => {
	return (
		<StyledNavbar>
			<Logo goingUp={goingUp} />
		</StyledNavbar>
	);
};

export default Navbar;
