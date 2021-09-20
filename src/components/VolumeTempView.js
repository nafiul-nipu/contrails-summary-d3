import { scaleLinear } from "d3-scale"
import { area } from "d3-shape"


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

    const tempColor = scaleLinear()
        .domain([temperature[0], temperature[1]])
        .range([0,1])

    const bands = 100 / data.length

    console.log(temperature)
    return(
        <g transform={`translate(${xScale.bandwidth() / 2},-${scaleOffset})`}>
            <linearGradient
                id="myGradient"
            >
                <stop offset="5%"  stopColor="gold" />
                <stop offset="100%" stopColor="red" />
                {/* {data.map((each, i) => 
                {
                    console.log(each.Temp, interpolateOranges(tempColor(each.Temp)))
                    return(<stop
                        offset={bands * (i+1)}
                        stopColor={interpolatePRGn(tempColor(each.Temp))}
                    />)
                })} */}
            </linearGradient>
            <path 
                className="area-volume"
                fill="url('#myGradient')"
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