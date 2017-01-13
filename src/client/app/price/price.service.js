angular
        .module('app.price')
        .service('PriceService', PriceService);

PriceService.$inject = ['$window'];

function PriceService($window) {
	var service = {
		calc: calc 
	};
	return service;

	function calc(cart) {
		angular.forEach(cart, function(c) {
			c.promoType = c.promoType ? c.promoType : '';
			if (c.count > 0 && c.promoType === 'bogo') {
				c.total = calcBogo(c);
			} else if (c.promoType === 'appl' && c.promoThreshold <= c.count) {
				c.total = calcAppl(c);
			} else {
				c.total = calcRegular(c);
			}
		});
    if(cart.MK1 && cart.CH1 && cart.CH1.promoType === "chmk"){
      var milkCount = cart.MK1.count - cart.CH1.count;
      if(cart.CH1.count > cart.CH1.promoThreshold){
        milkCount = cart.MK1.count - cart.CH1.promoThreshold;
      } else if (milkCount < 0){
        milkCount = 0;
      }
      cart.MK1.total = milkCount * cart.MK1.price;
    }
		return cart;
	}

	function calcBogo(c) {
		return (((c.count / 2) | 0) + c.count % 2) * c.price;
	}

	function calcAppl(c) {
		return c.count * c.promoPrice;
	}

	function calcRegular(c) {
		return c.count * c.price;
	}

}