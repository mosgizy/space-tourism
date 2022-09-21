import React from 'react';
import { TabContainer } from '../styles/DestinationStyles';

const Tabs = ({ setTabIndex, tab, data, TabWrapper, indexProp, flex }) => {
	return (
		<TabContainer flex={flex}>
			{data.map((item, index) => {
				return (
					<TabWrapper active={tab === index} onClick={() => setTabIndex(index)}>
						{indexProp ? index + 1 : item.name}
					</TabWrapper>
				);
			})}
		</TabContainer>
	);
};

export default React.memo(Tabs);
