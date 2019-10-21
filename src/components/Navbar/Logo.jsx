import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
	overflow: hidden;
	height: 2em;
	overflow: hidden;
	width: 10em;

	.top,
	.not-top {
		font-size: 1.5em;
		font-weight: bold;
		font-family: monospace;
	}

	.top {
		margin-left: ${props => (props.goingUp ? '-8em' : '0em')};
		transition: margin 0.1s linear;
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
