import * as d3 from 'd3';



export default class ScatterD3{
    constructor(element, data, xDomain, yDomain, attributes){
        this.element = element;
        this.data = data;
        this.xDomain = xDomain;
        this.yDomain = yDomain;
        this.attributes = attributes

        console.log(this.attributes)
        this.drawScatter(this.element, this.data, this.xDomain, this.yDomain, this.attributes[this.attributes.length - 1]);
    }

    drawScatter(el, particles, xD, yD, details){
        let margin = {top: 10, right: 30, bottom: 30, left: 60}
        const width = d3.select(el).node().parentNode.clientWidth - margin.left - margin.right;
        const height = d3.select(el).node().parentNode.clientHeight - margin.top - margin.bottom;
        // console.log(width)
        // console.log(height)

        let svg = d3.select(el)
            .append('svg')
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        let xScale = d3.scaleLinear()
            .domain([0, 16])
            .range([0, width])

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(xScale));

        let yScale = d3.scaleLinear()
            .domain([-2, 2])
            .range([height, 0])

        svg.append("g")
            .call(d3.axisLeft(yScale));

        let color = d3.scaleOrdinal()
            .domain([1,2,3,4,5,6])
            .range(['#000000', "#f0027f", "#386cb0", "#fdc086", '#7fc97f', "#beaed4"])


        svg.append('g')
            .selectAll("dot")
            .data(particles) // the .filter part is just to keep a few dots on the chart, not all of them
            .enter()
            .append("circle")
              .attr("cx", function (d) { return xScale(d['Points:0']); } )
              .attr("cy", function (d) { return yScale(d['Points:1']); } )
              .attr("r", 1.5)
              .style("fill", function(d){ return color(d['cluster'])})
            //   .style("opacity", 0.3)
            //   .style("stroke", "white")


        let attr = ['temperature', 'ice_particles', 'ice_mass', 'ice_length'];

        svg.append('g')
            .selectAll('text')
            .data(attr)
            .enter()
            .append('text')
            .attr('x', 15)
            .attr('y', (d,i) => 5 +  i * 12)
            .attr('font-size', '10px')
            .text((d) => {
                return `${d} = ${details[d]}`
            })


        // svg.append('g')
        //     .append('text')
        //     .attr('font-size', '10px')
        //     .text(`
        //         temperature : ${details.temperature} K 
        //         ice_length : ${details.ice_length} m 
        //         ice_mass : ${details.ice_mass.toFixed(3)} mg
        //         ice_particles : ${details.ice_particles}
        //     `)

        
    }
}