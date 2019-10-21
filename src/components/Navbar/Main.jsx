import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
	padding: 1.25rem;

	.terminal {
		margin-top: 5vh;
		font-family: monospace;
		font-size: 2.75rem;
		padding: 0.5rem 0 0.75rem 0;

		&::before {
			content: '>';
			margin-right: 1rem;
			color: var(--blue);
		}

		span {
			background-color: var(--blue);
			margin-left: 0.25rem;
			animation: blink 1s infinite steps(1);
		}
	}

	@keyframes blink {
		0% {
			opacity: 0;
		}

		50% {
			opacity: 1;
		}
	}
`;

const Main = () => {
	return (
		<StyledMain>
			<div className="terminal">
				Mohammed Ishaq
				<span>&nbsp;&nbsp;</span>
			</div>
		</StyledMain>
	);
};

export default Main;
