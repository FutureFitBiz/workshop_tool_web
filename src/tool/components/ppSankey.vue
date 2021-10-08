

<template>
<div>

  <!-- <h2>Bar Chart I</h2> -->
  <!-- <div class="float-start"> BreakEvens </div> -->
  <!-- <div class="float-end"> SDGs </div> -->
  <div class=" text-center">
    <div class="float-start">Activity</div>
    <!-- <div class="col">Positive Pursuit </div> -->
    <div class="float-end">SDG </div>
    <!-- <div class="col">SDG Target</div> -->

  </div>
  <div class="container-chart ">
    <div class="sankey-chart-pp"></div>
  </div>
</div>
</template>



<script>
import * as d3 from 'd3'
// import { chart, d3 } with { color, data } from "@d3/parallel-sets"
import { sankey as Sankey, sankeyLinkHorizontal } from 'd3-sankey';

const colours = [
  'pink',
  'peachpuff',
  // 'lightyellow',
  'palegreen',
  // 'lightcyan',
  'powderblue',
  'thistle',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(153, 102, 255, 1)',
]

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

// const startingPoint = colours.length
const startingPoint = randomNumber(0, colours.length)


export default {
  name: 'ppSankey',
  data: function() {
    return {
      productColours: {},
    }
  },
  created: function() {},
  mounted() {
    this.$http.get('pp/sankey').then((response) => {
      this.loadChart(response.data)
    })
  },
  methods: {
    productColour(obj) {
      let key = obj.product_name
      let index = startingPoint

      if (key in this.productColours) {
        index = this.productColours[key]
      } else {
        let offset = startingPoint + Object.keys(this.productColours).length
        if (offset > colours.length) {
          offset = offset % colours.length
        }
        this.productColours[key] = offset
        index = offset
      }

      index = index - 1
      // console.log('index', index)

      return colours[index]
    },
    loadChart: function(chartData) {
      const width = 975
      const height = 700

      var sankey = Sankey()
        .nodeSort(null)
        .linkSort(null)
        .nodeWidth(8)
        .nodePadding(10)
        .extent([
          [0, 5],
          [width, height - 5]
        ])

      var svg = d3.select(".sankey-chart-pp")
        .append("svg").attr("viewBox", [0, 0, width, height]);

      var colours = {
        titles: ['Low', 'Moderate', 'High', ],
        values: ['#77d78d', '#f9d858', '#ff9f9a ']
      }


      const { nodes, links } = sankey({
        nodes: chartData.nodes.map(d => Object.assign({}, d)),
        links: chartData.links.map(d => Object.assign({}, d))
      })

      function tooltipTemplate(data) {
        return `
        <b>${data.product_name}</b> <br>
        <b>SDG ${data.sdg}</b> ${data.sdg_text} <br>
        <b>${data.pp}</b> ${data.pp_text}<br>
        <b>Positive Impact</b> ${data.text}<br>
        `
      }

      var tooltip = d3.select(".container-chart")
        .append("div")
        .attr("class", "tooltip custom-tooltip")

      var mouseover = function(d) {
        let data = d.target.__data__
        tooltip
          .style("opacity", 1)
          .html(tooltipTemplate(data))
          .style("left", (d.layerX + 15 + "px"))
          .style("top", (d.layerY + 15 + "px"))
      }

      var mouseleave = function(d) {
        tooltip.style("opacity", 0)
      }

      // # thin Bars on the start and end
      svg.append("g")
        .selectAll("rect")
        .style("background-color", 'blue')
        .data(nodes)
        .join("rect")
        .attr("x", d => d.x0)
        .attr("y", d => d.y0)
        .attr("height", d => d.y1 - d.y0)
        .attr("width", d => d.x1 - d.x0)
        .append("title")
        .text(d => `${d.name}\n${d.value.toLocaleString()}`);

      // bars
      svg.append("g")
        .attr("fill", "none")
        .selectAll("g")
        .data(links)
        .join("path")
        .attr("d", sankeyLinkHorizontal())
        .attr("stroke", d => this.productColour(d))
        .attr("stroke-width", d => d.width * 1)
        // .style("mix-blend-mode", "color-burn")
        .style("mix-blend-mode", "multiply")
        .attr("class", "bar-hover")
        .on("mouseover", mouseover)
        .on("mouseleave", mouseleave)

      // text labels
      svg.append("g")
        .style("font", "17px sans-serif")
        .selectAll("text")
        .data(nodes)
        .join("text")
        .attr("x", d => d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6)
        .attr("y", d => (d.y1 + d.y0) / 2)
        .attr("dy", "0.45em")
        .attr("text-anchor", d => d.x0 < width / 2 ? "start" : "end")
        .text(d => d.name)
        .append("tspan")

    }
  }

}
</script>


<style >
.bar-hover:hover {
  cursor: pointer;
  stroke: grey;
  z-index: 999;
}

.custom-tooltip {
  opacity: 0;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 10px;
  margin-right: 30px;
  max-width: 400px;
}
</style>
