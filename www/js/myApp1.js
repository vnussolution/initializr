///**
// * Created by M6600 on 6/8/2016.
// */
//var myApp = angular.module('myApp', ['ui.router']);
//
//myApp.config(function ($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
//
//	$urlMatcherFactoryProvider.caseInsensitive(false); // disable case sensitive for URL
//
//	$urlRouterProvider.otherwise('/home');
//
//	$stateProvider
//		.state('home', {
//			url: '/home',
//			templateUrl: '/views/homePage.html',
//			controller: 'homePageController',
//			data: {
//				customData1: ' custom data 1',
//				customData2: ' custom data 1'
//			}
//		})
//		.state('angularjs',{
//			url:'/angularjs',
//			templateUrl:'/views/angularjs/main.html',
//			controller: 'angularjsController'
//
//		})
//		.state('angularjs.demo1', {
//			url: '/demo1',
//			views: {
//				'demo1': {
//					templateUrl: '/views/angularjs/demo1.html',
//					controller: 'angularjsController'
//				}
//			}
//
//		})
//		.state('angularjs.demo1.ang1', {
//			url: '/ang1',
//			views: {
//				'ang1': {
//					template: '<h1> ang1</h1>'
//				}
//			}
//
//		})
//		.state('angularjs.demo1.ang2', {
//			url: '/ang2',
//			views: {
//				'ang2': {
//					template: '<h1> ang2</h1>'
//				}
//			}
//
//		})
//		.state('angularjs.demo1.ang3', {
//			url: '/ang3',
//			views: {
//				'ang3': {
//					template: '<h1> ang3</h1>'
//				}
//			}
//
//		})
//
//		.state('angularjs.demo2', {
//			url: '/demo2',
//			views: {
//				'demo2': {
//					templateUrl: '/views/angularjs/demo2.html',
//					controller: 'angularjsController'
//				}
//			}
//
//		})
//		.state('angularjs.demo3', {
//			url: '/demo3',
//			views: {
//				'demo3': {
//					templateUrl: '/views/angularjs/demo3.html',
//					controller: 'angularjsController'
//				}
//			}
//
//		})
//		.state('bootstrap', {
//			url: '/bootstrap',
//			templateUrl: '/views/bootstrap.html',
//			controller: 'bootstrapController'
//		})
//		.state('ionic', {
//			url: '/ionic',
//			templateUrl: '/views/ionic.html',
//			controller: 'ionicController'
//		})
//		.state('mvc', {
//			url: '/mvc',
//			templateUrl: '/views/mvc.html',
//			controller: 'mvcController'
//		})
//		.state('bi', {
//			url: '/bi',
//			templateUrl: '/views/bi.html',
//			controller: 'biController'
//		})
//		.state('arts', {
//			url: '/arts',
//			templateUrl: '/views/arts.html',
//			controller: 'artsController'
//		});
//});
//
//// homePage controller
//myApp.controller('homePageController',
//	['$scope', '$location', '$state', function ($scope, $location, $state) {
//		var vm = this;
//
//		vm.reloadData = function () {
//			$state.reload();
//		};
//
//		vm.goToState = function () {
//			$state.go('abcd', {parameter1: vm.name});
//		};
//
//		this.homeCustomData1 = $state.current.data.customData1; //first way to get custom data
//		this.homeCustomData2 = $state.get('home').data.customData2; //first way to get custom data
//
//		console.log(' home controller');
//
//	}]);
//
//// angularjs controller
//myApp.controller('angularjsController',
//	['$scope', '$location', '$state', function ($scope, $location, $state) {
//
//		console.log(' angularjs controller');
//	}]);
//
//// bootstrap controller
//myApp.controller('bootstrapController',
//	['$scope', '$location', '$state', function ($scope, $location, $state) {
//
//		console.log(' bootstrap controller');
//	}]);
//
//// ionic controller
//myApp.controller('ionicController',
//	['$scope', '$location', '$state', function ($scope, $location, $state) {
//
//		console.log(' ionic controller');
//	}]);
//
//// bi controller
//myApp.controller('biController',
//	['$scope', '$location', '$state', function ($scope, $location, $state) {
//
//		console.log(' bi controller');
//	}]);
//
//// mvc controller
//myApp.controller('mvcController',
//	['$scope', '$location', '$state', function ($scope, $location, $state) {
//
//		console.log(' mvc controller');
//	}]);
//
//// arts controller
//myApp.controller('artsController',
//	['$scope', '$location', '$state', function ($scope, $location, $state) {
//
//		console.log(' arts controller');
//	}]);