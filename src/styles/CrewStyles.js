import styled from 'styled-components';

export const CarouselWrapper = styled.div`
	margin-block-start: 2rem;
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
		top: 330px !important;
		transform: translate(-50%);
		display: flex;
		gap: 0.5rem;

		@media screen and (min-width: 641px) {
			top: 240px !important;
		}

		@media screen and (min-width: 1280px) {
			left: calc(0% + 2.2vw);
			bottom: 10% !important;
			top: unset !important;
		}
	}

	li > button {
		width: 10px;
		height: 10px;
	}
`;

export const ImageWrapper = styled.div`
	display: flex;
	border-bottom: 2px solid var(--underline);

	@media screen and (min-width: 641px) {
		margin-block-start: 3.5rem;
		border-bottom: unset;
		img {
			max-width: 100% !important;
			height: 532px;
		}
	}

	@media screen and (min-width: 1280px) {
		margin-block-start: unset;

		img {
			height: calc(700px + 2.5vh) !important;
		}
	}
`;

export const InfoContent = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 641px) {
		flex-direction: column-reverse;
		justify-content: space-between;
		height: 100%;
		max-width: 540px;
		margin: auto;
	}

	@media screen and (min-width: 1280px) {
		flex-direction: row-reverse;
		align-items: center;
		max-width: 1400px;
	}
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

	@media screen and (min-width: 641px) {
		margin-block-start: 0;
	}

	@media screen and (min-width: 1280px) {
		flex: 0 0 35%;
		text-align: left;
	}
`;
