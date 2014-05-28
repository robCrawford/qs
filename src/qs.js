(function(window, namespace, undefined){

	(namespace || window).qs = {

		string: window.location.search,

		set: function(params){
		//Set querystring params
			this.changeTo(this.editParams(params));
		},

		get: function(toString, params){
		//Optional toString [bool] returns formatted string i.e. "?a=1&b=2"
		//Optional params [object] to merge into existing querystring
			var qsOb = this.editParams(params);
			return toString ? objectToQuerystring(qsOb) : qsOb;
		},

		remove: function(/* arguments */){
		//Remove querystring params
			var qsOb = this.toObject(),
				i = arguments.length;
			while(i--){
				delete qsOb[arguments[i]];
			}
			this.changeTo(qsOb);
		},

		toString: function(){
		//Returns current querystring string
			return this.string;
		},

		toObject: function(){
		//Compile querystring params to a JS object
			var retOb = {},
				params = this.string.substr(1).split('&').reverse(),
				i = params.length,
				p;

			while(i--){
				p = params[i];
				if(p){
					p = p.split('=');
					retOb[p[0]] = p[1] || "";
				}
			}
			return retOb;
		},

		editParams: function(params){
		//Returns a JS object with current params merged with any supplied params
			var qsOb = this.toObject() || {};
			for(var p in params){
				if(params.hasOwnProperty(p)){
					qsOb[p] = params[p] + ""; //Value is always a string
				}
			}
			return qsOb;
		},

		changeTo: function(params){
		//Change URL to a new querystring
			var newQS = objectToQuerystring(params);
			this.string = newQS;
			//Set .noGo for tests
			if(!this.noGo)window.location.search = newQS;
		}
	};

	/*
	  Utils
	*/
	function objectToQuerystring(ob){
	//Compile an object to querystring format
		var retStr = "",
			sep = "?";
		for(var p in ob){
			if(ob.hasOwnProperty(p)){
				retStr += sep + p + (ob[p]!==undefined && "=" + ob[p]);
				sep = "&";
			}
		}
		return retStr;
	}

})(window);
