var vg_1 = "./idioms/top_cities_val.json"
var vg_2 = "./idioms/top_cities_cnt.json"
var vg_3 = "./idioms/top_industries_val.json"
var vg_4 = "./idioms/top_industries_cnt.json"

var vg_5 = "./idioms/top_city_cnt.json"

vegaEmbed("#a", vg_1, {"actions": false}).then(function(result){
}).catch(console.error);

vegaEmbed("#b", vg_2, {"actions": false}).then(function(result){
    const data = result.view.data('table');
    console.log("Top cities");
    
    console.log(data.map((d) => d));
}).catch(console.error);

vegaEmbed("#c", vg_3, {"actions": false}).then(function(result){
}).catch(console.error);

vegaEmbed("#d", vg_4, {"actions": false}).then(function(result){
}).catch(console.error);

vegaEmbed("#e", vg_5, {"actions": false}).then(function(result){
}).catch(console.error);