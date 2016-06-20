/**
 * Created by M6600 on 6/10/2016.
 */
var weatherApp = angular.module('weatherAppServices', []);

// services
weatherApp.service('weatherService', ['$http', '$q', function ($http, $q) {
	var apiString = '';
	var params = {};
	var self = {
		forecast: [],
		// fetch forecast data from openweathermap.org
		getWeather: function (city, days) {
			var deferred = $q.defer();
			if (!city) {
				apiString = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&cnt=5&appid=9d0b59c0451b5f24509a1b1a1e0ebdb2';
			} else {
				apiString = 'http://api.openweathermap.org/data/2.5/forecast/daily';
				params = {q: city, cnt: days, appid: '9d0b59c0451b5f24509a1b1a1e0ebdb2'};
			}
			$http({url: apiString, method: 'GET', params: params})
				.then(function (response) {
					self.forecast = response.data.list;
					deferred.resolve(response.data);
					console.log('ddd');
					console.log(response.data.list);
				}, function (error) {
					console.log(' ERROR : ' + error.content);
					deferred.reject(error)
				});
			return deferred.promise;
		}
	};
	return self;
}]);
