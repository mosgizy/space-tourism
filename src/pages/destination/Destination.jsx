import React, { useState, useEffect } from 'react';
import {
	SectionContainer,
	SectionHeaderText,
	SectionWrapper,
	Img,
	SectionContentWrapper,
	SectionContent,
	Container,
} from '../../styles/GeneralStyles';
import desktop from '../../resources/assets/destination/background-destination-desktop.jpg';
import tablet from '../../resources/assets/destination/background-destination-tablet.jpg';
import mobile from '../../resources/assets/destination/background-destination-mobile.jpg';
import data from '../../resources/data.json';
import {
	ImageWrapper,
	Header,
	TabWrapper,
} from '../../styles/DestinationStyles';
import Tab from '../../components/Tabs';

const Destination = () => {
	const destinationData = data.destinations;
	const [tabIndex, setTabIndex] = useState(0);
	const [imageUrl, setImageUrl] = useState(
		destinationData[tabIndex].images.png
	);

	useEffect(() => {
		setImageUrl(destinationData[tabIndex].images.png);
	}, [tabIndex]);

	return (
		<SectionWrapper img={[desktop, tablet, mobile]}>
			<Container maxWidth={1400}>
				<SectionHeaderText mobile>
					<span>0.1</span> pick your destination
				</SectionHeaderText>
				<SectionContainer paddingInline={'1rem'} direction={'row'}>
					<Header>
						<ImageWrapper>
							<Img src={imageUrl} alt="image of the moon" />
						</ImageWrapper>
					</Header>
					<SectionContentWrapper>
						<Tab
							setTabIndex={setTabIndex}
							tab={tabIndex}
							data={destinationData}
							TabWrapper={TabWrapper}
						/>
						<SectionContent>
							<h1>{destinationData[tabIndex].name}</h1>
							<p className="about">{destinationData[tabIndex].description}</p>
							<div className="info">
								<div>
									<p>avg. distance</p>
									<h4>{destinationData[tabIndex].distance}</h4>
								</div>
								<div>
									<p>est. travel time</p>
									<h4>{destinationData[tabIndex].travel}</h4>
								</div>
							</div>
						</SectionContent>
					</SectionContentWrapper>
				</SectionContainer>
			</Container>
		</SectionWrapper>
	);
};

export default Destination;
