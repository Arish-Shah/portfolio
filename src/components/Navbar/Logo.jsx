import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
	overflow: hidden;
	width: 11em;
	height: 2em;

	.top {
		font-size: 1.5em;
		font-family: monospace;
		margin-left: ${({ goingUp }) => (goingUp ? '-8em' : '0em')};
		transition: margin 250ms linear;
	}

	.not-top {
		font-family: monospace;
		font-size: 1.5em;
		margin-left: ${({ goingUp }) => (goingUp ? '0' : '0em')};
	}
`;

const Logo = ({ goingUp }) => {
	return (
		<StyledLogo goingUp={goingUp}>
			<span className="top">Mohammed Ishaq</span>{' '}
			<span className="not-top">&lt;Ishaq /&gt;</span>
		</StyledLogo>
	);
};

export default Logo;
