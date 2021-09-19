export const AxisBottom = ({
    xScale, 
    innerHeight,
    innerWidth, 
    scaleOffset}) => {
    return (
        <>
            <line 
                className='axisLine' 
                x1={0} 
                x2={innerWidth} 
                y1={innerHeight - scaleOffset} 
                y2={innerHeight - scaleOffset} />
            <g transform={`translate(${scaleOffset}, ${innerHeight})`}>
                {xScale.domain().map(tickValue => (                
                    <text 
                        className="tickText"
                        key={`botAxis${tickValue}`}
                        x={xScale(tickValue) + xScale.bandwidth() / 5}
                        // y={innerHeight}
                        dy={'0.32em'}
                    >
                        {tickValue}
                    </text>
                ))}
            </g>
        </>
    );
};