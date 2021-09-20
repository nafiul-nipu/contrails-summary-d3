import { scaleLinear,  scaleSequential } from "d3-scale"
import { area } from "d3-shape"
import {interpolateReds} from 'd3'


export const VolumeTempView =({
    data,
    volume,
    temperature,
    xScale,
    innerHeight,
    scaleOffset
}) => {
    const volumeScale = scaleLinear()
        .domain([0, volume[1]])
        .range([innerHeight, 0])

    const tempColor = scaleSequential()
        .domain([temperature[0], temperature[1]])
        .interpolator(interpolateReds)

    const bands = 100 / data.length

    console.log(temperature)
    return(
        <g transform={`translate(${xScale.bandwidth() / 2},-${scaleOffset})`}>
            {/* <linearGradient
                id="myGradient"
            >
                <stop offset="5%"  stopColor="gold" />
                <stop offset="100%" stopColor="red" />
                {data.map((each, i) => 
                {
                    console.log(each.Temp, interpolateOranges(tempColor(each.Temp)))
                    return(<stop
                        offset={bands * (i+1)}
                        stopColor={interpolatePRGn(tempColor(each.Temp))}
                    />)
                })}
            </linearGradient> */}
            <path 
                className="area-volume"
                fill={(d,i) => {
                    console.log(tempColor(d.Temp))
                    return tempColor(d.Temp)
                }}
                stroke="black"
                strokeWidth='2px'
                d={area()
                    .x((d) => xScale(d.Timesteps))
                    .y0(volumeScale(0))
                    .y1((d) => volumeScale(d.IceVolume))
                    (data)
                }

            />
        </g>
    )
}