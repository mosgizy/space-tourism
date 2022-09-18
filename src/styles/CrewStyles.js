import styled from 'styled-components';

export const CarouselWrapper = styled.div`
	margin-block-start: 1.5rem;
	position: relative;
	border-bottom: 2px solid var(--underline);

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
		top: unset !important;
		bottom: -30px;
		translate: -50%;

		display: flex;
		gap: 0.5rem;
	}

	li > button {
		fill: var(--white) !important;
		width: 10px;
		height: 10px;
	}
`;

export const ImageWrapper = styled.div`
	display: flex;
`;

export const infoContent = styled.div``;
export const Title = styled.div``;
export const AboutText = styled.div``;
