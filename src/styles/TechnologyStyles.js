import styled from 'styled-components';

export const ImageWrapper = styled.div`
	width: 100%;
	margin-block: 2rem;
	img {
		max-width: 100%;
		width: 100%;

		@media screen and (min-width: 1280px) {
			height: 650px;
		}
	}

	@media screen and (min-width: 1280px) {
		flex: 0 0 40%;
		picture {
			float: right;
		}
	}
`;

export const TechContent = styled.div`
	@media screen and (min-width: 1280px) {
		display: flex;
		justify-content: space-between;
		gap: 2.5rem;
	}
`;

export const TabWrapper = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	font-size: 1rem;
	background-color: ${({ active }) =>
		active === true ? 'var(--white)' : 'transparent'};
	color: ${({ active }) =>
		active === true ? 'var(--primary)' : 'var(--white)'};
	display: grid;
	place-items: center;
	border: 1px solid rgba(255, 255, 255, 0.25);
	mix-blend-mode: normal;
	transition: var(--transition);
	cursor: pointer;

	&:hover {
		background-color: var(--white);
		color: var(--primary);
	}

	@media screen and (min-width: 1280px) {
		width: 80px;
		height: 80px;
	}
`;

export const InfoWrapper = styled.div`
	padding-inline: 1rem;
	max-width: 550px;
`;
