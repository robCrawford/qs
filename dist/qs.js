/*! qs.js - v0.1.0 - 2014-06-04
* Copyright (c) 2014 Rob Crawford; Licensed MIT */
(function(window, namespace, undefined){

	(namespace || window).qs = {

		string: window.location.search,

		set: function(params){
		//Set query string params
			this.changeTo(this.merge(params));
		},

		get: function(params){
		//Returns query string as an object
		//Optional params [object] to merge into existing
			return this.toObject(params);
		},

		remove: function(/* arguments */){
		//Remove query string params
			var qsOb = this.toObject(),
				i = arguments.length;
			while(i--){
				delete qsOb[arguments[i]];
			}
			this.changeTo(qsOb);
		},

		toString: function(params){
		//Returns current query string as a string
		//Optional params [object] to merge into existing
			return params ? objectToQuerystring(this.merge(params)) : this.string;
		},

		toObject: function(params){
		//Compile query string params to a JS object
		//Optional params [object] to merge in
			var retOb = {},
				currParams = this.string.substr(1).split('&').reverse(),
				i = currParams.length,
				p;

			while(i--){
				p = currParams[i];
				if(p){
					p = p.split('=');
					retOb[p[0]] = p[1] || "";
				}
			}

			//Merge in params
			for(p in params){
				if(params.hasOwnProperty(p)){
					retOb[p] = params[p] + ""; //Value is always a string
				}
			}

			return retOb;
		},

		merge: function(params){
		//Returns current params merged with any supplied params
			return this.toObject(params);
		},

		changeTo: function(params){
		//Change URL to a new query string
		//params can be an object or a string i.e. "a=1&b=2"
			if(typeof params === "string"){
				if(params.indexOf('?')!==0)params = "?"+params;
			}
			else{
				params = objectToQuerystring(params);
			}
			this.string = params;

			//Set .noGo for testing
			if(!this.noGo){
				window.location.search = params;
			}
		}
	};

	/*
	  Utils
	*/
	function objectToQuerystring(ob){
	//Compile an object to query string format
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
