angular.module("myApp",["ionic","google-maps"])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider,$httpProvider){

	//$httpProvider.defaults.useXDomain = true;
      //  delete $httpProvider.defaults.headers.common['X-Requested-With'];

$httpProvider.defaults.useXDomain = true;
delete $httpProvider.defaults.headers.common['X-Requested-With'];

$httpProvider.defaults.useXDomain = true;
//$httpProvider.defaults.withCredentials = true;
delete $httpProvider.defaults.headers.common["X-Requested-With"];
$httpProvider.defaults.headers.common["Accept"] = "application/json";
$httpProvider.defaults.headers.common["Content-Type"] = "application/json";

	$stateProvider
	.state('home',{
		url:"/home",
		controller:"homeCtrl",
		templateUrl:"app/layout/home.html"
	})
	.state('app',{
		url:"/app",
		controller:"homeCtrl",
		templateUrl:"app/layout/menu-layout.html"
	})
	.state('app.show',{

		url:"/show",
		controller:"homeCtrl",
		views:{

		"home-tab":{templateUrl:"app/home/shop.html"}
	}
	})
	.state('app.clothing',{
		url:"/clothing",
		views:{
			"home-tab":{
				controller:"clothingCtrl",
				templateUrl:"app/home/shopClothing.html"
			}
		}
	})
	.state('app.women',{
		url:"/clothing/women",
		views:{
			"home-tab":{
				templateUrl:"app/clothing/women.html"
			}
		}
	})
	.state('app.location-map',{
		url:"/location-map/:id",
		views:{
			"home-tab":{
				templateUrl:"app/location/location-map.html"
			}
		}
	})
	.state('app.accsry',{
		url:"/accessory",
		views:{
			"mainContent":{
				templateUrl:"app/accsry/accessory.html"
			}
		}
	})
	.state('app.bags',{
		url:"/accessory/bags/:id",
		views:{
			"mainContent":{
				templateUrl:"app/accsry/bags.html"
			}
		}
	})
	.state('home.shop',{
		url:"/shop",
		views:{
			"tab-shop":{
				templateUrl:"app/home/shop.html"
			}
		}
	})
	.state('home.about',{
		url:"/about",
		views:{
			"tab-about":{
				templateUrl:"app/home/about.html"
			}
		}
	});
	
	$urlRouterProvider.otherwise('/home');
});