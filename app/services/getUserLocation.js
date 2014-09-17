	"use strict";

	angular.module("myApp").factory("getUserLocation", [

	 function getUserLocation(user){

var storedUser = {"user":[
						{"name":""},{"selLocation":"everywhere"}
						],

				"locations":
	[
		{"loc":"show all deals","zip":"9999"},
		{"loc":"melbourne cbd (3000)","zip":"3000"},
		{"loc":"Malvern (3144)","zip":"3144"}

	],
	"locall":"show deals everywhere"
	};
	 	//var store = JSON.parse
	 	//var user = user;

	 	//var lo = user;
	 	return{

	 		getUserData:function(){
	 			var user = storedUser;
	 			return user;
	 		},
	 		saveUserData: function(user){
			storedUser = user;
	 			return storedUser;
	 		},
	 		getZipData:function(){
	 			var zip = storedUser.user[1].selLocation;
	 			return zip;
	 		}

	 	}

	 		
		
	}]);