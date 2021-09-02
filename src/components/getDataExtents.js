import { extent } from "d3";

export const getDataExtents = (
    con1Data, 
    con2Data, 
    con3Data, 
    attributes) => {
        // console.log(con1Data)
        // console.log(extent(con1Data.map(d=>d[attributes[0]])))
        let result = {}

        for(let attr of attributes){
            let exts = []
            exts.push(extent(con1Data.map(d=>d[attr])))
            exts.push(extent(con2Data.map(d=>d[attr])))
            exts.push(extent(con3Data.map(d=>d[attr])))

            let min = exts[0][0]
            let max = exts[0][1]
            for(let ex = 1 ; ex < exts.length; ex++){
                if(exts[ex][0] < min){
                    min = exts[ex][0] 
                }

                if(exts[ex][1] > min){
                    max = exts[ex][1] 
                }
            }

            result[attr] = [min, max]

        }

        return result
};