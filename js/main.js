/**
 * The main application js calls require() and starts up out app.
 * It's unlikely that you'll initialize additional code here.
 */
;(function(require){
	'use strict';
	require(['app/app'], function(App){
		App.start();
	});
})(require);
