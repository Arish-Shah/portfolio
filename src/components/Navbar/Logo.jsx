import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
	overflow: hidden;
	height: 2em;

	.top {
		font-size: 1.5em;
		font-weight: bold;
		font-family: monospace;
		display: ${({ goingUp }) => (goingUp ? 'none' : 'inline-block')};
		margin-left: 0em;
		animation: slide 250ms linear;
	}

	.not-top {
		font-size: 1.5em;
		font-weight: bold;
		font-family: monospace;
		display: ${({ goingUp }) => (goingUp ? 'inline-block' : 'none')};
		margin-left: 0em;
		animation: slide 250ms linear;
	}

	@keyframes slide {
		0% {
			margin-left: -10em;
		}
		100% {
			margin-left: 0;
		}
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
