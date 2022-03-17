import React, {Component} from 'react';
import './App.css';
import * as d3 from 'd3'

import { KiviatContainer } from './components/kiviatComponent/kiviatContainer';

import shapeAttributes from './data/shapeAttributes.json'

let time = []
let kiviatScale = d3.scaleLinear()
  .range([5, 35])

function App() {
  let domains = {
    'temp': [shapeAttributes["210"].temp, shapeAttributes["210"].temp],
    'particles': [shapeAttributes["210"].particles, shapeAttributes["210"].particles],
    'mass': [shapeAttributes["210"].mass, shapeAttributes["210"].mass],
    'length': [shapeAttributes["210"].length, shapeAttributes["210"].length],
    'group': [shapeAttributes["210"].group, shapeAttributes["210"].group],
  }

  // console.log(domains)
  for (const [key, value] of Object.entries(shapeAttributes)){
    // console.log(key, value)
    time.push(key)
    for(const [valueKey, valueVal] of Object.entries(value)){
      // console.log(valueKey, valueVal, domains[valueKey][0])
      if(valueVal < domains[valueKey][0]){
        domains[valueKey][0] = valueVal
      }else if(valueVal > domains[valueKey][1]){
        domains[valueKey][1] = valueVal
      }
    }
  }
  // console.log(domains)
  // console.log(time)
  return(   
    // time.map(t =>(
      <KiviatContainer 
        domains = {domains}
        kiviatData ={shapeAttributes[time[0]]}
        kScale={kiviatScale}
      />
    // )) 
    
  )
}

export default App;
