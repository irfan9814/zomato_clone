import React, { useState } from 'react';
import Header from '../../components/pageSections/header/header';
import Tab from '../../components/pageSections/tabs/tab';
import Footer from '../../components/pageSections/footer/footer';
import Delivery from '../../components/delivery/delivery';
import DiningOut from '../../components/diningOut/diningout';
import NightLife from '../../components/nightLife/nightlife';

const HomePage = () => {

  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
      <Header />
      <Tab activeTab={activeTab} setActiveTab={setActiveTab}/>
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  )
};

const getCorrectScreen = (tab) => {
  switch(tab){
    case "Delivery":
      return <Delivery />
    
    case "Dining Out":
      return <DiningOut />

    case "Night Life":
      return <NightLife />

    default:
        return <Delivery />
  }
}

export default HomePage
