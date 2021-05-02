import React from 'react';
import Slider from '@material-ui/core/Slider';

const MySlider = ({ onChange }) => {
  let style = { 
    fontWeight: 'bold', 
    writingMode: 'vertical-rl', 
    textOrientation: 'mixed',
    padding: 8
   };


  return <div>
    <div style={style}> Maximize </div>
    <Slider
        orientation='vertical'
        defaultValue={50}
        onChange={(event, value) => onChange(value)}
        style={{ height: 400, color: 'black' }}
      />
      <div style={style}> Minimize </div>
  </div>
}

export default MySlider;