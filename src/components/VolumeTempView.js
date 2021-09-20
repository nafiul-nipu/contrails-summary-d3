import { scaleLinear } from "d3-scale"
import { area } from "d3-shape"
import { interpolateOranges, interpolatePRGn} from "d3-scale-chromatic"

export const VolumeTempView =({
    data,
    volume,
    temperature,
    xScale,
    innerHeight
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
        <>
            <linearGradient
                id="myGradient"
            >
                <stop offset="5%"  stopColor="gold" />
      <stop offset="95%" stopColor="red" />
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
            fill="url('#myGradient')"
                d={area()
                    .x((d) => xScale(d.Timesteps))
                    .y0(volumeScale(0))
                    .y1((d) => volumeScale(d.IceVolume))
                    (data)
                }
            />
        </>
    )
}