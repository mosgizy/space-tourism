import React, { useState } from 'react';
import {
	SectionWrapper,
	SectionContainer,
	SectionHeaderText,
	Header,
	Img,
	SectionContentWrapper,
	SectionContent,
} from '../../styles/GeneralStyles';
import {
	AboutText,
	CarouselWrapper,
	ImageWrapper,
	Title,
} from '../../styles/CrewStyles';
import desktop from '../../resources/assets/crew/background-crew-desktop.jpg';
import tablet from '../../resources/assets/crew/background-crew-tablet.jpg';
import mobile from '../../resources/assets/crew/background-crew-mobile.jpg';
import data from '../../resources/data.json';
import Carousel from 'nuka-carousel';

const Crew = () => {
	const crewData = data.crew;
	const [tabIndex, setTabIndex] = useState(0);

	const defaultControlsConfig = {
		nextButtonText: '',
		prevButtonText: '',
		pagingDotsStyle: {
			fill: 'white',
		},
	};

	return (
		<SectionWrapper img={[desktop, tablet, mobile]}>
			<SectionHeaderText mobile>
				<span>0.2</span> meet your crew
			</SectionHeaderText>
			<SectionContainer>
				<Header>
					<SectionHeaderText desktop>
						<span>0.2</span> meet your crew
					</SectionHeaderText>
					<CarouselWrapper>
						<Carousel
							wrapAround={true}
							animation={'zoom'}
							scrollMode={'page'}
							swiping={true}
							dragging={true}
							dragThreshold={0}
							defaultControlsConfig={defaultControlsConfig}
							// withoutControls={true}
						>
							{crewData.map((crew, index) => {
								return (
									<ImageWrapper>
										<Img key={index} src={crew.images.png} alt="crews" />
									</ImageWrapper>
								);
							})}
						</Carousel>
					</CarouselWrapper>
				</Header>
				<SectionContentWrapper>
					<Title>
						<p>{crewData[tabIndex].role}</p>
						<h4>{crewData[tabIndex].name}</h4>
					</Title>
					<SectionContent>
						<AboutText>{crewData[tabIndex].bio}</AboutText>
					</SectionContent>
				</SectionContentWrapper>
			</SectionContainer>
		</SectionWrapper>
	);
};

export default Crew;
