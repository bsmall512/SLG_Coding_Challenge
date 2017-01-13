angular
        .module('app.cart')
        .service('CartService', CartService);

CartService.$inject = ['ProductsService', '$rootScope', 'PriceService'];

function CartService(ProductsService, $rootScope, PriceService) {
	var service = {
		add: add,
		remove: remove,
		set: set,
		clear: clear,
		data: {},
		get: get
	};
	return service;

	function add(code) {
		check(code);
		set(code, service.data[code].count + 1);
	}

	function remove(code) {
		check(code);
		set(code, service.data[code].count - 1);
	}

	function check(code) {
		if (!service.data[code]) {
			angular.forEach(ProductsService.get(), function(p) {
				if (p.code === code) {
					service.data[code] = p;
					service.data[code].count = 0;
					return;
				}
			});
		}
	}

	function set(code, value) {
		if (value > 9999) {
			service.data[code].count = 9999;
		} else if (value < 0) {
			service.data[code].count = 0;
		} else if (value === 0) {
			delete service.data[code];
		} else {
			service.data[code].count = value;
		}
		update();
	}

	function clear() {
		service.data = {};
		update();
	}

	function update() {
		service.data = PriceService.calc(service.data);
		$rootScope.$broadcast('update-cart');
	}

	function get() {
		return service.data;
	}
}