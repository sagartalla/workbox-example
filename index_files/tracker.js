var sokrati={init:function(){sokrati.randomGen=72008010;protocol=("https:"==document.location.protocol)?"https:":"http:";sokrati.url=protocol+"//tracking.sokrati.com/";sokrati.base="res="+screen.width+"x"+screen.height+"&lang="+(navigator.language||navigator.browserLanguage).substr(0,2);sokrati.base+="&client_id="+_sokClient;sokrati.delay=500;if(typeof _sokDelay!='undefined')sokrati.delay=_sokDelay},_pause:function(x){var delay=(x||1000);if(delay<1000)delay=1000;var now=new Date();var stop=now.getTime()+delay;while(now.getTime()<stop)var now=new Date()},_beacon:function(control,x,sokParams){if(x){var paramStr="";for(var key in sokParams){paramStr=paramStr+"&"+escape(key)+"="+escape(sokParams[key])} var img=new Image(1,1);var clientIdBaseString=sokrati.base;if(sokParams&&sokParams.client_id) {previousClientId="&client_id="+_sokClient;clientIdBaseString=clientIdBaseString.replace(previousClientId,"")} img.src=sokrati.url+control+clientIdBaseString+x+"&_ur="+Math.round(Math.random()*sokrati.randomGen)+"&_ref="+escape(document.referrer)+paramStr;img.onload=function(){return}}},beacon:function(pg,id){sokrati._beacon("site?","&product_category="+pg+"&item_identifier="+id,{})},beaconParams:function(pg,id,params){sokrati._beacon("site?","&product_category="+pg+"&item_identifier="+id,params)},siteParams:function(pg,id,params){sokrati._beacon("site?","&product_category="+pg+"&item_identifier="+id,params)},track:function(pg,id){sokrati._beacon("lead?","&product_category="+pg+"&item_identifier="+id,_sokParams);_sokParams={}},trackParams:function(pg,id,params){sokrati._beacon("lead?","&product_category="+pg+"&item_identifier="+id,params)},leadParams:function(pg,id,params){sokrati._beacon("lead?","&product_category="+pg+"&item_identifier="+id,params)},trackSale:function(pg,id,sales,quantity){sokrati._beacon("lead?","&product_category="+pg+"&item_identifier="+id+"&sales="+sales+"&qty="+quantity,_sokParams);_sokParams={}},trackSaleParams:function(pg,id,sales,quantity,params){sokrati._beacon("lead?","&product_category="+pg+"&item_identifier="+id+"&sales="+sales+"&qty="+quantity,params)},click:function(pg,id,url){sokrati._beacon("lead?","&product_category="+pg+"&item_identifier="+id+"&click="+url,{});sokrati._pause(sokrati.delay)},clickSale:function(pg,id,url,sales,quantity){sokrati._beacon("lead?","&product_category="+pg+"&item_identifier="+id+"&click="+url+"&sales="+sales+"&qty="+quantity,{});sokrati._pause(sokrati.delay)}};var _sokParams={};sokrati.init();
