/**
 * Created by M6600 on 6/9/2016.
 */
var weatherApp = angular.module('weatherAppControllers', []);

//controllers area
weatherApp.controller('weatherAppController',
	['$scope', 'weatherService', '$http', function ($scope, weatherService, $http) {
		var vm = this;
		vm.days = 5; //default is 5


		// fetch forecast data from service
		vm.getForecast = function (city, days) {
			weatherService.getWeather(city, days)
				.then(function (data) {
					vm.forecast = data;
					console.log(vm.forecast);
				}, function (error) {
					console.log(error);
				});

			vm.days = days;
		};

		function init() {
			vm.getForecast(vm.city, vm.days);
		}

		//convert to Fah
		vm.convertToFahrenheit = function (degK) {
			return Math.round((1.8 * (degK - 273)) + 32);
		};

		init();
	}]);