angular.module("app.core").run(["$templateCache", function($templateCache) {$templateCache.put("app/cart/cart.html","<div class=cart-container><div class=cart><div class=title>Cart</div><ul class=items><li ng-if=\"count === 0\" class=empty>Your Cart Is Empty.</li><li class=item ng-repeat=\"product in data\"><div class=remove ng-click=\"set(product.code, 0)\"></div><span class=item_name>{{product.code}} - {{product.name}}</span> <span class=item_price>{{product.total | currency:\"$\"}}</span> <input type=number ng-model=product.count ng-change=\"set(product.code, product.count)\"></li></ul><div ng-if=\"count !== 0\" class=total><div class=amount ng-class=\"{large: total > 999, larger: total > 9999}\" ng-maxlength=4>{{total | currency:\"$\"}}</div></div></div></div>");
$templateCache.put("app/products/products.html","<div class=products-container><div class=products><h1>Available Products</h1><ul class=items><li class=item ng-repeat=\"product in products\"><div class=btn-add ng-click=add(product.code)><div class=plus></div></div><div class=info-container><h2 class=item_name>{{product.code}} - {{product.name}}</h2><h2 class=item_price>{{product.price | currency:\"$\"}}</h2><div class=info>{{product.promoDescription}}</div></div></li></ul><div class=reset ng-click=clear()>R e s e t &nbsp;&nbsp;C a r t</div></div></div>");}]);