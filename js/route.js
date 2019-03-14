app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/home.html'
	}).when('/home', {
		templateUrl: 'views/home.html'
	}).when('/product', {
		templateUrl: 'views/product.html',
	}).when('/productDetails', {
		templateUrl: 'views/product-details.html',
	});
});