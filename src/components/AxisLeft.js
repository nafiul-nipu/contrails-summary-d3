export const AxisLeft = ({xScale, yScale, scaleOffset}) => {
    const [xStart, ] = xScale.range();
    const [yStart, yEnd] = yScale.range();
    const ticks = yScale.ticks();
    return (
        <>
            <line className={'axisLine'} x1={xStart} x2={xStart} y1={yEnd} y2={yStart} /> 
            <g className="ticks">
                {ticks.map((t, i) => {
                    const y = yScale(t);
                    return (
                    <>
                        <line x1={xStart} x2={xStart - scaleOffset} y1={y} y2={y}/>
                        <text
                        x={xStart - scaleOffset * 6}
                        y={y}
                        >
                        {t}
                        </text>
                    </>
                    );
                })}
            </g>
        </>
    );
};