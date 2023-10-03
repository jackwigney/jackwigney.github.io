var vg_1 = "idioms/sphere.json";
var vg_2 = "idioms/industry_count.json"

vegaEmbed("#map", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#count", vg_2).then(function(result){

}).catch(console.error);
