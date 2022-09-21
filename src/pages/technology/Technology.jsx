import React, { useEffect, useState } from 'react';
import {
	Container,
	Img,
	SectionContainer,
	SectionHeaderText,
	SectionWrapper,
} from '../../styles/GeneralStyles';
import desktop from '../../resources/assets/technology/background-technology-desktop.jpg';
import tablet from '../../resources/assets/technology/background-technology-tablet.jpg';
import mobile from '../../resources/assets/technology/background-technology-mobile.jpg';
import data from '../../resources/data.json';
import {
	ImageWrapper,
	InfoWrapper,
	TabWrapper,
	TechContent,
} from '../../styles/TechnologyStyles';
import Tab from '../../components/Tabs';
import { AboutText, MemberInfoWrapper, Title } from '../../styles/CrewStyles';

const Technology = () => {
	const technologyData = data.technology;

	const [tabIndex, setTabIndex] = useState(0);
	const [imageUrl, setImageUrl] = useState(technologyData[tabIndex].images);

	useEffect(() => {
		setImageUrl(technologyData[tabIndex].images);
	}, [tabIndex]);

	return (
		<SectionWrapper img={[desktop, tablet, mobile]}>
			<Container marginInline={'calc(5rem + 10vw)'}>
				<SectionHeaderText>
					<span>0.3</span> space launch 101
				</SectionHeaderText>
				<SectionContainer direction={'row-reverse'}>
					<ImageWrapper>
						<picture>
							<source media="(min-width:1280px)" srcset={imageUrl.portrait} />
							<Img src={imageUrl.landscape} alt="space ships and shuttles" />
						</picture>
					</ImageWrapper>
					<TechContent>
						<Tab
							setTabIndex={setTabIndex}
							tab={tabIndex}
							data={technologyData}
							TabWrapper={TabWrapper}
							indexProp
							flex="column"
						/>
						<InfoWrapper>
							<MemberInfoWrapper>
								<Title>
									<p>the terminology...</p>
									<h4>{technologyData[tabIndex].name}</h4>
								</Title>
								<AboutText>{technologyData[tabIndex].description}</AboutText>
							</MemberInfoWrapper>
						</InfoWrapper>
					</TechContent>
				</SectionContainer>
			</Container>
		</SectionWrapper>
	);
};

export default Technology;
