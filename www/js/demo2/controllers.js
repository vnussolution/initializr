/**
 * Created by M6600 on 6/9/2016.
 */
var angularDemo2 = angular.module('demo2Controllers', []);

//controllers area
angularDemo2.controller('OrdersController', ['$stateParams', 'customersFactory',
	function ($stateParams, customersFactory) {
		var vm = this;
		var customerId = $stateParams.customerId;
		//vm.customer;
		customersFactory.getCustomer(customerId)
			.then(function (customer) {
				vm.customer = customer;
				vm.total = total();
			}, function (error) {
				console.log('OrdersController ERROR: ', error);
			});

		function total() {
			var total = 0;
			var orders = vm.customer.orders;
			for (var i = 0; i < orders.length; i++) {
				total += vm.customer.orders[i].price * vm.customer.orders[i].quantity;
			}
			return total;
		}
	}]);

angularDemo2.controller('AllOrdersController', ['customersFactory',
	function (customersFactory) {
		var vm = this;
		//vm.order = null;
		vm.orderTotal = 0.0;
		vm.totalType = '';
		function init() {
			customersFactory.getOrders().then(function (orders) {
				vm.orders = orders.data;
				vm.getOrdersTotal('');
			}, function (error) {
				console.log(error);
			})
		}

		vm.getOrdersTotal = function (product) {
			var total = 0;

			for (var i = 0, len = vm.orders.length; i < len; i++) {
				//if((vm.orders.product).toLowerCase().indexOf(product) >=0){
				if ((vm.orders[i].product).indexOf(product) >= 0) {
					console.log('11');
					total += vm.orders[i].price * vm.orders[i].quantity;
				}
			}
			vm.ordersTotal = total;
			vm.totalType = (vm.ordersTotal > 1000) ? 'success' : 'danger';
		};
		init();
	}]);

angularDemo2.controller('CustomersController', ['appSettings', 'customersFactory', '$state',
	function (appSettings, customersFactory, $state) {
		var vm = this;
		vm.sortBy = 'name';
		vm.reverse = 'false';
		vm.customers = [];
		vm.appSettings = appSettings;

		function init() {
			customersFactory.getCustomers().then(function (customers) {
				vm.customers = customers.data;
				console.log(customers);
			}, function (error) {
				console.log(error);
			})
		}

		init();

		vm.add = function () {
			$state.go('angularjs.demo2.addCustomers');
		};

		vm.doSort = function (propName) {
			vm.sortBy = propName;
			vm.reverse = !vm.reverse;
		};

		vm.deleteCustomer = function (customerId) {
			customersFactory.deleteCustomer(customerId).then(function (status) {
				if (status) {
					for (var i = 0, len = vm.customers.length; i < len; i++) {
						if (vm.customers[i].id === customerId) {
							vm.customers.splice(i, 1);
							break;
						}
					}
				}
				else {
					$window.alert('unable to delete customer');
				}
			}, function (error) {
				console.log(error);
			})
		}
	}]);


angularDemo2.controller('AddCustomersController', ['$timeout', 'appSettings', 'customersFactory', '$state',
	function ($timeout, appSettings, customersFactory, $state) {
		var vm = this;
		vm.customers = [];
		vm.appSettings = appSettings;


		function init() {
			customersFactory.getCustomers().then(function (customers) {
				vm.customers = customers.data;
				console.log(customers);
			}, function (error) {
				console.log(error);
			})
		}

		init();

		vm.submitForm = function (form) {
			console.log(vm.user);
			// check to make sure the form is completely valid
			if (form.$valid) {
				$timeout(function () {
					$state.go('angularjs.demo2.customers');
				}, 2000);

			}

		};

		vm.deleteCustomer = function (customerId) {
			customersFactory.deleteCustomer(customerId).then(function (status) {
				if (status) {
					for (var i = 0, len = vm.customers.length; i < len; i++) {
						if (vm.customers[i].id === customerId) {
							vm.customers.splice(i, 1);
							break;
						}
					}
				}
				else {
					$window.alert('unable to delete customer');
				}
			}, function (error) {
				console.log(error);
			})
		}
	}]);