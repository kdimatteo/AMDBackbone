define([
	'backbone'
], function(
	Backbone
){
	'use strict';
	return Backbone.Collection.extend({

		initialize: function(){

		},
		
		url: function(){
			return 'http://frozen-citadel-9454.herokuapp.com/?rows=10&cols=4';
		}

	});
});