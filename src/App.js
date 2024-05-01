import React from 'react';

import './App.css';
import MenuSection from './components/MenuSection';
import MainBanner from './components/MainBanner';
import Description from './components/Description';
import StampImages from './components/StampImages';
import OrderButton from './components/OrderButton';
import Line from './components/Line'
import Logo from './components/Logo';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      <Logo/>
      <MenuSection/>
      <MainBanner/>
      <StampImages/>
      <Description/>
      <OrderButton/>
      <Map/>
      <Line/>
      <MenuSection/>
    </div>
  );
}

export default App;
