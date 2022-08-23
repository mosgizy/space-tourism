import React, { useState, useEffect } from 'react';
import logo from '../resources/icon/logo.svg';
import hamburger from '../resources/icon/icon-hamburger.svg';
import close from '../resources/icon/icon-close.svg';
import {
	HeaderWrapper,
	LogoWrapper,
	NavLinkWrapper,
	CustomNavLink,
	NavWrapper,
	Hamburger,
	HamburgerWrapper,
	CloseIcon,
	NavLinks,
} from '../styles/NavBarStyles';
import { Img } from '../styles/GeneralStyles';
import { useLocation, useNavigate } from 'react-router-dom';

const NavBar = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const [active, setActive] = useState(`${location.pathname.slice(1)}`);

	const handleClick = (value) => {
		setIsOpen(value);
	};

	const closeNav = (e) => {
		handleClick(false);
		handleActiveNav(e);
	};

	const handleActiveNav = (e) => {
		setActive(e.target.name);
	};

	useEffect(() => {
		if (location.pathname === '/') {
			setActive('home');
			navigate('/home');
		}
	}, []);

	return (
		<HeaderWrapper>
			<NavWrapper>
				<LogoWrapper>
					<Img src={logo} alt="logo" />
				</LogoWrapper>
				<Hamburger>
					<div className="line"></div>
					<HamburgerWrapper onClick={() => handleClick(true)}>
						<Img src={hamburger} alt="hamburger" />
					</HamburgerWrapper>
					<NavLinkWrapper active={isOpen}>
						<CloseIcon onClick={() => handleClick(false)}>
							<Img src={close} alt="close" />
						</CloseIcon>
						<NavLinks activeLink={active}>
							<CustomNavLink
								to="/home"
								name="home"
								onClick={closeNav}
								className="home"
							>
								<span>00</span> home
							</CustomNavLink>
							<CustomNavLink
								to="/destination"
								name="destination"
								onClick={closeNav}
								className="destination"
							>
								<span>01</span> destination
							</CustomNavLink>
							<CustomNavLink
								to="/crew"
								name="crew"
								onClick={closeNav}
								className="crew"
							>
								<span>02</span> crew
							</CustomNavLink>
							<CustomNavLink
								to="/technology"
								name="technology"
								onClick={closeNav}
								className="technology"
							>
								<span>03</span> technology
							</CustomNavLink>
						</NavLinks>
					</NavLinkWrapper>
				</Hamburger>
			</NavWrapper>
		</HeaderWrapper>
	);
};

export default NavBar;
