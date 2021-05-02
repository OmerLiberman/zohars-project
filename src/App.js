import React, {useState} from 'react';
import MainGrid from './components/MainGrid';
import MySlider from './components/MySlider';


const App = () => {
  const [ gridsDisplayed, setGridsDisplayed ] = useState(32);  // 8r * 8c * 0.5

  const handleOnSliderChange = (value) => {
    console.log(value);
    setGridsDisplayed(Math.round(64 * (value / 100)));
    console.log("grids: {gridsDisplayed}");
  }


  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ paddingLeft: 10, alignSelf: 'center' }}>
        <MySlider onChange={handleOnSliderChange} />
      </div>
      <MainGrid />
    </div>
  );
}

export default App;
