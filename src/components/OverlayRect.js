export const OverlayRect = ({
    xScale,
    yScale,
    data,
    toDraw,
    innerHeight,
    color
}) => {
    return(
        <g className={`${toDraw}`}>
          {xScale.domain().map((value, i) => (
            <rect 
              key={`border${value}`}
              x={xScale(value)}
              y={yScale(data[i][toDraw])}
              width={xScale.bandwidth()}
              height={innerHeight - yScale(data[i][toDraw])}
              fill={color(toDraw)}
              opacity='0.8'
            >
                <title>{data[i][toDraw]}</title>
            </rect>
          ))}
        </g>
      );
}