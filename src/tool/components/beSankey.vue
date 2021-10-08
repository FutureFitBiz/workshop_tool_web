

<template>
<div>
  <div class="">

  </div>
  <!-- <h2>Bar Chart I</h2> -->
  <!-- <div class="custom-control custom-switch align-right">
    <input v-model="sortBySDG" @click="swapSort" type="checkbox" class="custom-control-input" id="customSwitch1">
    <label class="custom-control-label" for="customSwitch1">Sort by SDG</label>
  </div> -->
  <div class="">
    <div class="dropdown">
      <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Sort by
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li @click="updateSorting(item.id)" :value="item.id" v-for="item in this.sankeyData.sortings">
          <a class="dropdown-item" href="#">
            {{item.name}}
          </a>
        </li>
        <!-- <li><a class="dropdown-item" href="#">Break-Even/SDG number</a></li>
        <li><a class="dropdown-item" href="#">Break-Even Risk (default)</a></li>
        <li><a class="dropdown-item" href="#">SDG Risk</a></li> -->
      </ul>
    </div>

  </div>
  <div class="mt-3">
    <div class="float-start"> Break-Even </div>
    <div class="float-end"> SDG </div>

  </div>
  <div class="container-chart ">
    <!-- <div class="be-sankey-chart"> -->
    <svg id="be-sankey-chart">

    </svg>
    <!-- </div> -->
  </div>
  <div id="tooltips">

  </div>
  <!-- <div class="" v-for="item in sankeyData.links"> {{item}} </div> -->
  <!-- {{sankeyData.links}} -->
</div>
</template>



<script>
import * as d3 from 'd3'
import { sankey as Sankey, sankeyLinkHorizontal } from 'd3-sankey';

export default {
  name: 'beSankey',
  data: function() {
    return {
      sortBySDG: false,
      sankeyData: {},
      sortID: 0,
    }
  },
  created: function() {},
  mounted() {
    this.$http.get('be/sankey').then((response) => {
      this.sankeyData = response.data
      this.loadChart()
    })

  },
  methods: {
    updateSorting: function(id) {
      this.sortID = id
      this.loadChart()
    },
    //
    // updateChart: function() {
    //   var svg = d3.select(".be-sankey-chart")
    //
    // },
    loadChart: function() {
      const width = 975
      const height = 700

      var sankey = Sankey()
        .nodeWidth(8)
        .nodePadding(10)
        .extent([
          [0, 5],
          [width, height - 5]
        ])
        .nodeSort(null)
        .linkSort(null)

      var svg = d3.select("#be-sankey-chart").html("")
        .attr("viewBox", [0, 0, width, height])

      var colours = {
        titles: ['Low', 'Moderate', 'High', ],
        values: ['#77d78d', '#f9d858', '#ff9f9a ']
      }

      var color = d3.scaleOrdinal(colours.titles, colours.values).unknown("#ccc")

      // let nodes = this.sankeyData[this]

      const { nodes, links } = sankey({
        nodes: this.sankeyData.sortings[this.sortID].nodes.map(d => Object.assign({}, d)),
        links: this.sankeyData.sortings[this.sortID].links.map(d => Object.assign({}, d))
      });



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

      function tooltipTemplate(data) {
        return `
        <b>SDG ${data.sdg}</b> ${data.sdg_text} <br>
        <b>${data.code}</b> ${data.be_text}<br>
        <b>Risk level</b> ${data.risk}<br>
        <b>SDG to Break-Even reasoning</b> ${data.sdg_link_text}<br>
        `
      }

      var tooltip = d3.select(".container-chart")
        .append("div")
        .attr("class", "tooltip custom-tooltip")

      var mouseover = function(d) {
        // console.log(d)
        let data = d.target.__data__

        tooltip
          .style("opacity", 1)
          .html(tooltipTemplate(data))
          .style("left", (d.layerX + 15 + "px"))
          .style("top", (d.layerY + 15 + "px"))
      }


      var mouseleave = function(d) {
        tooltip
          .style("opacity", 0)
      }

      // the bars!
      svg.append("g")
        .attr("fill", "none")
        .selectAll("g")
        .data(links)
        .join("path")
        .attr("d", sankeyLinkHorizontal())
        .attr("stroke", d => color(d.risk))
        .attr("stroke-width", d => d.width * 1)
        .style("mix-blend-mode", "multiply")
        .attr("class", "bar-hover")
        .on("mouseover", d => mouseover(d))
        .on("mouseleave", mouseleave)



      // text labels
      svg.append("g")
        .style("font", "17px sans-serif")
        .style("cursor", "info")
        .selectAll("text")
        .data(nodes)
        .join("text")
        .attr("x", d => d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6)
        .attr("y", d => (d.y1 + d.y0) / 2)
        .attr("dy", "0.45em")
        .attr("text-anchor", d => d.x0 < width / 2 ? "start" : "end")
        .text(d => d.name)
      // .append("tspan")
      // .attr("fill-opacity", 0.7)
      // .text(d => ` ${d.value.toLocaleString()}`);
      // d3.select("#circleCustomTooltip")
      // create a tooltip

      svg.exit().remove()

    }
  }

}
</script>


<style >
.custom-tooltip {
  opacity: 0;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 10px;
}

foreignObject {
  width: 100%;
}

svg div {
  text-align: center;
  line-height: 150px;
}

.bar-hover:hover {
  stroke: grey;
  z-index: 999;
}
</style>
