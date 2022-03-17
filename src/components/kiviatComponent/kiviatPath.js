export const KiviatPath = ({
    attributes,
    domains,
    data,
    scale,
    rotatePointOntoAxis
}) =>{
    return(
        <path
            d={calculatePath(data, attributes, domains, scale, rotatePointOntoAxis)}
            fill={'black'}
            opacity={0.75}
        ></path>
    )
}

const calculatePath = (data, attributes, domains, scale, rotatePointOntoAxis) =>{
    // console.log(data)
    // console.log(rotatePointOntoAxis(40, 2, 7))
    let pathCoord = [];
    for(let attr in attributes){
        // console.log(attr)
        let attribute = attributes[attr];
        scale.domain(domains[attribute]);
        let xPoint = scale(data[attribute]);
        // console.log(xPoint, domains[attribute], data[attribute])
        let endPoint = rotatePointOntoAxis(xPoint, attr, attributes.length)

        pathCoord.push(endPoint.x + " " + endPoint.y)
    }

    return "M " + pathCoord.join(" L ") + " Z";

}