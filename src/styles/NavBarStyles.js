import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
	position: fixed;
	color: var(--white);
	width: 100%;
`;

export const LogoWrapper = styled.div`
	flex: 1 1 10%;
	@media screen and (min-width: 641px) {
		display: flex;
		align-items: center;
		padding-inline-start: 2.5rem;
	}
`;

export const NavWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-block: 2rem;
	padding-inline: 1.5rem;

	@media screen and (min-width: 641px) {
		align-items: unset;
		padding-inline: unset;
		padding-block: unset;
		height: 6rem;
	}

	@media screen and (min-width: 1280px) {
		margin-block: 2rem;
	}
`;

export const Hamburger = styled.div`
	@media screen and (min-width: 1280px) {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex: 0 0 60%;

		.line {
			position: relative;
			height: 1px;
			width: calc(200px, 200px +5vw, 400px);
			min-width: 15rem;
			width: 29rem;
			margin-right: -2rem;
			background-color: var(--white);
			mix-blend-mode: normal;
			z-index: 1;
		}
	}
`;

export const HamburgerWrapper = styled.div`
	cursor: pointer;
	user-select: none;

	@media screen and (min-width: 641px) {
		display: none;
	}
`;

export const NavLinkWrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	height: 100vh;
	width: 15.875rem;
	padding-block: 2.5rem;
	background-color: rgba(255, 255, 255, 0.04);
	backdrop-filter: blur(81.5485px);
	transform: translateX(${({ active }) => (active ? '0' : '100%')});
	transition: transform 0.35s ease-in-out;

	@media screen and (min-width: 641px) {
		all: unset;
		display: block;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.04);
		backdrop-filter: blur(81.5485px);
		padding-inline: 3rem;
	}

	@media screen and (min-width: 1280px) {
		padding-inline: 6rem 10rem;
	}
`;

export const CloseIcon = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-block-end: 4rem;
	padding-inline: 1.5rem;
	cursor: pointer;
	user-select: none;

	@media screen and (min-width: 641px) {
		display: none;
	}
`;

export const NavLinks = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding-inline-start: 1.5rem;
	user-select: none;

	.home {
		border-right: ${({ activeLink }) =>
			activeLink === 'home' ? '0.15rem solid var(--white)' : ''};
	}

	.destination {
		border-right: ${({ activeLink }) =>
			activeLink === 'destination' ? '0.15rem solid var(--white)' : ''};
	}

	.crew {
		border-right: ${({ activeLink }) =>
			activeLink === 'crew' ? '0.15rem solid var(--white)' : ''};
	}

	.technology {
		border-right: ${({ activeLink }) =>
			activeLink === 'technology' ? '0.15rem solid var(--white)' : ''};
	}

	@media screen and (min-width: 641px) {
		.home {
			border-right: unset;
			border-bottom: ${({ activeLink }) =>
				activeLink === 'home' ? '0.15rem solid var(--white)' : ''};
		}

		.destination {
			border-right: unset;
			border-bottom: ${({ activeLink }) =>
				activeLink === 'destination' ? '0.15rem solid var(--white)' : ''};
		}

		.crew {
			border-right: unset;
			border-bottom: ${({ activeLink }) =>
				activeLink === 'crew' ? '0.15rem solid var(--white)' : ''};
		}

		.technology {
			border-right: unset;
			border-bottom: ${({ activeLink }) =>
				activeLink === 'technology' ? '0.15rem solid var(--white)' : ''};
		}
	}

	@media screen and (min-width: 641px) {
		flex-direction: row;
		align-items: center;
		gap: 2.5rem;
		padding-inline-end: unset;
		height: 100%;
	}
`;

export const CustomNavLink = styled(NavLink)`
	text-transform: uppercase;
	font-family: var(--primary-font);
	font-weight: 400;
	padding-block: 0.5rem;
	position: relative;
	transition: all 0.2s ease-in-out;

	:hover {
		border-right: 0.15rem solid var(--secondary);
	}

	@media screen and (min-width: 641px) {
		font-size: 0.75rem;
		border-right: unset;

		:hover {
			border-right: unset;
			border-bottom: 0.15rem solid var(--secondary);
		}
	}

	@media screen and (min-width: 641px) {
		display: flex;
		align-items: center;
		height: 100%;
		padding-block: unset;
	}

	span {
		font-family: var(--secondary-font);
		font-weight: 700;
		margin-inline-end: 1rem;

		@media screen and (min-width: 641px) {
			display: none;
		}

		@media screen and (min-width: 1280px) {
			display: inline-block;
			margin-inline-end: 0.5rem;
		}
	}
`;
