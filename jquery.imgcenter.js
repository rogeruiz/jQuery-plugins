(function($){
	
	// private methods
	var _getImgs = function(context){
		if (window.console) { console.log('inside _getImgs([context])'); }
	};
	var _getPos = function(){};
	var _setPos = function(){};
	var _resizeCheck = function(){};
		
	// public methods
	var methods = {
		init: function(options){
			
			if (this.hasInitialized){ return; }

			this.settings = $.extend({
				dimensionData: {
					imgWidth: '0px',
					imgHeight: '0px',
					maskWidth: '0px',
					maskHeight: '0px'
				},
				onBefore: $.noop,
				onAfter: $.noop
			}, options);
			
			this.hasInitialized = true;
		},
		beforeSet: function(cb){},
		afterSet: function(cb){}
	}
	
	$.fn.imgCenter = function(method){
	
		if (methods[method]){
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method){
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist in jQuery.imgCenter');
		}
	
	};	
	
})(jQuery);