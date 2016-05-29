(function() {
	"use strict";
	angular.module("app").config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');

		$stateProvider
		.state("home", {
			url:"/home",
			views:{
				'main': {
					templateUrl: "views/home.html"
				}
			}

		});
		
	});
})();