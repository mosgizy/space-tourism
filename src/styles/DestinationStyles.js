import styled from 'styled-components';

export const Header = styled.header`
	width: 100%;
	text-align: center;
	margin-block-start: 1rem;
`;

export const ImageWrapper = styled.div`
	margin-block: 2rem;

	@media screen and (min-width: 1280px) {
		margin-block: 6rem;
		margin-inline-start: 8rem;
		display: flex;
	}
`;

export const TabContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 2rem;
	@media screen and (min-width: 1280px) {
		justify-content: flex-start;
	}
`;
export const TabWrapper = styled.div`
	text-transform: uppercase;
	letter-spacing: 2.36px;
	padding-block: 1rem;
	color: var(--secondary);
	cursor: pointer;
	transition: var(--transition);

	border-bottom: ${({ active }) =>
		active === true ? '3px solid var(--white)' : 'none'};

	:hover {
		border-bottom: 3px solid var(--white);
	}
`;
