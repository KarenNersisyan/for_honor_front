import { useState } from 'react';
import PropTypes from 'prop-types';
// npm packages
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

// ----------------------------------------------------------------------

TabsStyled.propTypes = {
  tabHeader: PropTypes.array,
  tabBody: PropTypes.array,
};

// ----------------------------------------------------------------------

export default function TabsStyled({ tabHeader, tabBody }) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedTabIndex(index);
  };

  return (
    <Tabs className={'react-tabs'}>
      <TabList className={'tab-header'}>
        {tabHeader &&
          tabHeader.map((tab, index) => (
            <Tab
              key={index}
              onClick={() => handleTabSelect(index)}
              className={`tab-nav ${
                index < selectedTabIndex ? 'completed' : ''
              }`}
            >
              <div className='tab-nav-item'>
                <strong className={'tab-number'}>{index + 1}</strong>
                <span className={'tab-label'}>{tab.label}</span>
              </div>
            </Tab>
          ))}
      </TabList>

      <div className='tab-body'>
        {tabBody &&
          tabBody.map((item, index) => (
            <TabPanel key={index}>{item.node}</TabPanel>
          ))}
      </div>
    </Tabs>
  );
}
