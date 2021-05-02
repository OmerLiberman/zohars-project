import React, { useState, useEffect } from 'react';

import Clip from './Clip';


const MainGrid = ({ gridsDisplayedPercentage }) => {
  const rows = 6;
  const columns = 10;

  // const [coloredIndexes, setColoredIndexes] = useState([]);
  // const [notColoredIndexes, setNotColoredIndexes] = useState([]);
  // const [clips, setClips] = useState([]);

  // useEffect(() => {
  //   // randomize indexes
    
  // }, []);

  useEffect(() => {}, [gridsDisplayedPercentage]);


  const subGrids = [];
  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      let ran = Math.random();
      let appear = Boolean(ran <= gridsDisplayedPercentage);

      row.push(
        <Clip 
          index={ (r * columns) + c + 1 }
          background={ 'grey' }
          appear={appear}
        />
      )
    }
    subGrids.push(row);
  }

  
  return <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        paddingLeft: 30,
        paddingTop: 10,
        width: '80%',
        height: '100%'
      }}
    >
  

    <div style={{ 
      position: 'absolute', 
      zIndex: -1, 
      fontSize: 50,
      opacity: 0.15
      }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type 
      specimen book. It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essentially unchanged. It was popularised in 
      the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
      and more recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum.
      orem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type 
      specimen book. It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essentially unchanged. It was popularised in 
      the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
      and more recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum.
    </div>
    
    <></>
    
    {
      subGrids.map((row, index) => (
        <div style={{ display: 'flex', flexDirection: 'row', padding: 10 }}>
          {
            row.map((clip, inRowIndex) => (
              <div style={{ padding: 20 }}> 
                {clip}
              </div>
            ))
          }
        </div>
      ))
    }

  </div>
}

export default MainGrid;