import React, { useState } from 'react';
import {
	SectionContainer,
	SectionHeaderText,
	SectionWrapper,
	Img,
} from '../../styles/GeneralStyles';
import desktop from '../../resources/assets/destination/background-destination-desktop.jpg';
import tablet from '../../resources/assets/destination/background-destination-tablet.jpg';
import mobile from '../../resources/assets/destination/background-destination-mobile.jpg';
import data from '../../resources/data.json';
import { Header, ImageWrapper } from '../../styles/DestinationStyles';

const Destination = () => {
	const destinationData = data.destinations;
	const [imageUrl, setImageUrl] = useState(destinationData[0].images.webp);
	console.log(destinationData);

	const handleClick = () => {
		setImageUrl(destinationData[0].images.png);
	};

	return (
		<SectionWrapper img={[desktop, tablet, mobile]}>
			<SectionContainer>
				<Header>
					<SectionHeaderText>
						<span>0.1</span> pick your destination
					</SectionHeaderText>
					<ImageWrapper onClick={handleClick}>
						<Img src={`../../resources${imageUrl}`} alt="image of the moon" />
					</ImageWrapper>
				</Header>
			</SectionContainer>
		</SectionWrapper>
	);
};

export default Destination;
