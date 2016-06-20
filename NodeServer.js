///**
// * Created by M6600 on 5/10/2016.
// */
//var path = require('path');
//var express = require('express');
//var app = new express();
//
//app.set('case sensitive routing', false);
//app.use('/',express.static(__dirname));
//app.use('/static',express.static(path.join(__dirname ,'images')));
//app.use('/static',express.static(path.join(__dirname ,'initializr/www/img')));
//
//app.get('/customers/:id',function(req,res){
//	var customerId = parseInt(req.params.id);
//	var data ={};
//	for(var i= 0, len=customers.length;i<len;i++){
//		if(customers[i].id === customerId){
//			data = customers[i];
//			break;
//		}
//	}
//	res.jsonp(data);
//});
//
//app.get('/customers',function(req,res){
//	res.jsonp(customers);
//	//res.json(500,{error:'error here'});
//});
//
//
//app.post('/api/customer', function (req, res) {
//   res.send(' got a POST requrest');
//});
//
//app.get('/orders',function(req,res){
//	var orders=[];
//	for(var i= 0,len=customers.length;i<len;i++){
//		if(customers[i].orders){
//			for(var j= 0, ordersLen=customers[i].orders.length;j<ordersLen; j++){
//				orders.push(customers[i].orders[j]);
//			}
//		}
//	}
//	res.json(orders);
//});
//
//app.delete('/customers/:id', function (req,res) {
//	var customerId = parseInt(req.params.id);
//	var data = {status:false};
//	for(var i= 0,len=customers.length;i<len;i++){
//		if(customers[i].id = customerId){
//			customers.splice(i,1);
//			data = {status:true};
//			break;
//		}
//	}
//	res.json(data);
//});
//
//app.listen(63341,function(){
//	console.log(' express listening 63341');
//});
//
//
////[
////	'{{repeat(5, 7)}}',
////	{
////		_id: '{{objectId()}}',
////		joined:'{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
////		name: '{{firstName()}} {{surname()}}',
////		id: '{{index()}}',
////		city: '{{city()}}',
////		orderTotal: '{{floating(1000, 4000, 2, "0,0.00")}}',
////		orders: [
////			'{{repeat(3)}}',{id:'{{index()}}',product:'{{lorem(1,"words")}}',total:'{{integer(1,9)}}'}
////		]
////	}
////]
//
//
//
//var customers = [
//	{
//		"_id": "575c96991f2ddf9780d58670",
//		"joined": "2015-12-07T02:12:04 +08:00",
//		"name": "Jeri Salinas",
//		"id": 0,
//		"city": "Franklin",
//		"orderTotal": 3900.24,
//		"orders": [
//			{
//				"id": 0,
//				"product": "minim",
//				"price": 52.97,
//				"quantity": 2
//			},
//			{
//				"id": 1,
//				"product": "id",
//				"price": 124.03,
//				"quantity": 3
//			},
//			{
//				"id": 2,
//				"product": "eu",
//				"price": 44.67,
//				"quantity": 7
//			}
//		]
//	},
//	{
//		"_id": "575c9699c52457e0d6dc64f3",
//		"joined": "2014-11-25T09:57:39 +08:00",
//		"name": "Hays Sanders",
//		"id": 1,
//		"city": "Centerville",
//		"orderTotal": 2592.88,
//		"orders": [
//			{
//				"id": 0,
//				"product": "nostrud",
//				"price": 165.55,
//				"quantity": 4
//			},
//			{
//				"id": 1,
//				"product": "consequat",
//				"price": 37.92,
//				"quantity": 6
//			},
//			{
//				"id": 2,
//				"product": "eiusmod",
//				"price": 105.72,
//				"quantity": 8
//			}
//		]
//	},
//	{
//		"_id": "575c9699ea9dd2dc36df1206",
//		"joined": "2014-08-12T11:10:54 +07:00",
//		"name": "Lela Miles",
//		"id": 2,
//		"city": "Fontanelle",
//		"orderTotal": 2534.35,
//		"orders": [
//			{
//				"id": 0,
//				"product": "mollit",
//				"price": 183.42,
//				"quantity": 3
//			},
//			{
//				"id": 1,
//				"product": "magna",
//				"price": 128.37,
//				"quantity": 2
//			},
//			{
//				"id": 2,
//				"product": "eiusmod",
//				"price": 103.63,
//				"quantity": 7
//			}
//		]
//	},
//	{
//		"_id": "575c96993be5cc8d8c09634c",
//		"joined": "2014-06-26T02:10:48 +07:00",
//		"name": "Robert Chen",
//		"id": 3,
//		"city": "Dragoon",
//		"orderTotal": 2991.12,
//		"orders": [
//			{
//				"id": 0,
//				"product": "nulla",
//				"price": 127.64,
//				"quantity": 8
//			},
//			{
//				"id": 1,
//				"product": "excepteur",
//				"price": 67.73,
//				"quantity": 3
//			},
//			{
//				"id": 2,
//				"product": "laborum",
//				"price": 179.02,
//				"quantity": 3
//			}
//		]
//	},
//	{
//		"_id": "575c96996151eb844c58e320",
//		"joined": "2014-01-08T05:43:52 +08:00",
//		"name": "Tamera Curtis",
//		"id": 4,
//		"city": "Edgar",
//		"orderTotal": 2633.65,
//		"orders": [
//			{
//				"id": 0,
//				"product": "duis",
//				"price": 16.05,
//				"quantity": 3
//			},
//			{
//				"id": 1,
//				"product": "tempor",
//				"price": 72.07,
//				"quantity": 1
//			},
//			{
//				"id": 2,
//				"product": "consequat",
//				"price": 87.08,
//				"quantity": 2
//			}
//		]
//	},
//	{
//		"_id": "575c96999dbc0f0d6dfdd709",
//		"joined": "2016-02-21T03:35:37 +08:00",
//		"name": "Dunlap Dodson",
//		"id": 5,
//		"city": "Rosewood",
//		"orderTotal": 3730.85,
//		"orders": [
//			{
//				"id": 0,
//				"product": "officia",
//				"price": 128.6,
//				"quantity": 4
//			},
//			{
//				"id": 1,
//				"product": "aliqua",
//				"price": 122.48,
//				"quantity": 3
//			},
//			{
//				"id": 2,
//				"product": "dolor",
//				"price": 127.68,
//				"quantity": 3
//			}
//		]
//	},
//	{
//		"_id": "575c969922dd4ea7f19a3c59",
//		"joined": "2014-01-21T04:33:36 +08:00",
//		"name": "Gail Irwin",
//		"id": 6,
//		"city": "Bagtown",
//		"orderTotal": 3285.61,
//		"orders": [
//			{
//				"id": 0,
//				"product": "adipisicing",
//				"price": 194.73,
//				"quantity": 8
//			},
//			{
//				"id": 1,
//				"product": "ut",
//				"price": 143.45,
//				"quantity": 1
//			},
//			{
//				"id": 2,
//				"product": "aliqua",
//				"price": 29.66,
//				"quantity": 3
//			}
//		]
//	},
//	{
//		"_id": "575c96992abb78dfbac129b4",
//		"joined": "2016-04-11T11:26:52 +07:00",
//		"name": "Crystal Griffin",
//		"id": 7,
//		"city": "Ilchester",
//		"orderTotal": 1802.86,
//		"orders": [
//			{
//				"id": 0,
//				"product": "officia",
//				"price": 177.55,
//				"quantity": 6
//			},
//			{
//				"id": 1,
//				"product": "consequat",
//				"price": 93.04,
//				"quantity": 3
//			},
//			{
//				"id": 2,
//				"product": "dolor",
//				"price": 172.65,
//				"quantity": 9
//			}
//		]
//	},
//	{
//		"_id": "575c9699bfb5c80969334d51",
//		"joined": "2014-07-27T07:30:27 +07:00",
//		"name": "Joy Wiggins",
//		"id": 8,
//		"city": "Elbert",
//		"orderTotal": 3428.14,
//		"orders": [
//			{
//				"id": 0,
//				"product": "ullamco",
//				"price": 40.1,
//				"quantity": 9
//			},
//			{
//				"id": 1,
//				"product": "minim",
//				"price": 76.5,
//				"quantity": 4
//			},
//			{
//				"id": 2,
//				"product": "minim",
//				"price": 59.16,
//				"quantity": 8
//			}
//		]
//	},
//	{
//		"_id": "575c96996553e01845e86ffa",
//		"joined": "2016-02-18T11:40:04 +08:00",
//		"name": "Kristine Williamson",
//		"id": 9,
//		"city": "Churchill",
//		"orderTotal": 1595.49,
//		"orders": [
//			{
//				"id": 0,
//				"product": "irure",
//				"price": 68.59,
//				"quantity": 5
//			},
//			{
//				"id": 1,
//				"product": "nulla",
//				"price": 108.96,
//				"quantity": 3
//			},
//			{
//				"id": 2,
//				"product": "eu",
//				"price": 60.22,
//				"quantity": 7
//			}
//		]
//	},
//	{
//		"_id": "575c9699c595acf4690d8be4",
//		"joined": "2015-10-05T01:04:45 +07:00",
//		"name": "Kaitlin Ayala",
//		"id": 10,
//		"city": "Winfred",
//		"orderTotal": 1559.31,
//		"orders": [
//			{
//				"id": 0,
//				"product": "deserunt",
//				"price": 171.07,
//				"quantity": 9
//			},
//			{
//				"id": 1,
//				"product": "nulla",
//				"price": 170.65,
//				"quantity": 4
//			},
//			{
//				"id": 2,
//				"product": "minim",
//				"price": 25.34,
//				"quantity": 2
//			}
//		]
//	},
//	{
//		"_id": "575c9699e2cecb6b18822c66",
//		"joined": "2015-05-13T05:08:17 +07:00",
//		"name": "Parrish Landry",
//		"id": 11,
//		"city": "Dyckesville",
//		"orderTotal": 2795.26,
//		"orders": [
//			{
//				"id": 0,
//				"product": "veniam",
//				"price": 127.46,
//				"quantity": 6
//			},
//			{
//				"id": 1,
//				"product": "incididunt",
//				"price": 185.16,
//				"quantity": 9
//			},
//			{
//				"id": 2,
//				"product": "officia",
//				"price": 20.23,
//				"quantity": 3
//			}
//		]
//	},
//	{
//		"_id": "575c9699b4f67cd3a09c187d",
//		"joined": "2014-05-16T11:10:15 +07:00",
//		"name": "Stefanie Carroll",
//		"id": 12,
//		"city": "Elwood",
//		"orderTotal": 1632.15,
//		"orders": [
//			{
//				"id": 0,
//				"product": "minim",
//				"price": 149.57,
//				"quantity": 5
//			},
//			{
//				"id": 1,
//				"product": "est",
//				"price": 14.38,
//				"quantity": 1
//			},
//			{
//				"id": 2,
//				"product": "veniam",
//				"price": 64.84,
//				"quantity": 5
//			}
//		]
//	},
//	{
//		"_id": "575c9699dd486c18e490bc30",
//		"joined": "2015-01-25T05:16:16 +08:00",
//		"name": "Duffy Walter",
//		"id": 13,
//		"city": "Williston",
//		"orderTotal": 2926.47,
//		"orders": [
//			{
//				"id": 0,
//				"product": "id",
//				"price": 85.19,
//				"quantity": 8
//			},
//			{
//				"id": 1,
//				"product": "amet",
//				"price": 147.87,
//				"quantity": 9
//			},
//			{
//				"id": 2,
//				"product": "irure",
//				"price": 46.91,
//				"quantity": 3
//			}
//		]
//	},
//	{
//		"_id": "575c9699d6932347bc19f0ea",
//		"joined": "2015-02-24T05:13:01 +08:00",
//		"name": "Clara Cruz",
//		"id": 14,
//		"city": "Cucumber",
//		"orderTotal": 1427.76,
//		"orders": [
//			{
//				"id": 0,
//				"product": "ipsum",
//				"price": 63.01,
//				"quantity": 6
//			},
//			{
//				"id": 1,
//				"product": "sunt",
//				"price": 166.92,
//				"quantity": 7
//			},
//			{
//				"id": 2,
//				"product": "duis",
//				"price": 190.27,
//				"quantity": 9
//			}
//		]
//	},
//	{
//		"_id": "575c96993d738dfba44db0bc",
//		"joined": "2014-02-28T11:08:17 +08:00",
//		"name": "Morse Jenkins",
//		"id": 15,
//		"city": "Longbranch",
//		"orderTotal": 3811.53,
//		"orders": [
//			{
//				"id": 0,
//				"product": "fugiat",
//				"price": 18.53,
//				"quantity": 1
//			},
//			{
//				"id": 1,
//				"product": "irure",
//				"price": 65.16,
//				"quantity": 4
//			},
//			{
//				"id": 2,
//				"product": "Lorem",
//				"price": 59.35,
//				"quantity": 3
//			}
//		]
//	}
//];
//
//////////////////////////////////////////////////////////////////////////////
//
//
//
//var customers1 =[
//	{
//		"_id": "5733760f8edda13c040b7e69",
//		"joined": "2016-03-20T02:21:52 +07:00",
//		"name": "Zimmerman David",
//		"id": 0,
//		"city": "Glendale",
//		"orderTotal": 3969.87,
//		"orders": [
//			{
//				"id": 0,
//				"product": "et",
//				"price": 37.6,
//				"quantity": 2
//			},
//			{
//				"id": 1,
//				"product": "consequat",
//				"price": 162.07,
//				"quantity": 5
//			},
//			{
//				"id": 2,
//				"product": "officia",
//				"price": 102.48,
//				"quantity": 4
//			}
//		]
//	},
//	{
//		"_id": "5733760f9d18ddff8d5d1dd2",
//		"joined": "2016-03-18T03:32:12 +07:00",
//		"name": "Gross Ray",
//		"id": 1,
//		"city": "Carrizo",
//		"orderTotal": 3595.53,
//		"orders": [
//			{
//				"id": 0,
//				"product": "duis",
//				"price": 91.36,
//				"quantity": 2
//			},
//			{
//				"id": 1,
//				"product": "ad",
//				"price": 171.36,
//				"quantity": 7
//			},
//			{
//				"id": 2,
//				"product": "consequat",
//				"price": 33.97,
//				"quantity": 7
//			}
//		]
//	},
//	{
//		"_id": "5733760f4d5f233b2ec757f7",
//		"joined": "2014-01-28T05:42:35 +08:00",
//		"name": "Jenna Paul",
//		"id": 2,
//		"city": "Keyport",
//		"orderTotal": 3865.79,
//		"orders": [
//			{
//				"id": 0,
//				"product": "dolor",
//				"price": 116.97,
//				"quantity": 4
//			},
//			{
//				"id": 1,
//				"product": "sunt",
//				"price": 12.86,
//				"quantity": 4
//			},
//			{
//				"id": 2,
//				"product": "ipsum",
//				"price": 198.39,
//				"quantity": 6
//			}
//		]
//	},
//	{
//		"_id": "5733760f10db0457e510bec3",
//		"joined": "2014-08-28T04:52:32 +07:00",
//		"name": "Reed Espinoza",
//		"id": 3,
//		"city": "Coultervillle",
//		"orderTotal": 1970.44,
//		"orders": [
//			{
//				"id": 0,
//				"product": "amet",
//				"price": 28.35,
//				"quantity": 7
//			},
//			{
//				"id": 1,
//				"product": "duis",
//				"price": 40.62,
//				"quantity": 8
//			},
//			{
//				"id": 2,
//				"product": "ex",
//				"price": 87.59,
//				"quantity": 1
//			}
//		]
//	},
//	{
//		"_id": "5733760f261f9563ec77e17e",
//		"joined": "2016-04-19T05:35:40 +07:00",
//		"name": "Mccullough Macdonald",
//		"id": 4,
//		"city": "Blodgett",
//		"orderTotal": 3522.4,
//		"orders": [
//			{
//				"id": 0,
//				"product": "pariatur",
//				"price": 49.56,
//				"quantity": 2
//			},
//			{
//				"id": 1,
//				"product": "velit",
//				"price": 44.5,
//				"quantity": 6
//			},
//			{
//				"id": 2,
//				"product": "labore",
//				"price": 114.05,
//				"quantity": 9
//			}
//		]
//	},
//	{
//		"_id": "5733760f77282c30b80eca25",
//		"joined": "2014-02-05T08:42:14 +08:00",
//		"name": "Liz Cruz",
//		"id": 5,
//		"city": "Wanamie",
//		"orderTotal": 3688.15,
//		"orders": [
//			{
//				"id": 0,
//				"product": "fugiat",
//				"price": 11.18,
//				"quantity": 1
//			},
//			{
//				"id": 1,
//				"product": "irure",
//				"price": 86.71,
//				"quantity": 7
//			},
//			{
//				"id": 2,
//				"product": "ex",
//				"price": 157.09,
//				"quantity": 5
//			}
//		]
//	}
//];