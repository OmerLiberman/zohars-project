import React, {useState} from 'react';
import MainGrid from './components/MainGrid';
import MySlider from './components/MySlider';


const App = () => {
  const [ gridsDisplayedPercentage, setGridsDisplayedPercentage ] = useState(0.5);


  const handleOnSliderChange = (value) => {
    console.log(value);
    setGridsDisplayedPercentage(value / 100);
  }


  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ paddingLeft: 10, alignSelf: 'center' }}>
        <MySlider onChange={handleOnSliderChange} />
      </div>
      <MainGrid gridsDisplayedPercentage={gridsDisplayedPercentage}/>
    </div>
  );
}

export default App;
