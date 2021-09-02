import {scaleLinear, 
  scaleOrdinal,
  symbolDiamond, 
  symbolSquare, 
  symbolTriangle } from 'd3';
import './App.css';

import { useData } from './components/useData';
import {AxisBottom} from './components/AxisBottom'
import { AxisLeft } from './components/AxisLeft';
import { getDataExtents } from './components/getDataExtents';
import { Contrails } from './components/Contrails';



const width = 950;
const height = 500;
const margin = {top:20, right:30, bottom:50, left:60};

const attributes = ["Timesteps", "TotalParticles", "Ice", "TotalIcePercentage", "Temp", "IceVolume"]

const contrails = ["Contrails 1", "Contrails 2", "Contrails 3"];
const symbols = [symbolDiamond, symbolSquare, symbolTriangle];
const shapeSize = [50, 200]

const scatterOffset = -8
const scaleOffset = 5

function App() {
  const {con1Data, con2Data, con3Data} = useData();
  // console.log(con1Data)
  // console.log(con2Data)
  // console.log(con3Data)  

  if(!con3Data){
    return <div>Loading...</div>
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;



  let dataExtents = getDataExtents(con1Data, con2Data, con3Data, attributes)
  // console.log(dataExtents)

  const xScale = scaleLinear()
                  .domain([0.05, dataExtents.Timesteps[1]])
                  .range([0, innerWidth])

  const yScale = scaleLinear()
                  .domain(dataExtents.IceVolume)
                  .range([0, innerHeight])

  const color = scaleLinear()
                .domain(dataExtents.Temp)
                .range(["#fee0d2", "#de2d26"])

  const shapes = scaleOrdinal()
                  .domain(contrails)
                  .range(symbols)
  const symSize = scaleLinear()
                .domain(dataExtents.Ice)
                .range(shapeSize)

  return (

    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
          <AxisBottom 
            xScale={xScale}
            yScale = {yScale}
            scaleOffset={scaleOffset}
          />
          <AxisLeft
            xScale={xScale}
            yScale = {yScale}
            scaleOffset={scaleOffset}
          />

          <g transform={`translate(0, ${scatterOffset})`}>

            <Contrails
              data={con1Data}
              contrails={contrails[0]}
              shapes = {shapes} 
              symSize = {symSize} 
              xScale = {xScale} 
              yScale = {yScale} 
              color = {color}
            />

            <Contrails
              data={con2Data}
              contrails={contrails[1]}
              shapes = {shapes} 
              symSize = {symSize} 
              xScale = {xScale} 
              yScale = {yScale} 
              color = {color}
            />

            <Contrails
              data={con2Data}
              contrails={contrails[2]}
              shapes = {shapes} 
              symSize = {symSize} 
              xScale = {xScale} 
              yScale = {yScale} 
              color = {color}
            />

          </g>
        </g>
    </svg>
  );
}

export default App;
