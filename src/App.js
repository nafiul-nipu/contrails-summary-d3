import { scaleLinear, scaleBand } from 'd3';
import './App.css';

import { useData } from './components/useData';
import {AxisBottom} from './components/AxisBottom'



const width = 960;
const height = 500;
const margin = {top:20, right:30, bottom:50, left:30};


function App() {
  const {con1Data, con2Data, con3Data} = useData();
  console.log(con1Data)
  console.log(con2Data)
  console.log(con3Data)  

  if(!con3Data){
    return <div>Loading...</div>
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const axisValue = d => d.Timesteps
  const axisScale = scaleBand()
                    .domain(con1Data.map(axisValue))
                    .range([0, innerWidth])

  const xScale = scaleLinear().domain([0, 1]).range([10, 300]);
  const yScale = scaleLinear().domain([0, 1]).range([10, 150]);
  const [xStart, xEnd] = xScale.range();
  const [yStart, yEnd] = yScale.range();
  const ticks = xScale.ticks();

  return (
    <svg width={1000} height={1000}>
        <line x1={xStart} x2={xEnd} y1={yEnd} y2={yEnd} stroke="red" />
        {/* <line x1={xStart} x2={xStart} y1={yEnd} y2={yStart} stroke="red" /> */}
        <g className="ticks">
          {ticks.map((t, i) => {
            const x = xScale(t);
            return (
              <>
                <line x1={x} x2={x} y1={yEnd} y2={yEnd + 5} stroke="red" />
                <text
                  x={x}
                  y={yEnd + 20}
                  fill="red"
                  textAnchor="middle"
                  fontSize={10}
                >
                  {t}
                </text>
              </>
            );
          })}
        </g>
      </svg>
  );
}

export default App;
