import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.div`
	padding: 1rem 0;
	width: 100%;
	position: fixed;

	.brand::before {
		content: "${props => (props.goingUp ? '<Ishaq />' : 'Mohammed Ishaq')}";
		font-family: monospace;
	}
`;

const Navbar = ({ goingUp }) => {
	return (
		<StyledNavbar goingUp={goingUp}>
			<div className="brand"></div>
		</StyledNavbar>
	);
};

export default Navbar;
