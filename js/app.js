/**
 * The main entry/controller point for our application
 * This is is an AMD module that is wrapped in an immediate executing function
 * note syntax : define([path/to/module], function(ModuleName){})
 * ...this is fundamental to AMD acrhitectures
 */

(function(){
	'use strict';
	define([
		
		// load common files such as backbone and jQuery
		'backbone',
		'jquery',
		
		// load views/collections that we require
		'views/HomeView'

	], function(
		// loaded modules will be referenced as...
		Backbone,
		$,
		HomeView
	
	){
		return {
			start: function(){
				
				// For large applications it may be easier to manage Router as an external module instead of inline,
				// but we can begin with it here for simplicity
				var router = Backbone.Router.extend({

					/**
					 * define routes for your application using :params and/or *splats
					 * @see http://backbonejs.org/#Router
					 */
					routes: {
						'': 'homePage',
						':page' : 'homePage'
					},

					/**
					 * @route: '/'
					 * Display the home page 
					 */   
					homePage: function(){
						var myView = new HomeView();
						myView.render();						
					}

				});
				new router();
				
				// Start Backbone
				// Note that v1.0 does not gracefully degrade for browsers which do not support pushState
				// so we must set this value copnditionally. Could also be addressed with Modernizr
				Backbone.history.start({ pushState: ((history.pushState !== undefined) ? true : false), root: '/Templates/backbone-project/'});

			}
		}
	});
})();