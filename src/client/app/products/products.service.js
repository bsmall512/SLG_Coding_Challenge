angular
        .module('app.products')
        .service('ProductsService', ProductsService);

ProductsService.$inject = [];

function ProductsService() {
	var service = {
		get: get
	};
	return service;

	function get() {
		return [{
			"code" : "AP1",
			"name": "Apple",
			"price": 5,
			"promoType": "appl",
			"promoDescription": "Only $4.50 when buying 3 or more!",
			"promoThreshold": 3,
			"promoPrice": 4.5
		},
		{
      "code" : "CF1",
      "name" : "Coffee",
      "price": 11.23,
			"promoType": "bogo",
			"promoDescription": "BOGO - Buy One Get One Free!"
		},
		{
			"code" : "CH1",
			"name" : "Chai",
			"price": 3.11,
			"promoType": "chmk",
			"promoDescription": "Purchase a box of Chai and get milk free. (Limit 1)",
      "promoThreshold": 1
		},
		{
			"code" : "MK1",
			"name" : "Milk",
			"price": 4.75,
		}];
	}
}