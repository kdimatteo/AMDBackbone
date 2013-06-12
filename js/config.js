/**
 *
 */

//requirejs.config({
var require = {

	// we depend on main.js
	deps : ['main'],

	//baseURL : '',
	
	paths: {
		jquery: 	'vendor/jquery-2.0.2',
		underscore: 'vendor/lodash-1.3.0',
        backbone:   'vendor/backbone',
	},

	shim: {
		backbone: {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
	}

};
