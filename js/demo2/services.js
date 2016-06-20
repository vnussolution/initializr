/**
 * Created by M6600 on 6/10/2016.
 */
var angularDemo2 = angular.module('demo2Factories', []);

// factories
angularDemo2.factory('customersFactory', ['$http', '$q', function ($http, $q) {
	var factory = {};
	factory.getCustomers = function () {
		var deferred = $q.defer();
		$http.get('http://142.129.69.110:63341/customers')
			.then(function (response) {
				deferred.resolve(response);
			}, function (error) {
				console.log(error);
				deferred.reject(error);
			});
		return deferred.promise;
	};
	factory.getCustomer = function (customerId) {
		var deferred = $q.defer();
		$http.get('http://142.129.69.110:63341/customers/' + customerId)
			.then(function (response) {
				deferred.resolve(response.data);
				console.log(response);
			}, function (error) {
				console.log(error);
				deferred.reject(error);
			});
		return deferred.promise;

	};
	factory.getOrders = function () {
		var deferred = $q.defer();
		$http.get('http://142.129.69.110:63341/orders')
			.then(function (response) {
				deferred.resolve(response);
			}, function (error) {
				console.log(error);
				deferred.reject(error);
			});
		return deferred.promise;
	};
	factory.deleteCustomer = function (customerId) {
		var deferred = $q.defer();
		$http.delete('http://142.129.69.110:63341/customers/' + customerId)
			.then(function (response) {
				deferred.resolve(response);
			}, function (error) {
				console.log(error);
				deferred.reject(error);
			});
		return deferred.promise;
	};
	return factory;
}]);
