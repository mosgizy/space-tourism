import styled from 'styled-components';

export const CarouselWrapper = styled.div`
	margin-block-start: 1.5rem;
	position: relative;

	img {
		height: 300px;
		margin: auto;
	}

	div > button {
		display: none;
	}

	ul {
		position: absolute !important;
		left: 50%;
		top: calc(40% + 5vh) !important;
		/* bottom: 15.5rem; */
		transform: translateX(-50%);

		display: flex;
		gap: 0.5rem;
	}

	li > button {
		width: 10px;
		height: 10px;
	}
`;

export const ImageWrapper = styled.div`
	display: flex;
	border-bottom: 2px solid var(--underline);
`;

export const infoContent = styled.div`
	display: flex;
`;
export const Title = styled.div`
	text-transform: uppercase;
	margin-block: 1.5rem;
	p {
		color: var(--white);
		mix-blend-mode: normal;
		opacity: 0.5;
	}
`;
export const AboutText = styled.div``;
export const MemberInfoWrapper = styled.div`
	margin-block-start: 4rem;
	text-align: center;
	line-height: 1.6;
`;
