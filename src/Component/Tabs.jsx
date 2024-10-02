import React, { useState } from 'react';

const TwoTabsPage = ({}) => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tab-buttons">
        <button
          className={activeTab === 'tab1' ? 'active' : ''}
          onClick={() => handleTabClick('tab1')}
        >
          Tab 1
        </button>
        <button
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={() => handleTabClick('tab2')}
        >
          Tab 2
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'tab1' && (
          <div>
            <h2>Tab 1 Content</h2>
            <p>This is the content of Tab 1.</p>
          </div>
        )}
        {activeTab === 'tab2' && (
          <div>
            <h2>Tab 2 Content</h2>
            <p>This is the content of Tab 2.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TwoTabsPage;
