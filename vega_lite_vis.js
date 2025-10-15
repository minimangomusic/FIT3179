var graph1 = "graph1.vg.json";
vegaEmbed("#graph1", graph1);
var graph2 = "graph2.vg.json";
vegaEmbed("#graph2", graph2);
// var graph3 = "graph3.vg.json";
// vegaEmbed("#graph3", graph3);
// var graph4 = "graph4.vg.json";
// vegaEmbed("#graph4", graph4);
// var graph5 = "graph5.vg.json";
// vegaEmbed("#graph5", graph5);
// var graph6 = "graph6.vg.json";
// vegaEmbed("#graph6", graph6);
// var graph7 = "graph7.vg.json";
// vegaEmbed("#graph7", graph7);
// var graph8 = "graph8.vg.json";
// vegaEmbed("#graph8", graph8);

var vg_1 = "daily_cost_bar_chart.vg.json";
vegaEmbed("#bar_chart", vg_1).then(function(result) {
  /*
// Access the Vega view instance
// (https://vega.github.io/vega/docs/api/view/) as result.view
*/
}).catch(console.error);
