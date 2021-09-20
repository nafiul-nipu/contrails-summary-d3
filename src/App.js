import {scaleLinear, 
  scaleOrdinal,
  scaleBand
 } from 'd3';
import './App.css';

import { useData } from './components/useData';
import {AxisBottom} from './components/AxisBottom'
import { AxisLeft } from './components/AxisLeft';
import { getDataExtents } from './components/getDataExtents';
import { Contrails } from './components/Contrails';
import { VolumeTempView } from './components/VolumeTempView';
import { OverlayRect } from './components/OverlayRect';



const width = 950;
const height = 500;
const margin = {top:20, right:30, bottom:50, left:60};

const attributes = ["Timesteps", "TotalParticles", "Ice", "NewIce", "Temp", "IceVolume"]

const contrails = ["Contrails 1", "Contrails 2", "Contrails 3"];

const barAtt = ["TotalParticles", "Ice", "NewIce"]

const scaleOffset = 10

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


  console.log(con1Data)

  let dataExtents = getDataExtents(con1Data, con2Data, con3Data, attributes)
  console.log(dataExtents)

  const xValue = (d) => d.Timesteps

  const xScale = scaleBand()
    .domain(con1Data.map(xValue))
    .range([0, innerWidth])
    .paddingInner(0.1)

  console.log(dataExtents.TotalParticles)
  const yScale = scaleLinear()
    .domain(dataExtents.TotalParticles)
    .range([innerHeight, 0])

  const barColor = scaleOrdinal()
    .domain(barAtt)
    .range(["#66c2a5", "#fc8d62", "#8da0cb"])





  return (

    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
          <AxisBottom 
            xScale={xScale}
            innerHeight={innerHeight}
            innerWidth={innerWidth}
            scaleOffset={scaleOffset}
          />

          <VolumeTempView 
            data={con1Data}
            volume={dataExtents.IceVolume}
            temperature={dataExtents.Temp}
            xScale={xScale}
            innerHeight={innerHeight}
          />

          {
            barAtt.map((bar, i) => (

              <OverlayRect 
              xScale = {xScale}
              yScale = {yScale}
              data={con1Data}
              toDraw = {barAtt[i]}
              innerHeight = {innerHeight}
              color = {barColor}
            />

            ))
          }

          {/* <AxisLeft
            xScale={xScale}
            yScale = {yScale}
            scaleOffset={scaleOffset}
          /> */}

          {/* <g transform={`translate(0, ${scatterOffset})`}>

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

          </g> */}
        </g>
    </svg>
  );
}

export default App;
