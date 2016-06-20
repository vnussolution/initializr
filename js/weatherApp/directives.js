/**
 * Created by M6600 on 6/10/2016.
 */
var weatherApp = angular.module('weatherAppDirectives', []);

// services
weatherApp.directive('weatherPanel', [ function () {
	return {
		restrict:'EA',
		replace:true,
		templateUrl:'./views/angularjs/weatherDirective.html',
		scope: {
			weatherObject:'=',
			convertToStandard:'&'
		},
		transclude:true,
		link: function (scope, elements, attrs) {
			//console.log('WeatherApp directive Post-linking...');
		}
	}
}]);
