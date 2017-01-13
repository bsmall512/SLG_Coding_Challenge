angular
        .module('app.cart')
        .directive('cart', cart);

cart.$inject = ['CartService', '$timeout'];

function cart(CartService, $timeout) {
	var directive = {
		controllerAs: 'vm',
		bindToController: true,
		replace: true,
		templateUrl: 'app/cart/cart.html',
		link: linkFunction
	};
	return directive;

	function linkFunction(scope, el, attr, ctrl) {
		var vm = scope;
		vm.data = {};
		vm.total = 0;
		vm.lastUpdate = 0;

		vm.update = function() {
			vm.data = CartService.get();
			vm.count = Object.keys(vm.data).length;
			vm.total = 0;
			angular.forEach(vm.data, function(d) {
				vm.total = vm.total + d.total;
			});
		}

		vm.update();
		vm.set = function(code, value) {
			CartService.set(code, value);
		}

		vm.remove = function(code) {
			vm.set(code, 0);
		}

		vm.$on('update-cart', function(event, args) {
			vm.update();
		});
	}
}