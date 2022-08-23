import styled from 'styled-components';

export const HomeSectionContainer = styled.div`
	width: 90vw;
	min-height: 80vh;
	margin: auto;
	padding-block-start: 1rem;

	@media screen and (min-width: 641px) {
		padding-block-start: 3rem;
		width: 65vw;
	}

	@media screen and (min-width: 1280px) {
		width: 80vw;
	}
`;

export const Homewrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: var(--big-gap);
	min-height: 78vh;

	@media screen and (min-width: 1280px) {
		flex-direction: row;
		min-height: 74vh;
		> * {
			flex: 1 1 40%;
		}
	}
`;

export const HomeHeader = styled.header`
	display: flex;
	flex-direction: column;
	gap: var(--big-gap);
	text-align: center;

	p:first-child {
		letter-spacing: 3.375px;
	}

	p:last-child {
		line-height: var(--big-font);
	}

	> * {
		font-weight: 400;
	}

	@media screen and (min-width: 641px) {
		gap: calc(var(--medium-gap) - 2vh);
	}

	@media screen and (min-width: 1280px) {
		text-align: left;
	}
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const HomeExploreBtn = styled.button`
	color: var(--primary);
	text-transform: uppercase;
	width: 150px;
	height: 150px;
	border-radius: 50%;
	font-size: var(--semi-medium-font);
	transition: all var(--transition);

	:hover {
		box-shadow: 0 0 0rem 2rem var(--primary);
	}

	@media screen and (min-width: 641px) {
		font-size: var(--big-font);
		width: 220px;
		height: 220px;
		:hover {
			box-shadow: 0 0 0rem 2rem var(--primary);
		}
	}

	@media screen and (min-width: 1280px) {
		width: 274px;
		height: 274px;
		:hover {
			box-shadow: 0 0 0rem 5rem var(--primary);
		}
	}
`;
