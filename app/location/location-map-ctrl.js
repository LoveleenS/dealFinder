(function(){
	"use strict";

	angular.module("myApp").controller('locationMapCtrl', ['$stateParams',locationMapCtrl]);

	function locationMapCtrl($stateParams){

		var vm = this;
		console.log("inside controller $stateParams"+$stateParams.id);
		vm.map={
			center:{
				latitude:-37.814009,
				longitude:144.964460
				},
			zoom:16
		};
		vm.marker={ 
			
				latitude:-37.814009,
				longitude:144.964460,
				idkey:"222",
			title:"tap for directions",
			showWindow:true
		};
    
		vm.locationClicked = function(marker){
			window.location = "geo:"+marker.latitude+","+marker.longitude+";u=35";
		};
	};

})();