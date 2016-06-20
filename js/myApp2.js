/**
 * Created by M6600 on 6/8/2016.
 */
var myApp = angular.module('myApp', [
	'ui.router',
	'ngResource',
	'ngAnimate',
	'weatherAppControllers',
	'weatherAppDirectives',
	'weatherAppServices',
	'demo2Factories',
	'demo2Controllers',
	'demo2Directives'
]);

myApp.value('appSettings',{
	title:'Customers Application demo2',
	version:'1.0'
});

myApp.config(function ($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {

	$urlMatcherFactoryProvider.caseInsensitive(false); // disable case sensitive for URL

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/views/homePage.html',
			controller: 'homePageController',
			data: {
				customData1: ' custom data 1',
				customData2: ' custom data 1'
			}
		})
		.state('angularjs', {
			url: '/angularjs',
			templateUrl: '/views/angularjs/main.html',
			controller: 'angularjsController'

		})
		.state('angularjs.demo1', {
			url: '/demo1',
			templateUrl: '/views/angularjs/demo1.html',
			controller: 'angularjsController'
		})
		.state('angularjs.demo1.ang1', {
			url: '/ang1',
			views: {
				'ang1': {
					template: '<h1>view1 -> ang1</h1>'
				},
				'ang11': {
					template:'<h1>view11 -> ang1-1 </h1>'
				}
			}
		})
		.state('angularjs.demo1.ang2', {
			url: '/ang2',
			views: {
				'ang2': {
					template: '<h1> ang2</h1>'
				}
			}
		})
		.state('angularjs.demo1.ang3', {
			url: '/ang3',
			views: {
				'ang3': {
					template: '<h1> ang3</h1>'
				}
			}
		})
		.state('angularjs.demo2', {
			url: '/demo2',
			templateUrl: '/views/angularjs/demo2.html',
			controller: 'angularjsController'
		})
		.state('angularjs.demo2.orders', {
			url: '/orders',
			templateUrl: '/views/angularjs/demo2AllOrders.html',
			controller: 'AllOrdersController as vm'
		})
		.state('angularjs.demo2.customers', {
			url: '/customer',
			templateUrl: '/views/angularjs/demo2Customers.html',
			controller: 'CustomersController as vm'
		})
		.state('angularjs.demo2.addCustomers', {
			url: '/customer',
			templateUrl: '/views/angularjs/demo2AddCustomers.html',
			controller: 'AddCustomersController as vm'
		})
		.state('angularjs.demo2.ordersWithId', {
			url: '/orders/:customerId',
			templateUrl: '/views/angularjs/demo2Orders.html',
			controller: 'OrdersController as vm'
		})
		.state('angularjs.demo3', {
			url: '/demo3',
			templateUrl: '/views/angularjs/demo3.html',
			controller: 'angularjsController'

		})
		.state('angularjs.weatherApp', {
			url: '/weatherApp',
			templateUrl: '/views/angularjs/weatherApp.html',
			controller: 'weatherAppController as vmWeather'
		})
		.state('bootstrap', {
			url: '/bootstrap',
			templateUrl: '/views/bootstrap/main.html',
			controller: 'bootstrapController'
		})
		.state('bootstrap.restaurant', {
			url: '/restaurant',
			templateUrl: '/views/bootstrap/restaurant.html'
		})
		.state('bootstrap.mobileFirst', {
			url: '/mobilefirst',
			templateUrl: '/views/bootstrap/mobileFirst.html'
		})
		.state('bootstrap.ecommerce', {
			url: '/ecommerce',
			templateUrl: '/views/bootstrap/ecommerce.html'
		})
		.state('ionic', {
			url: '/ionic',
			templateUrl: '/views/ionic/main.html',
			controller: 'ionicController'
		})
		.state('ionic.iNhaKhoa', {
			url: '/inhakhoa',
			templateUrl: '/views/ionic/iNhaKhoa.html'
		})
		.state('ionic.iStock', {
			url: '/istock',
			templateUrl: '/views/ionic/iStock.html'
		})
		.state('mvc', {
			url: '/mvc',
			templateUrl: '/views/mvc/main.html',
			controller: 'mvcController'
		})
		.state('mvc.dos', {
			url: '/dos',
			templateUrl: '/views/mvc/dos.html'
		})
		.state('bi', {
			url: '/bi',
			templateUrl: '/views/bi.html',
			controller: 'biController'
		})
		.state('jquery', {
			url: '/jquery',
			templateUrl: '/views/jquery.html',
			controller: 'biController'
		})
		.state('css3', {
			url: '/css3',
			templateUrl: '/views/css3.html',
			controller: 'biController'
		})
		.state('mean', {
			url: '/mean',
			templateUrl: '/views/mean.html',
			controller: 'biController'
		})
		.state('html5', {
			url: '/html5',
			templateUrl: '/views/html5.html',
			controller: 'biController'
		})
		.state('arts', {
			url: '/arts',
			templateUrl: '/views/arts.html',
			controller: 'artsController'
		});
	$urlRouterProvider.otherwise('/home');
})
;

// homePage controller
myApp.controller('homePageController',
	['$scope', '$location', '$state', function ($scope, $location, $state) {
		var vm = this;

		vm.reloadData = function () {
			$state.reload();
		};

		vm.goToState = function () {
			$state.go('abcd', {parameter1: vm.name});
		};

		this.homeCustomData1 = $state.current.data.customData1; //first way to get custom data
		//this.homeCustomData2 = $state.get('home').data.customData2; //first way to get custom data
		console.log(' home controller');
	}]);

// angularjs controller
myApp.controller('angularjsController',
	['$scope', '$location', '$state', function ($scope, $location, $state) {

		console.log(' angularjs controller');
	}]);

// bootstrap controller
myApp.controller('bootstrapController',
	['$scope', '$location', '$state', function ($scope, $location, $state) {

		console.log(' bootstrap controller');
	}]);

// ionic controller
myApp.controller('ionicController',
	['$scope', '$location', '$state', function ($scope, $location, $state) {

		console.log(' ionic controller');
	}]);

// bi controller
myApp.controller('biController',
	['$scope', '$location', '$state', function ($scope, $location, $state) {

		console.log(' bi controller');
	}]);

// mvc controller
myApp.controller('mvcController',
	['$scope', '$location', '$state', function ($scope, $location, $state) {

		console.log(' mvc controller');
	}]);

// arts controller
myApp.controller('artsController',
	['$scope', '$location', '$state', function ($scope, $location, $state) {

		console.log(' arts controller');
	}]);