(function(){
	"use strict";

	angular.module("myApp").controller('bagCtrl', ['$stateParams','$http',bagCtrl]);

	function bagCtrl($stateParams,$http){

		var vm = this;
		console.log("inside controller $stateParams"+$stateParams.id);

		var url = 'http://beta.ulikehairsalon.com.au/wp-json/';
		//$scope.message="hello search for bags";
		var status ='nothing';

		$http.get(url, {
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
		});
    
		
	};

})();