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

		el: $("#page"),

		events : {
			//'click .someClass' : 'someFunction'
		},

		// someFunction: function(){ ... }

		initialize: function(){
			//
		},

		render: function(){
			this.$el.html("Hello World");
			return this;
		}

	});	
});