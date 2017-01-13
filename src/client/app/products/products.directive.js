angular
        .module('app.products')
        .directive('products', products);

products.$inject = ['CartService', 'ProductsService'];

function products(CartService, ProductsService) {
	var directive = {
		controllerAs: 'vm',
		bindToController: true,
		replace: true,
		templateUrl: 'app/products/products.html',
		link: linkFunction
	};
	return directive;

	function linkFunction(scope, el, attr, ctrl) {
		var vm = scope;
		vm.products = ProductsService.get();

		vm.add = function(code) {
			CartService.add(code);
		}
		vm.clear = function(code) {
			CartService.clear(code);
		}
	}
}