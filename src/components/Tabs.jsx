import React from 'react';
import { TabWrapper, TabContainer } from '../styles/DestinationStyles';

const Tabs = ({ setTabIndex, tab, data }) => {
	return (
		<TabContainer>
			{data.map((item, index) => {
				return (
					<TabWrapper active={tab === index} onClick={() => setTabIndex(index)}>
						{item.name}
					</TabWrapper>
				);
			})}
		</TabContainer>
	);
};

export default React.memo(Tabs);
