import React from 'react';
import {
	SectionWrapper,
	SectionHeaderText,
	Img,
	Container,
} from '../../styles/GeneralStyles';
import {
	AboutText,
	CarouselWrapper,
	ImageWrapper,
	Title,
	InfoContent,
	MemberInfoWrapper,
} from '../../styles/CrewStyles';
import desktop from '../../resources/assets/crew/background-crew-desktop.jpg';
import tablet from '../../resources/assets/crew/background-crew-tablet.jpg';
import mobile from '../../resources/assets/crew/background-crew-mobile.jpg';
import data from '../../resources/data.json';
import Carousel from 'nuka-carousel';

const Crew = () => {
	const crewData = data.crew;

	const defaultControlsConfig = {
		nextButtonText: '',
		prevButtonText: '',
		pagingDotsStyle: {
			fill: 'white',
		},
	};

	return (
		<SectionWrapper img={[desktop, tablet, mobile]}>
			<Container maxWidth={1400}>
				<SectionHeaderText>
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
					>
						{crewData.map((crew, index) => {
							return (
								<InfoContent>
									<ImageWrapper>
										<Img key={index} src={crew.images.png} alt="crews" />
									</ImageWrapper>
									<MemberInfoWrapper>
										<Title>
											<p>{crewData[index].role}</p>
											<h4>{crewData[index].name}</h4>
										</Title>
										<AboutText>{crewData[index].bio}</AboutText>
									</MemberInfoWrapper>
								</InfoContent>
							);
						})}
					</Carousel>
				</CarouselWrapper>
			</Container>
		</SectionWrapper>
	);
};

export default Crew;
