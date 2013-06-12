/**
 *
 */

var require = {

	// We depend on main.js
	deps : ['main'],
	
	// Define paths as these are not in the base JS directory and some will need to be shimed
	// Note that we use lodash instead of the inferior underscore
	paths: {
		jquery: 	'vendor/jquery-2.0.2',
		underscore: 'vendor/lodash-1.3.0',
        backbone:   'vendor/backbone',
	},

	shim: {
		backbone: {
            // These script dependencies should be loaded before loading backbone.js
            deps: ['underscore', 'jquery'],
            // Once loaded, use the global 'Backbone' as the module value.
            exports: 'Backbone'
        },
        underscore: {
        	// Once loaded, use the global '_' as the module value.
            exports: '_'
        },
	}

};
