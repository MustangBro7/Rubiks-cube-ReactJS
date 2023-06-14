import './App.css';
import boxes from './boxes';
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [tiles, setTiles] = useState(boxes);
  const initial = useRef(null);

  useEffect(() => {
    initial.current = JSON.parse(JSON.stringify(tiles));
  }, [tiles]);

  function handelU() {
    setTiles(prevBoxes => {
      const updatedBoxes = { ...prevBoxes };
      for (let i = 0; i < 3; i++) {
        const boxToChange = updatedBoxes['colours']['blue'][i];
        const boxToChange1 = updatedBoxes['colours']['orange'][i];
        const boxToChange2 = updatedBoxes['colours']['green'][i];
        const boxToChange3 = updatedBoxes['colours']['red'][i];
        const ini_blue = initial.current['colours']['blue'][i]['color'];
        const ini_orange = initial.current['colours']['orange'][i]['color'];
        const ini_green = initial.current['colours']['green'][i]['color'];
        const ini_red = initial.current['colours']['red'][i]['color'];
        boxToChange.color = ini_red;
        boxToChange1.color = ini_blue;
        boxToChange2.color = ini_orange;
        boxToChange3.color = ini_green;
      }
     
      const boxToChange0 = updatedBoxes['colours']['yellow'][0];
      const boxToChange1 = updatedBoxes['colours']['yellow'][1];
      const boxToChange2 = updatedBoxes['colours']['yellow'][2];
      const boxToChange3 = updatedBoxes['colours']['yellow'][3];
      const boxToChange4 = updatedBoxes['colours']['yellow'][4];
      const boxToChange5 = updatedBoxes['colours']['yellow'][5];
      const boxToChange6 = updatedBoxes['colours']['yellow'][6];
      const boxToChange7 = updatedBoxes['colours']['yellow'][7];
      const boxToChange8 = updatedBoxes['colours']['yellow'][8];

      boxToChange0.color = initial.current['colours']['yellow'][6]['color'];
      boxToChange1.color = initial.current['colours']['yellow'][3]['color'];
      boxToChange2.color = initial.current['colours']['yellow'][0]['color'];
      boxToChange3.color = initial.current['colours']['yellow'][7]['color'];
      boxToChange4.color = initial.current['colours']['yellow'][4]['color'];
      boxToChange5.color = initial.current['colours']['yellow'][1]['color'];
      boxToChange6.color = initial.current['colours']['yellow'][8]['color'];
      boxToChange7.color = initial.current['colours']['yellow'][5]['color'];
      boxToChange8.color = initial.current['colours']['yellow'][2]['color'];
      
     
      return updatedBoxes;
    });
  }
  function handelDprime() {
    setTiles(prevBoxes => {
      const updatedBoxes = { ...prevBoxes };
      for (let i = 6; i < 9; i++) {
        const boxToChange = updatedBoxes['colours']['blue'][i];
        const boxToChange1 = updatedBoxes['colours']['orange'][i];
        const boxToChange2 = updatedBoxes['colours']['green'][i];
        const boxToChange3 = updatedBoxes['colours']['red'][i];
        const ini_blue = initial.current['colours']['blue'][i]['color'];
        const ini_orange = initial.current['colours']['orange'][i]['color'];
        const ini_green = initial.current['colours']['green'][i]['color'];
        const ini_red = initial.current['colours']['red'][i]['color'];
        boxToChange.color = ini_red;
        boxToChange1.color = ini_blue;
        boxToChange2.color = ini_orange;
        boxToChange3.color = ini_green;
      }
      const boxToChange0 = updatedBoxes['colours']['white'][0];
      const boxToChange1 = updatedBoxes['colours']['white'][1];
      const boxToChange2 = updatedBoxes['colours']['white'][2];
      const boxToChange3 = updatedBoxes['colours']['white'][3];
      const boxToChange4 = updatedBoxes['colours']['white'][4];
      const boxToChange5 = updatedBoxes['colours']['white'][5];
      const boxToChange6 = updatedBoxes['colours']['white'][6];
      const boxToChange7 = updatedBoxes['colours']['white'][7];
      const boxToChange8 = updatedBoxes['colours']['white'][8];

      boxToChange0.color = initial.current['colours']['white'][2]['color'];
      boxToChange1.color = initial.current['colours']['white'][5]['color'];
      boxToChange2.color = initial.current['colours']['white'][8]['color'];
      boxToChange3.color = initial.current['colours']['white'][1]['color'];
      boxToChange4.color = initial.current['colours']['white'][4]['color'];
      boxToChange5.color = initial.current['colours']['white'][7]['color'];
      boxToChange6.color = initial.current['colours']['white'][0]['color'];
      boxToChange7.color = initial.current['colours']['white'][3]['color'];
      boxToChange8.color = initial.current['colours']['white'][6]['color'];

      
      return updatedBoxes;
    });
  }
  function handelUprime() {
    setTiles(prevBoxes => {
      const updatedBoxes = { ...prevBoxes };
      for (let i = 0; i < 3; i++) {
        const boxToChange = updatedBoxes['colours']['blue'][i];
        const boxToChange1 = updatedBoxes['colours']['orange'][i];
        const boxToChange2 = updatedBoxes['colours']['green'][i];
        const boxToChange3 = updatedBoxes['colours']['red'][i];
        const ini_blue = initial.current['colours']['blue'][i]['color'];
        const ini_orange = initial.current['colours']['orange'][i]['color'];
        const ini_green = initial.current['colours']['green'][i]['color'];
        const ini_red = initial.current['colours']['red'][i]['color'];
        boxToChange.color = ini_orange;
        boxToChange1.color = ini_green;
        boxToChange2.color = ini_red;
        boxToChange3.color = ini_blue;
      }
      const boxToChange0 = updatedBoxes['colours']['yellow'][0];
      const boxToChange1 = updatedBoxes['colours']['yellow'][1];
      const boxToChange2 = updatedBoxes['colours']['yellow'][2];
      const boxToChange3 = updatedBoxes['colours']['yellow'][3];
      const boxToChange4 = updatedBoxes['colours']['yellow'][4];
      const boxToChange5 = updatedBoxes['colours']['yellow'][5];
      const boxToChange6 = updatedBoxes['colours']['yellow'][6];
      const boxToChange7 = updatedBoxes['colours']['yellow'][7];
      const boxToChange8 = updatedBoxes['colours']['yellow'][8];

      boxToChange0.color = initial.current['colours']['yellow'][2]['color'];
      boxToChange1.color = initial.current['colours']['yellow'][5]['color'];
      boxToChange2.color = initial.current['colours']['yellow'][8]['color'];
      boxToChange3.color = initial.current['colours']['yellow'][1]['color'];
      boxToChange4.color = initial.current['colours']['yellow'][4]['color'];
      boxToChange5.color = initial.current['colours']['yellow'][7]['color'];
      boxToChange6.color = initial.current['colours']['yellow'][0]['color'];
      boxToChange7.color = initial.current['colours']['yellow'][3]['color'];
      boxToChange8.color = initial.current['colours']['yellow'][6]['color'];

      return updatedBoxes;
    });
  }
  function handelD() {
    setTiles(prevBoxes => {
      const updatedBoxes = { ...prevBoxes };
      for (let i = 6; i < 9; i++) {
        const boxToChange = updatedBoxes['colours']['blue'][i];
        const boxToChange1 = updatedBoxes['colours']['orange'][i];
        const boxToChange2 = updatedBoxes['colours']['green'][i];
        const boxToChange3 = updatedBoxes['colours']['red'][i];
        const ini_blue = initial.current['colours']['blue'][i]['color'];
        const ini_orange = initial.current['colours']['orange'][i]['color'];
        const ini_green = initial.current['colours']['green'][i]['color'];
        const ini_red = initial.current['colours']['red'][i]['color'];
        boxToChange.color = ini_orange;
        boxToChange1.color = ini_green;
        boxToChange2.color = ini_red;
        boxToChange3.color = ini_blue;
      }
      const boxToChange0 = updatedBoxes['colours']['white'][0];
      const boxToChange1 = updatedBoxes['colours']['white'][1];
      const boxToChange2 = updatedBoxes['colours']['white'][2];
      const boxToChange3 = updatedBoxes['colours']['white'][3];
      const boxToChange4 = updatedBoxes['colours']['white'][4];
      const boxToChange5 = updatedBoxes['colours']['white'][5];
      const boxToChange6 = updatedBoxes['colours']['white'][6];
      const boxToChange7 = updatedBoxes['colours']['white'][7];
      const boxToChange8 = updatedBoxes['colours']['white'][8];

      boxToChange0.color = initial.current['colours']['white'][6]['color'];
      boxToChange1.color = initial.current['colours']['white'][3]['color'];
      boxToChange2.color = initial.current['colours']['white'][0]['color'];
      boxToChange3.color = initial.current['colours']['white'][7]['color'];
      boxToChange4.color = initial.current['colours']['white'][4]['color'];
      boxToChange5.color = initial.current['colours']['white'][1]['color'];
      boxToChange6.color = initial.current['colours']['white'][8]['color'];
      boxToChange7.color = initial.current['colours']['white'][5]['color'];
      boxToChange8.color = initial.current['colours']['white'][2]['color'];

      return updatedBoxes;
    });
  }
  function handelRprime() {
    setTiles(prevBoxes => {
      const updatedBoxes = { ...prevBoxes };
      for (let i = 2; i < 9; i+=3) {
        const boxToChange = updatedBoxes['colours']['green'][i];
        const boxToChange3 = updatedBoxes['colours']['white'][i];
        const ini_green = initial.current['colours']['green'][i]['color'];
        const ini_yellow = initial.current['colours']['yellow'][i]['color'];
        boxToChange.color = ini_yellow;
        boxToChange3.color = ini_green;

      }
      const yellow8 = updatedBoxes['colours']['yellow'][8];
      const yellow5 = updatedBoxes['colours']['yellow'][5];
      const yellow2 = updatedBoxes['colours']['yellow'][2];
      yellow2.color= initial.current['colours']['blue'][6]['color'];
      yellow5.color= initial.current['colours']['blue'][3]['color'];
      yellow8.color= initial.current['colours']['blue'][0]['color'];
      const blue0 = updatedBoxes['colours']['blue'][0];
      const blue3 = updatedBoxes['colours']['blue'][3];
      const blue6 = updatedBoxes['colours']['blue'][6];
      blue0.color= initial.current['colours']['white'][8]['color'];
      blue3.color= initial.current['colours']['white'][5]['color'];
      blue6.color= initial.current['colours']['white'][2]['color'];

      const boxToChange0 = updatedBoxes['colours']['orange'][0];
      const boxToChange1 = updatedBoxes['colours']['orange'][1];
      const boxToChange2 = updatedBoxes['colours']['orange'][2];
      const boxToChange3 = updatedBoxes['colours']['orange'][3];
      const boxToChange4 = updatedBoxes['colours']['orange'][4];
      const boxToChange5 = updatedBoxes['colours']['orange'][5];
      const boxToChange6 = updatedBoxes['colours']['orange'][6];
      const boxToChange7 = updatedBoxes['colours']['orange'][7];
      const boxToChange8 = updatedBoxes['colours']['orange'][8];

      boxToChange0.color = initial.current['colours']['orange'][2]['color'];
      boxToChange1.color = initial.current['colours']['orange'][5]['color'];
      boxToChange2.color = initial.current['colours']['orange'][8]['color'];
      boxToChange3.color = initial.current['colours']['orange'][1]['color'];
      boxToChange4.color = initial.current['colours']['orange'][4]['color'];
      boxToChange5.color = initial.current['colours']['orange'][7]['color'];
      boxToChange6.color = initial.current['colours']['orange'][0]['color'];
      boxToChange7.color = initial.current['colours']['orange'][3]['color'];
      boxToChange8.color = initial.current['colours']['orange'][6]['color'];

      
      
      return updatedBoxes;
    });
  }
  function handelR() {
    setTiles(prevBoxes => {
      const updatedBoxes = { ...prevBoxes };
      for (let i = 2; i < 9; i+=3) {
        const boxToChange = updatedBoxes['colours']['green'][i];
        const boxToChange3 = updatedBoxes['colours']['yellow'][i];
        const ini_green = initial.current['colours']['green'][i]['color'];
        const ini_white = initial.current['colours']['white'][i]['color'];
        boxToChange.color = ini_white;
        boxToChange3.color = ini_green;

      }
      const white2 = updatedBoxes['colours']['white'][2];
      const white5 = updatedBoxes['colours']['white'][5];
      const white8 = updatedBoxes['colours']['white'][8];
      white2.color= initial.current['colours']['blue'][6]['color'];
      white5.color= initial.current['colours']['blue'][3]['color'];
      white8.color= initial.current['colours']['blue'][0]['color'];
      const blue0 = updatedBoxes['colours']['blue'][0];
      const blue3 = updatedBoxes['colours']['blue'][3];
      const blue6 = updatedBoxes['colours']['blue'][6];
      blue0.color= initial.current['colours']['yellow'][8]['color'];
      blue3.color= initial.current['colours']['yellow'][5]['color'];
      blue6.color= initial.current['colours']['yellow'][2]['color'];

      const boxToChange0 = updatedBoxes['colours']['orange'][0];
      const boxToChange1 = updatedBoxes['colours']['orange'][1];
      const boxToChange2 = updatedBoxes['colours']['orange'][2];
      const boxToChange3 = updatedBoxes['colours']['orange'][3];
      const boxToChange4 = updatedBoxes['colours']['orange'][4];
      const boxToChange5 = updatedBoxes['colours']['orange'][5];
      const boxToChange6 = updatedBoxes['colours']['orange'][6];
      const boxToChange7 = updatedBoxes['colours']['orange'][7];
      const boxToChange8 = updatedBoxes['colours']['orange'][8];

      boxToChange0.color = initial.current['colours']['orange'][6]['color'];
      boxToChange1.color = initial.current['colours']['orange'][3]['color'];
      boxToChange2.color = initial.current['colours']['orange'][0]['color'];
      boxToChange3.color = initial.current['colours']['orange'][7]['color'];
      boxToChange4.color = initial.current['colours']['orange'][4]['color'];
      boxToChange5.color = initial.current['colours']['orange'][1]['color'];
      boxToChange6.color = initial.current['colours']['orange'][8]['color'];
      boxToChange7.color = initial.current['colours']['orange'][5]['color'];
      boxToChange8.color = initial.current['colours']['orange'][2]['color'];
      
      
      return updatedBoxes;
    });
  }
  function handelF() {
    setTiles(prevBoxes => {
      const updatedBoxes = { ...prevBoxes };
      
      const white0 = updatedBoxes['colours']['white'][0];
      const white1 = updatedBoxes['colours']['white'][1];
      const white2 = updatedBoxes['colours']['white'][2];
      white0.color= initial.current['colours']['orange'][6]['color'];
      white1.color= initial.current['colours']['orange'][3]['color'];
      white2.color= initial.current['colours']['orange'][0]['color'];
      const orange0 = updatedBoxes['colours']['orange'][0];
      const orange3 = updatedBoxes['colours']['orange'][3];
      const orange6 = updatedBoxes['colours']['orange'][6];
      orange0.color= initial.current['colours']['yellow'][6]['color'];
      orange3.color= initial.current['colours']['yellow'][7]['color'];
      orange6.color= initial.current['colours']['yellow'][8]['color'];
      const yellow6 = updatedBoxes['colours']['yellow'][6];
      const yellow7 = updatedBoxes['colours']['yellow'][7];
      const yellow8 = updatedBoxes['colours']['yellow'][8];
      yellow6.color= initial.current['colours']['red'][8]['color'];
      yellow7.color= initial.current['colours']['red'][5]['color'];
      yellow8.color= initial.current['colours']['red'][2]['color'];
      const red8 = updatedBoxes['colours']['red'][8];
      const red5 = updatedBoxes['colours']['red'][5];
      const red2 = updatedBoxes['colours']['red'][2];
      red8.color= initial.current['colours']['white'][2]['color'];
      red5.color= initial.current['colours']['white'][1]['color'];
      red2.color= initial.current['colours']['white'][0]['color'];



      const boxToChange0 = updatedBoxes['colours']['green'][0];
      const boxToChange1 = updatedBoxes['colours']['green'][1];
      const boxToChange2 = updatedBoxes['colours']['green'][2];
      const boxToChange3 = updatedBoxes['colours']['green'][3];
      const boxToChange4 = updatedBoxes['colours']['green'][4];
      const boxToChange5 = updatedBoxes['colours']['green'][5];
      const boxToChange6 = updatedBoxes['colours']['green'][6];
      const boxToChange7 = updatedBoxes['colours']['green'][7];
      const boxToChange8 = updatedBoxes['colours']['green'][8];

      boxToChange0.color = initial.current['colours']['green'][6]['color'];
      boxToChange1.color = initial.current['colours']['green'][3]['color'];
      boxToChange2.color = initial.current['colours']['green'][0]['color'];
      boxToChange3.color = initial.current['colours']['green'][7]['color'];
      boxToChange4.color = initial.current['colours']['green'][4]['color'];
      boxToChange5.color = initial.current['colours']['green'][1]['color'];
      boxToChange6.color = initial.current['colours']['green'][8]['color'];
      boxToChange7.color = initial.current['colours']['green'][5]['color'];
      boxToChange8.color = initial.current['colours']['green'][2]['color'];
      
      
      return updatedBoxes;
    });
  }
  function handelFprime() {
    setTiles(prevBoxes => {
      const updatedBoxes = { ...prevBoxes };
      
      const white0 = updatedBoxes['colours']['white'][0];
      const white1 = updatedBoxes['colours']['white'][1];
      const white2 = updatedBoxes['colours']['white'][2];
      white0.color= initial.current['colours']['red'][2]['color'];
      white1.color= initial.current['colours']['red'][5]['color'];
      white2.color= initial.current['colours']['red'][8]['color'];
      const orange0 = updatedBoxes['colours']['orange'][0];
      const orange3 = updatedBoxes['colours']['orange'][3];
      const orange6 = updatedBoxes['colours']['orange'][6];
      orange0.color= initial.current['colours']['white'][2]['color'];
      orange3.color= initial.current['colours']['white'][1]['color'];
      orange6.color= initial.current['colours']['white'][0]['color'];
      const yellow6 = updatedBoxes['colours']['yellow'][6];
      const yellow7 = updatedBoxes['colours']['yellow'][7];
      const yellow8 = updatedBoxes['colours']['yellow'][8];
      yellow6.color= initial.current['colours']['orange'][0]['color'];
      yellow7.color= initial.current['colours']['orange'][3]['color'];
      yellow8.color= initial.current['colours']['orange'][6]['color'];
      const red8 = updatedBoxes['colours']['red'][8];
      const red5 = updatedBoxes['colours']['red'][5];
      const red2 = updatedBoxes['colours']['red'][2];
      red8.color= initial.current['colours']['yellow'][6]['color'];
      red5.color= initial.current['colours']['yellow'][7]['color'];
      red2.color= initial.current['colours']['yellow'][8]['color'];



      const boxToChange0 = updatedBoxes['colours']['green'][0];
      const boxToChange1 = updatedBoxes['colours']['green'][1];
      const boxToChange2 = updatedBoxes['colours']['green'][2];
      const boxToChange3 = updatedBoxes['colours']['green'][3];
      const boxToChange4 = updatedBoxes['colours']['green'][4];
      const boxToChange5 = updatedBoxes['colours']['green'][5];
      const boxToChange6 = updatedBoxes['colours']['green'][6];
      const boxToChange7 = updatedBoxes['colours']['green'][7];
      const boxToChange8 = updatedBoxes['colours']['green'][8];

      boxToChange0.color = initial.current['colours']['green'][2]['color'];
      boxToChange1.color = initial.current['colours']['green'][5]['color'];
      boxToChange2.color = initial.current['colours']['green'][8]['color'];
      boxToChange3.color = initial.current['colours']['green'][1]['color'];
      boxToChange4.color = initial.current['colours']['green'][4]['color'];
      boxToChange5.color = initial.current['colours']['green'][7]['color'];
      boxToChange6.color = initial.current['colours']['green'][0]['color'];
      boxToChange7.color = initial.current['colours']['green'][3]['color'];
      boxToChange8.color = initial.current['colours']['green'][6]['color'];
      
      
      return updatedBoxes;
    });
  }
  function handelLPrime() {
    setTiles(prevBoxes => {
      const updatedBoxes = { ...prevBoxes };
      
      const yellow0 = updatedBoxes['colours']['yellow'][0];
      const yellow3 = updatedBoxes['colours']['yellow'][3];
      const yellow6 = updatedBoxes['colours']['yellow'][6];
      yellow6.color= initial.current['colours']['green'][6]['color'];
      yellow3.color= initial.current['colours']['green'][3]['color'];
      yellow0.color= initial.current['colours']['green'][0]['color'];
      const white0 = updatedBoxes['colours']['white'][0];
      const white3 = updatedBoxes['colours']['white'][3];
      const white6 = updatedBoxes['colours']['white'][6];
      white6.color= initial.current['colours']['blue'][2]['color'];
      white3.color= initial.current['colours']['blue'][5]['color'];
      white0.color= initial.current['colours']['blue'][8]['color'];
      const green0 = updatedBoxes['colours']['green'][0];
      const green3 = updatedBoxes['colours']['green'][3];
      const green6 = updatedBoxes['colours']['green'][6];
      green6.color= initial.current['colours']['white'][6]['color'];
      green3.color= initial.current['colours']['white'][3]['color'];
      green0.color= initial.current['colours']['white'][0]['color'];
      const blue2 = updatedBoxes['colours']['blue'][2];
      const blue5 = updatedBoxes['colours']['blue'][5];
      const blue8 = updatedBoxes['colours']['blue'][8];
      blue2.color= initial.current['colours']['yellow'][6]['color'];
      blue5.color= initial.current['colours']['yellow'][3]['color'];
      blue8.color= initial.current['colours']['yellow'][0]['color'];

      const boxToChange0 = updatedBoxes['colours']['red'][0];
      const boxToChange1 = updatedBoxes['colours']['red'][1];
      const boxToChange2 = updatedBoxes['colours']['red'][2];
      const boxToChange3 = updatedBoxes['colours']['red'][3];
      const boxToChange4 = updatedBoxes['colours']['red'][4];
      const boxToChange5 = updatedBoxes['colours']['red'][5];
      const boxToChange6 = updatedBoxes['colours']['red'][6];
      const boxToChange7 = updatedBoxes['colours']['red'][7];
      const boxToChange8 = updatedBoxes['colours']['red'][8];

      boxToChange0.color = initial.current['colours']['red'][2]['color'];
      boxToChange1.color = initial.current['colours']['red'][5]['color'];
      boxToChange2.color = initial.current['colours']['red'][8]['color'];
      boxToChange3.color = initial.current['colours']['red'][1]['color'];
      boxToChange4.color = initial.current['colours']['red'][4]['color'];
      boxToChange5.color = initial.current['colours']['red'][7]['color'];
      boxToChange6.color = initial.current['colours']['red'][0]['color'];
      boxToChange7.color = initial.current['colours']['red'][3]['color'];
      boxToChange8.color = initial.current['colours']['red'][6]['color'];

      
      
      return updatedBoxes;
    });
  }
  function handelL() {
    setTiles(prevBoxes => {
      const updatedBoxes = { ...prevBoxes };
      
      const yellow0 = updatedBoxes['colours']['yellow'][0];
      const yellow3 = updatedBoxes['colours']['yellow'][3];
      const yellow6 = updatedBoxes['colours']['yellow'][6];
      yellow6.color= initial.current['colours']['blue'][2]['color'];
      yellow3.color= initial.current['colours']['blue'][5]['color'];
      yellow0.color= initial.current['colours']['blue'][8]['color'];
      const white0 = updatedBoxes['colours']['white'][0];
      const white3 = updatedBoxes['colours']['white'][3];
      const white6 = updatedBoxes['colours']['white'][6];
      white6.color= initial.current['colours']['green'][6]['color'];
      white3.color= initial.current['colours']['green'][3]['color'];
      white0.color= initial.current['colours']['green'][0]['color'];
      const green0 = updatedBoxes['colours']['green'][0];
      const green3 = updatedBoxes['colours']['green'][3];
      const green6 = updatedBoxes['colours']['green'][6];
      green6.color= initial.current['colours']['yellow'][6]['color'];
      green3.color= initial.current['colours']['yellow'][3]['color'];
      green0.color= initial.current['colours']['yellow'][0]['color'];
      const blue2 = updatedBoxes['colours']['blue'][2];
      const blue5 = updatedBoxes['colours']['blue'][5];
      const blue8 = updatedBoxes['colours']['blue'][8];
      blue2.color= initial.current['colours']['white'][6]['color'];
      blue5.color= initial.current['colours']['white'][3]['color'];
      blue8.color= initial.current['colours']['white'][0]['color'];

      const boxToChange0 = updatedBoxes['colours']['red'][0];
      const boxToChange1 = updatedBoxes['colours']['red'][1];
      const boxToChange2 = updatedBoxes['colours']['red'][2];
      const boxToChange3 = updatedBoxes['colours']['red'][3];
      const boxToChange4 = updatedBoxes['colours']['red'][4];
      const boxToChange5 = updatedBoxes['colours']['red'][5];
      const boxToChange6 = updatedBoxes['colours']['red'][6];
      const boxToChange7 = updatedBoxes['colours']['red'][7];
      const boxToChange8 = updatedBoxes['colours']['red'][8];

      boxToChange0.color = initial.current['colours']['red'][6]['color'];
      boxToChange1.color = initial.current['colours']['red'][3]['color'];
      boxToChange2.color = initial.current['colours']['red'][0]['color'];
      boxToChange3.color = initial.current['colours']['red'][7]['color'];
      boxToChange4.color = initial.current['colours']['red'][4]['color'];
      boxToChange5.color = initial.current['colours']['red'][1]['color'];
      boxToChange6.color = initial.current['colours']['red'][8]['color'];
      boxToChange7.color = initial.current['colours']['red'][5]['color'];
      boxToChange8.color = initial.current['colours']['red'][2]['color'];
      
      
      return updatedBoxes;
    });
  }
  function handelB() {
    setTiles(prevBoxes => {
      const updatedBoxes = { ...prevBoxes };
      
      const yellow0 = updatedBoxes['colours']['yellow'][0];
      const yellow1 = updatedBoxes['colours']['yellow'][1];
      const yellow2 = updatedBoxes['colours']['yellow'][2];
      yellow0.color= initial.current['colours']['orange'][2]['color'];
      yellow1.color= initial.current['colours']['orange'][5]['color'];
      yellow2.color= initial.current['colours']['orange'][8]['color'];
      const orange2 = updatedBoxes['colours']['orange'][2];
      const orange5 = updatedBoxes['colours']['orange'][5];
      const orange8 = updatedBoxes['colours']['orange'][8];
      orange2.color= initial.current['colours']['white'][8]['color'];
      orange5.color= initial.current['colours']['white'][7]['color'];
      orange8.color= initial.current['colours']['white'][6]['color'];
      const white6 = updatedBoxes['colours']['white'][6];
      const white7 = updatedBoxes['colours']['white'][7];
      const white8 = updatedBoxes['colours']['white'][8];
      white6.color= initial.current['colours']['red'][0]['color'];
      white7.color= initial.current['colours']['red'][3]['color'];
      white8.color= initial.current['colours']['red'][6]['color'];
      const red0 = updatedBoxes['colours']['red'][0];
      const red3 = updatedBoxes['colours']['red'][3];
      const red6 = updatedBoxes['colours']['red'][6];
      red0.color= initial.current['colours']['yellow'][2]['color'];
      red3.color= initial.current['colours']['yellow'][1]['color'];
      red6.color= initial.current['colours']['yellow'][0]['color'];



      const boxToChange0 = updatedBoxes['colours']['blue'][0];
      const boxToChange1 = updatedBoxes['colours']['blue'][1];
      const boxToChange2 = updatedBoxes['colours']['blue'][2];
      const boxToChange3 = updatedBoxes['colours']['blue'][3];
      const boxToChange4 = updatedBoxes['colours']['blue'][4];
      const boxToChange5 = updatedBoxes['colours']['blue'][5];
      const boxToChange6 = updatedBoxes['colours']['blue'][6];
      const boxToChange7 = updatedBoxes['colours']['blue'][7];
      const boxToChange8 = updatedBoxes['colours']['blue'][8];

      boxToChange0.color = initial.current['colours']['blue'][6]['color'];
      boxToChange1.color = initial.current['colours']['blue'][3]['color'];
      boxToChange2.color = initial.current['colours']['blue'][0]['color'];
      boxToChange3.color = initial.current['colours']['blue'][7]['color'];
      boxToChange4.color = initial.current['colours']['blue'][4]['color'];
      boxToChange5.color = initial.current['colours']['blue'][1]['color'];
      boxToChange6.color = initial.current['colours']['blue'][8]['color'];
      boxToChange7.color = initial.current['colours']['blue'][5]['color'];
      boxToChange8.color = initial.current['colours']['blue'][2]['color'];
      
      
      
      return updatedBoxes;
    });
  }
  
  function handelBprime() {
    setTiles(prevBoxes => {
      const updatedBoxes = { ...prevBoxes };
      
      const yellow0 = updatedBoxes['colours']['yellow'][0];
      const yellow1 = updatedBoxes['colours']['yellow'][1];
      const yellow2 = updatedBoxes['colours']['yellow'][2];
      yellow0.color= initial.current['colours']['red'][6]['color'];
      yellow1.color= initial.current['colours']['red'][3]['color'];
      yellow2.color= initial.current['colours']['red'][0]['color'];
      const orange2 = updatedBoxes['colours']['orange'][2];
      const orange5 = updatedBoxes['colours']['orange'][5];
      const orange8 = updatedBoxes['colours']['orange'][8];
      orange2.color= initial.current['colours']['yellow'][0]['color'];
      orange5.color= initial.current['colours']['yellow'][1]['color'];
      orange8.color= initial.current['colours']['yellow'][2]['color'];
      const white6 = updatedBoxes['colours']['white'][6];
      const white7 = updatedBoxes['colours']['white'][7];
      const white8 = updatedBoxes['colours']['white'][8];
      white6.color= initial.current['colours']['orange'][8]['color'];
      white7.color= initial.current['colours']['orange'][5]['color'];
      white8.color= initial.current['colours']['orange'][2]['color'];
      const red0 = updatedBoxes['colours']['red'][0];
      const red3 = updatedBoxes['colours']['red'][3];
      const red6 = updatedBoxes['colours']['red'][6];
      red0.color= initial.current['colours']['white'][6]['color'];
      red3.color= initial.current['colours']['white'][7]['color'];
      red6.color= initial.current['colours']['white'][8]['color'];



      const boxToChange0 = updatedBoxes['colours']['blue'][0];
      const boxToChange1 = updatedBoxes['colours']['blue'][1];
      const boxToChange2 = updatedBoxes['colours']['blue'][2];
      const boxToChange3 = updatedBoxes['colours']['blue'][3];
      const boxToChange4 = updatedBoxes['colours']['blue'][4];
      const boxToChange5 = updatedBoxes['colours']['blue'][5];
      const boxToChange6 = updatedBoxes['colours']['blue'][6];
      const boxToChange7 = updatedBoxes['colours']['blue'][7];
      const boxToChange8 = updatedBoxes['colours']['blue'][8];

      boxToChange0.color = initial.current['colours']['blue'][2]['color'];
      boxToChange1.color = initial.current['colours']['blue'][5]['color'];
      boxToChange2.color = initial.current['colours']['blue'][8]['color'];
      boxToChange3.color = initial.current['colours']['blue'][1]['color'];
      boxToChange4.color = initial.current['colours']['blue'][4]['color'];
      boxToChange5.color = initial.current['colours']['blue'][7]['color'];
      boxToChange6.color = initial.current['colours']['blue'][0]['color'];
      boxToChange7.color = initial.current['colours']['blue'][3]['color'];
      boxToChange8.color = initial.current['colours']['blue'][6]['color'];
      
      
      return updatedBoxes;
    });
  }
  return (
    <div className='wrapper'>
      <button onClick={handelU}>U</button>
      <button onClick={handelUprime}>U'</button>
      <button onClick={handelD}>D</button>
      <button onClick={handelDprime}>D'</button>
      <button onClick={handelR}>R</button>
      <button onClick={handelRprime}>R'</button>
      <button onClick={handelF}>F</button>
      <button onClick={handelFprime}>F'</button>
      <button onClick={handelL}>L</button>
      <button onClick={handelLPrime}>L'</button>
      <button onClick={handelB}>B</button>
      <button onClick={handelBprime}>B'</button>
      <div className="container">
        {tiles['colours']['yellow'].map(item => (
          <div
            className="box"
            key={item.id}
            style={{ backgroundColor: item.color }}
          ></div>
        ))}
      </div>
      <div className="boxcontainer">
        {tiles['colours']['red'].map(item => (
          <div
            className="box"
            key={item.id}
            style={{ backgroundColor: item.color }}
          ></div>
        ))}
      </div>
      <div className="boxcontainer">
        {tiles['colours']['green'].map(item => (
          <div
            className="box"
            key={item.id}
            style={{ backgroundColor: item.color }}
          ></div>
        ))}
      </div>
      <div className="boxcontainer">
        {tiles['colours']['orange'].map(item => (
          <div
            className="box"
            key={item.id}
            style={{ backgroundColor: item.color }}
          ></div>
        ))}
      </div>
      <div className="boxcontainer">
        {tiles['colours']['blue'].map(item => (
          <div
            className="box"
            key={item.id}
            style={{ backgroundColor: item.color }}
          ></div>
        ))}
      </div>
      <div className="container">
        {tiles['colours']['white'].map(item => (
          <div
            className="box"
            key={item.id}
            style={{ backgroundColor: item.color }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
