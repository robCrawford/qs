qs
==

Query string utilities  
*(No dependencies, 0.8kB minified)*  

```javascript

//Get query string as an object
	qs.get(); 
	//OR
	qs.toObject();

//Get edited query string as an object
//(Supplied params are merged in)
	qs.get( {a:1} ); 
	//OR
	qs.toObject( {a:1} );

//Get query string as a string
	qs.string; 
	//OR
	qs.toString();

//Get edited query string as a string
//(Supplied params are merged in)
	qs.toString( {a:1} );

//Add or edit params
//This will navigate to a new URL
	qs.set( {a:2} );

//Remove params
//This will navigate to a new URL
	qs.remove( "a", "b" );

//Change to new parameters
//This will navigate to a new URL
	qs.changeTo( {a:1, b:2} ); 
	//OR
	qs.changeTo( "a=1&b=2" ); 
	//OR
	qs.changeTo( "?a=1&b=2" );

```