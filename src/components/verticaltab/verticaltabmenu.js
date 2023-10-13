import React, { useState } from 'react';
import './verticaltab.css'
import VerticalTabData from './verticaltabdata'
import Bakery from '../leftbarcontent/bakery/bakery'
import Cannedfood from '../leftbarcontent/cannedfood/cannedfood'
import Preparedfood from '../leftbarcontent/preaparedfood/preparedfood'
import Fruits from '../leftbarcontent/fruits/fruits'
import Dairy from '../leftbarcontent/dairyegg/dairyegg'
import Frozen from '../leftbarcontent/frozen/frozen'
import MeatseaFood from '../leftbarcontent/meatsea/meatseafood'


const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="vertical-tabs">
      <div className="tab-menu">
        {VerticalTabData.map((name, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            <div className="tab-name">
              {name.Name}
            </div>
          </div>
        ))}

      </div>

      <div className="tab-content">
        {/* Render different components based on the activeTab */}
        {activeTab === 0 && <Bakery />}
        {activeTab === 1 && <Cannedfood />}
        {activeTab === 2 && <Preparedfood />}
        {activeTab === 3 && <Fruits />}
        {activeTab === 4 && <Dairy />}
        {activeTab === 5 && <Frozen />}
        {activeTab === 6 && <MeatseaFood />}
      </div>
    </div>
  );
}

export default VerticalTabs;
