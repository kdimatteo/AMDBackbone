(function(){
	'use strict';
	define([
		'backbone',
		'jquery',
		'views/HomeView'
	], function(
		Backbone,
		$,
		HomeView
	){
		return {
			start: function(){
				
				var router = Backbone.Router.extend({

					routes: {
						'': 'homePage',
						':page' : 'homePage'
					},

					homePage: function(){
						var myView = new HomeView();
						myView.render();						
					}

				});

				new router();
				
				Backbone.history.start({ pushState: ((history.pushState !== undefined) ? true : false), root: '/Templates/backbone-project/'});

			}
		}
	});
})();