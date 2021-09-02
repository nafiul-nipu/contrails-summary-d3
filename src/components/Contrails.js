import { symbol } from "d3-shape"
export const Contrails = ({data, 
    shapes, 
    symSize, 
    xScale, 
    yScale, 
    color,
    contrails}) => data.map(con => {
      let pathCreator = symbol(shapes(contrails), symSize(con.Ice))()

      return (
        <path 
          d={pathCreator}
          transform={`translate(${xScale(con.Timesteps)}, ${yScale(con.IceVolume)})`}
          fill={color(con.Temp)}
        >
            <title>{`${contrails}`}</title>
        </path>
      )
    })