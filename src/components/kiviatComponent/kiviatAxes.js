export const KiviatAxes = ({
    axesName,
    index,
    attributeLength,
    rotatePointOntoAxis
}) =>{
    // console.log(index, axesName)
    let axisEndPoint = rotatePointOntoAxis(40, index, attributeLength)
    return(
        <>
            <line
                x1={0}
                y1 ={0}
                x2 ={axisEndPoint.x}
                y2 = {axisEndPoint.y}
                stroke={'darkgray'}
                strokeWidth={'1px'}
            ></line>
            <text
                x={axisEndPoint.x}
                y={axisEndPoint.y + 4}
                fontSize={'0.38em'}
                textAnchor={'middle'}
            >
                {axesName}
            </text>
            <circle
                cx={axisEndPoint.x}
                cy={axisEndPoint.y}
                r={7}
                opacity={0.25}
            ></circle>
        </>
    )
}

