/**
 * An example Backbone view configured for an AMD app.
 * note the syntax : define([path/to/module], function(ModuleName){})
 */

define([
	'backbone',
	'underscore',
	'jquery'
], function(
	Backbone,
	_,
	$
){
	'use strict';
	return Backbone.View.extend({

		/**
		 * Each view has "page context" define by its "el"
		 */
		el: $("#container"),

		/**
		 * Example of how to handle clicks
		 */
		events : {
			//'click .some-class' : 'someFunction'
		},

		/**
		 * Example click handler
		 */
		// someFunction: function(){ ... }

		initialize: function(){
			// Additional event binding may be defined in this method 
		},

		/** 
		 * Usually bound to a model/collection event
		 */
		render: function(){
			this.$el.html("Hello World");
			return this;
		}

	});
});