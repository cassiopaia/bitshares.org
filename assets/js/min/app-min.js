function updateDEX(){return $.ajax({url:"http://api.bitsharesblocks.com/v1/cmc",jsonp:"callback",dataType:"jsonp",data:{format:"json"},type:"GET"})}function updateCMC(){return $.ajax({url:"http://coinmarketcap-nexuist.rhcloud.com/api/bts",data:{format:"json"},type:"GET"})}function tickerData(){$.when(updateDEX(),updateCMC()).done(function(e,t){e=JSON.parse(e[0]),t=t[0];var a={USD:"$",CNY:"¥",GOLD:"$",BTC:"Ƀ",EUR:"€"};e.assets.forEach(function(e,i){a[e.symbol]&&$("#"+e.symbol).text(function(i,o){var n=t.price[e.symbol.toLowerCase()]?t.price[e.symbol.toLowerCase()]:t.price.usd,l=-1===e.symbol.indexOf("GOLD")?3:0;return(n/e.price).toFixed(l)+" "+a[e.symbol]+" / bit"+e.symbol})}),$("#ticker").css("visibility","visible")}).fail(function(e){console.log(e)})}$(document).foundation(),$("a.close-risks").click(function(){$("#risks").foundation("reveal","close"),$(document).foundation({"magellan-expedition":{active_class:"active",threshold:120,destination_threshold:200,throttle_delay:50,fixed_top:0,offset_by_height:!0}})}),$(document).foundation("joyride","start"),tickerData(),setInterval(tickerData,3e5),$(function(){var e=new Date,t=new Date;t.setDate(t.getDate()-10);var a="http://api.bitsharesblocks.com/v3/pricehistory/USD/";a+=JSON.stringify({start:t,end:e}),$.ajax({url:a,jsonp:"callback",dataType:"jsonp",type:"GET",success:function(e){e=JSON.parse(e);var t=[0,0];e.volume.forEach(function(e){t[1]=Math.max(e[1],t[1])}),t[1]=Math.floor(1.05*t[1]),$("#container").highcharts("StockChart",{chart:{zoomType:"x",renderTo:"container",style:{overflow:"visible"},backgroundColor:"grey",margin:[1,1,1,1]},plotOptions:{column:{states:{hover:{color:"red"}}}},navigator:{enabled:!1},credits:{enabled:!1},scrollbar:{enabled:!1},title:{text:""},exporting:{enabled:!1},rangeSelector:{enabled:!1},xAxis:{minRange:6048e5,labels:{enabled:!1},lineWidth:0,minorGridLineWidth:0,lineColor:"transparent",minorTickLength:0,tickLength:0},yAxis:[{title:{text:"",style:{color:Highcharts.getOptions().colors[1]}},labels:{enabled:!1},gridLineWidth:0},{opposite:!0,labels:{enabled:!1},gridLineWidth:0,tickLength:0,max:t[1],tickInterval:t[1]/2}],tooltip:{shared:!0,positioner:function(e,t,a){return{x:a.plotX-e/2,y:1.15*t}},valueDecimals:2},series:[{data:e.volume,name:"Volume",dataGrouping:{enabled:!0},type:"column",yAxis:1,tooltip:{valueDecimals:0,valueSuffix:" BTS"}},{data:e.price,name:"Price",dataGrouping:{enabled:!0},tooltip:{valueDecimals:2,valueSuffix:" BTS/USD"}}]})}})}),particlesJS("particles-vision",{particles:{color:"#00587c",shape:"circle",opacity:.3,size:2.5,size_random:!0,nb:100,line_linked:{enable_auto:!0,distance:250,color:"#00a9e0",opacity:.5,width:1,condensed_mode:{enable:!1,rotateX:600,rotateY:600}},anim:{enable:!0,speed:1.5}},interactivity:{enable:!1,mouse:{distance:250},detect_on:"canvas",mode:"grab",line_linked:{opacity:.5},events:{onclick:{push_particles:{enable:!0,nb:4}}}},retina_detect:!0}),$(".disabled-link").click(function(e){return e.preventDefault(),!1});