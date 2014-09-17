(function(){
	"use strict";

	angular.module("myApp").controller('homeCtrl', ['$stateParams','$state','$scope','getUserLocation',homeCtrl]);

	function homeCtrl($stateParams,$state,$scope,getUserLocation){

		var vm = this;
		//console.log("inside controller $stateParams"+$stateParams.id);

		//$scope.message="hello search for bags";
		//var user={};
		//$rootScope.user = "";
		//var status ='nothing';
		//var all = '0';
		//var locall;
		//$scope.user={};


		/*var location = {
"locations":
	[
		{"loc":"show all deals","zip":"9999"},
		{"loc":"melbourne cbd (3000)","zip":"3000"},
		{"loc":"Malvern (3144)","zip":"3144"}

	],
	"locall":"show deals everywhere"
};*/
		//$scope.user={"name":""};
		$scope.userData = getUserLocation.getUserData();
		//$scope.locations = location.locations;
		//$scope.user.name = $scope.userData.user.name;
		//$scope.mylocation = $scope.locations[0].zip;
		//$scope.user={"name":"","location":""};
	//$scope.submit = getUserLocation;
	$scope.submit = function(userData){

		//$scope.user =
		$scope.userData = userData;
		
		 getUserLocation.saveUserData(userData);
		 $state.go('app.show');
	};
	
		
		//$scope.user = $scope.submit;
		//getUserLocation = user;
		$scope.gotoNext = function(){

			//$scope.user = user;
			console.log('in gotonext');

			
			//redirectTo
		};

		//$scope.Newuser={};
		//$scope.locall ="Show deals everywhere";
		/*$http.get(url, {
		headers:{
				'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST',
                'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
                'X-Random-Shit':'123123123'
            }
		}).success(function(data){
		  //$scope.data = data;
          console.log('data is'+data);
		});*/
    
		
	};

})();