import React from 'react';
import {
	ButtonWrapper,
	HomeExploreBtn,
	HomeHeader,
	Homewrapper,
	HomeSectionContainer,
} from '../../styles/HomeStyles';
import { SectionWrapper } from '../../styles/GeneralStyles';
import desktop from '../../resources/assets/home/background-home-desktop.jpg';
import mobile from '../../resources/assets/home/background-home-mobile.jpg';
import tablet from '../../resources/assets/home/background-home-tablet.jpg';

const Home = () => {
	return (
		<SectionWrapper img={[desktop, tablet, mobile]}>
			<HomeSectionContainer>
				<Homewrapper>
					<HomeHeader>
						<p>SO, YOU WANT TO TRAVEL TO</p>
						<h1>SPACE</h1>
						<p>
							Let’s face it; if you want to go to space, you might as well
							genuinely go to outer space and not hover kind of on the edge of
							it. Well sit back, and relax because we’ll give you a truly out of
							this world experience!
						</p>
					</HomeHeader>
					<ButtonWrapper>
						<HomeExploreBtn>Explore</HomeExploreBtn>
					</ButtonWrapper>
				</Homewrapper>
			</HomeSectionContainer>
		</SectionWrapper>
	);
};

export default Home;
