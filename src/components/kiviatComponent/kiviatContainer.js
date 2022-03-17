import { KiviatAxes } from "./kiviatAxes";
import { KiviatPath } from "./kiviatPath";

const width = 750;
const height = 750;
const attributes = ['temp', 'particles', 'mass', 'length', 'group']
export const KiviatContainer = ({
    domains,
    kiviatData,
    kScale
}) => {
    // console.log(domains, data)
    // console.log("h")
    
    return(
        <svg width={width - 50} height={height - 50}>
            <g transform={`translate(50, 50)`}>
                <circle
                    cx={0}
                    cy={0}
                    r={8}
                    opacity={0.25}
                ></circle>
                {
                    attributes.map((att, index) => (
                        <KiviatAxes 
                            axesName = {att}
                            index = {index}
                            attributeLength = {attributes.length}
                            rotatePointOntoAxis={rotatePointOntoAxis}
                        />
                    ))
                }
                <KiviatPath
                    attributes={attributes}
                    domains ={domains}
                    data = {kiviatData}
                    scale={kScale}
                    rotatePointOntoAxis={rotatePointOntoAxis}
                />

            </g>
        </svg>
    )
}


const rotatePointOntoAxis = (pointX, axisIndex, attributeLength) => {
    let angle = Math.PI * 2 * axisIndex / attributeLength;

    return rotatePoint(pointX, angle);
}

const rotatePoint = (pointX, angle) =>{
    return {
        x: Math.cos(angle) * (pointX),
        y: Math.sin(angle) * (pointX)
    };
}