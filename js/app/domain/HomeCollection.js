define([
	'backbone'

], function (
	Backbone
){
	'use strict';
	return Backbone.Collection.extend({

		initialize: function(){
			// notthing to see here
		},

		url: function(){
			return 'http://frozen-citadel-9454.herokuapp.com/?rows=10&cols=4';
		}

	});
});