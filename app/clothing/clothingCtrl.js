(function(){
	"use strict";

	angular.module("myApp").controller('clothingCtrl', ['$stateParams','$http','$scope','getUserLocation',clothingCtrl]);

	function clothingCtrl($stateParams,$http,$scope,getUserLocation){

		var vm = this;
		//console.log("inside controller $stateParams"+$stateParams.id);

		//var url = 'http://beta.ulikehairsalon.com.au/wp-json/';
		//$scope.message="hello search for bags";
		//var url = '/app/data/allData.json';
		//var url="http://localhost:8100/app/data/allData.json";
		var url= "///android_asset/www/app/data/allData.json";
		//var url = 'http://api.openweathermap.org/data/2.5/weather?q=London';
		var status ='nothing';
		//var store,data = "";

		$scope.selectedZip = getUserLocation.getZipData();
		/*$scope.selLocationZip = function(selectedZip){

			{{selectedZip.user[1].selLocation}}

			var z = selectedZip.user[1].selLocation;
			//selectedZip.user[1].selLocation
			return z;
			
			//console.log()
		};*/
		//var zipp = getUserLocation.getUserData.userData.user[1].selLocation;
		//$scope.userinclothing = getUserLocation.sample;
		//zipp=$scope.userinclothing.user.mylocation;
		//console.log('in clothctrl'+zipp);
		/*$http.get(url,{
		headers:{
				'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST',
                'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
                'X-Random-Shit':'123123123'
            }
		}).success(function(data){
		  $scope.data = data;
          console.log('data is'+data);
		});*/

		$http.get(url,{
		headers:{
				'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST',
                'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
                'X-Random-Shit':'123123123'
            }
		}).success(function(data){
			$scope.data=data;
			$scope.store = '';
			console.log("weather data"+data);
			//console.log('data is '+data.mainCat.clothing[0].stores[0]);
		}).error(function(data){

			var data = {
	"mainCat":{"clothing":[
							{
							"id":"clothes",
							"name":"CLOTHES",
								"subId":"womenclothes",
								"subname":"CLOTHES-Women",
								"stores":
								[{		
									"storeId":"lily",
									"storeCat":"WM",
									"storeName":"Zulily",
									"offerDesc":"80% off on all woollens",
									"storeLocation":"106 Elizabeth St, Melbourne VIC 3000, Australia",
									"zip":"3000",
									"storeCordinates":{
										"coX":"-37.814009",
										"coY":"144.964460"
										}
								},{
									"storeId":"melbourneCentral",
									"storeCat":"UNI",
									"storeName":"Melbourne Central",
									"storeLocation":"CNR LATROBE & SWANSTON ST MELBOURNE VIC 3000",
									"zip":"3000",
									"storeCordinates":{
										"coX":"-37.814009",
										"coY":"144.964460"
										}
									},
									{"storeId":"Sussan",
									"storeCat":"WM",
									"storeName":"Sussan Central",
									"offerDesc":"10% off on latest summer dresses",
									"storeLocation":"Sussan 112 Glenferrie Rd Malvern VIC 3144",
									"zip":"3144",
									"storeCordinates":{
										"coX":"-37.861669",
										"coY":"145.028527"
									}
								}
								]}
				],
				"Furnishings":[
				{},{},{}
				],
				"Footwear":[
				],
				"Cosmetics":[
				],
				"Kitchenware":[
				]
			}



};
			$scope.data=data;
		});
    
		
	};

})();