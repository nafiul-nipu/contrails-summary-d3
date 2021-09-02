export const AxisBottom = ({xScale, innerHeight, offset=5}) => {
    return (
        <g transform={`translate(0, ${innerHeight})`}>
            <line
                // x1={xScale.range()[0]}
                x2={xScale.range()[1]}
                
                stroke={'black'}
            />
            {xScale.domain().map(tickValue => (
                <>
                    <line
                        x1={xScale(tickValue)}
                        x2={xScale(tickValue)}
                        y2={innerHeight}
                        stroke={"black"}
                    />         
                    <text 
                        key={`botAxis${tickValue}`}
                        x={xScale(tickValue) + xScale.bandwidth() /3}
                        y={innerHeight + offset * 4}
                        dy={'1.2em'}
                    >
                        {tickValue}
                    </text>
                </>
            ))}
        </g>
    );
    };