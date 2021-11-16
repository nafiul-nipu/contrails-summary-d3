import React from "react";
import * as d3 from 'd3'
import ScatterD3 from "./scatter-d3";
import LineD3 from "./line-d3";

class Scatter extends React.Component{
    constructor(props){
        super(props);
        this.scatterId = React.createRef();

        this.promises = []
        // this.data = null
        this.xDomain = null
        this.yDomain = null

        this.dataTime = {
            contrails1: [0.1,0.11,0.12,0.13,0.14,0.15,0.16,0.17,0.18,0.19,0.2],
            contrails2: [0.1,0.11,0.12,0.13,0.14,0.15,0.16,0.17,0.18,0.19,0.2],
            contrails3: [0.1,0.11,0.12,0.13,0.14,0.15,0.16,0.17,0.18,0.19,0.2],
            newData:[210,211,212,213,214,215,216,217,218,219]
        }

        this.state = {

        }
    }

    componentDidMount(){
                // console.log('component did mount')
                var val = this.props.value;
                console.log("component did mount", val)
                const self = this
                this.dataTime[val].forEach(el => {
                    let url = `https://raw.githubusercontent.com/nafiul-nipu/contrails-scatter-tree-evolution-d3/master/src/data/particles/${val}/${el}.json`
                    self.promises.push(d3.json(url))
                })
                Promise.all(self.promises).then(function(files) {            
        
                    if(self.props.value === 'newData'){
                        self.xDomain = {max: 60}
                        self.yDomain = {min: -5, max: 5}
                    }else{
                        self.xDomain = {max: 16}
                        self.yDomain = {min: -2, max: 2}
                    }

                    new LineD3(self.scatterId.current, files, self.xDomain, self.yDomain)
                })
        
    }

    render(){
        return(
            <div ref={this.scatterId}>{this.props.value}</div>
        )
    }
}

export default Scatter;