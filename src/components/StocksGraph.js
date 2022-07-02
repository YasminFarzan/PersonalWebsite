import * as d3 from 'd3'
import {Component, createRef} from 'react'

// I used this as template: https://d3-graph-gallery.com/graph/line_several_group.html

class StocksGraph extends Component {

    constructor(props) {
        super(props);
        this.myRef = createRef()
        this.margin = {top: 10, right: 30, bottom: 30, left: 60}
        this.width = this.props.width - this.margin.left - this.margin.right
        this.height = this.props.height - this.margin.top - this.margin.bottom;
        this.background = !this.props.background?'lightgrey':this.props.background
        this.container = undefined
        this.legend = undefined
        this.colors = undefined
        this.inputData = this.props.data
    }

    init = () => {
        let root = this.myRef.current
        if (!this.container){
            this.container = d3.select(root)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom)
                .append("g")
                .attr("transform",
                    "translate(" + this.margin.left + "," + this.margin.top + ")");
        }
    }

    paint = () => {

    // append the svg object to the body of the page

    //Read the data
    //     d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/connectedscatter.csv",
    //     // When reading the csv, I must format letiables:
    //     function(d){
    //         return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
    //     },
    //     // Now I can use this dataset:
    //     let data1 = [{date: "2018-04-14", value: 100}, {date: "2018-04-15", value: 101}, {date: "2018-04-16", value: 102}, {date: "2018-04-17", value: 103}]
    //     let data2 = [{date: 200, value: 100}, {date: 205, value: 101}, {date: 210, value: 102}, {date: 215, value: 103}]
        const dates = this.inputData.timestamp.map(function(x) { return x * 1000; })

        // Add X axis --> it is a date format
        let x = d3.scaleTime()
            .domain(d3.extent(dates))
            .range([ 0, this.width ])
        this.container.append("g")
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3.axisBottom(x));
        // Add Y axis
        let y = d3.scaleLinear()
            .domain([0, 3000])
            .range([ this.height, 0 ]);
        this.container.append("g")
            .call(d3.axisLeft(y));

        this.container
            .append("div")
            //.style("opacity", 1)
            .attr("class", "tooltip")
            .attr("id","tooltip")
            .style("position","relative")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "2px")
            .style("border-radius", "5px")
            .style("padding", "5px")
            .style("border-color", "black")

        // Three function that change the tooltip when user hover / move / leave a cell
       // let mouseover = function(d) {
       //      Tooltip
       //          .style("opacity", 1)
       //  }
        let mousemove = function(d) {
            console.log("mousemove" + this.__data__.value)
            d3.select("#tooltip")
                .html("Exact value: " + this.__data__.value)

        }
        // let mouseleave = function(d) {
        //     Tooltip
        //         .style("opacity", 0)
        // }

        let comparisons = this.inputData.comparisons
        for (let i = 0; i < comparisons.length; i++) {
            let data = []
            dates.forEach((element, j) => {
                data.push({date: dates[j], value: comparisons[i].high[j]})
            })
            // Add the line
            this.container.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("stroke", this.colors[i])
                .attr("stroke-width", 1.5)
                .attr("d", d3.line()
                    .x(d => x(d.date))
                    .y(d => y(d.value))
                )
            // Add the points
            this.container
                .append("g")
                .selectAll("dot")
                .data(data)
                .enter()
                .append("circle")
                    .attr("class", "myCircle")
                    .attr("cx", function(d) { return x(d.date) } )
                    .attr("cy", function(d) { return y(d.value) } )
                    .attr("r", 3)
                    .attr("fill", this.colors[i])
                    // .on("mouseover", mouseover)
                    .on("mousemove", mousemove)
                    // .on("mouseleave", mouseleave)
        }

    }

    LegendComp = ()=>{
        let counter = 0
        let li = this.legend.map((element, i)=><li key={counter++}
                                                   id={`li${i + 1}`}
                                                   style={{color: this.colors[i]}}>{element}</li>)
        return(
            <>
                {li}
            </>
        )
    }

    setLegend() {
        let nameSet = new Set()
        this.inputData.comparisons.forEach(element=>{
            nameSet.add(element.symbol)
        })
        this.legend = Array.from(nameSet)
        this.colors = ["red", "blue", "yellow", "green"]
    }

    componentDidMount() {
        this.init()
        this.paint()

        window.addEventListener('resize', ()=>{
            this.paint()
        })
    }

    render() {
        this.setLegend()
        let contStyle = {
            display: 'flex',
            flexFlow: 'row wrap'
        }
        return(
            <div style={contStyle}>
                <div ref={this.myRef}>
                </div>
                <div>
                    <ul>
                        <this.LegendComp/>
                    </ul>
                </div>
            </div>

        )
    }
}
export default StocksGraph;