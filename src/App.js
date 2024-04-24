import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Song from './feartures/Song';
import Fearture from './feartures/Todo';
import Brawl from './feartures/Brawl';
import CallAPI from './feartures/CallAPI';
import Count_Timer from './feartures/Count_Timer';
import Effect from './feartures/Effect';


function App() {
  const features = ['Fearture', 'Song', 'Brawl', 'CallAPI', 'Count_Timer','Effect'];
  const [selectedFeature, setSelectedFeature] = useState('Fearture');

  const renderFeature = () => {
    switch (selectedFeature) {
      case 'Fearture':
        return <Fearture />;
      case 'Song':
        return <Song />;
      case 'Brawl':
        return <Brawl />;
      case 'CallAPI':
        return <CallAPI />;
      case 'Count_Timer':
        return <Count_Timer></Count_Timer>
      case 'Effect':
        return <Effect></Effect>
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: '30px' }}>
      {features.map((feature) => (
        <button
          key={feature}
          onClick={() => setSelectedFeature(feature)}
          style={{background: feature === selectedFeature ? '#000' : '#fff',
          color: feature === selectedFeature ? '#fff' : '#000',
          marginRight: '20px'}
        }
        >
          {feature}
        </button>
      ))}
      {renderFeature()}
    </div>
  );

}

export default App;
