/**
 * The main application js calls require() and starts up out app.
 * It's unlikely that you'll initialize additional code here.
 */
;(function(require){
	'use strict';
	require(['app'], function(app){
		app.start()
	});
})(require);
