qs
==

*(No dependencies, 0.8kB minified)*  

Query string utilities  

```javascript

//Add or edit params
	qs.set( {a:2} );

//Get (as an object)
	qs.get();

//Get (as a string)
	qs.get(true);
	qs.toString();

//Get (as a string) with added/edited params
	qs.get( true, {a:1} );

//Get (as an object) with added/edited params
	qs.get( false, {a:1} );

//Remove params
	qs.remove("a", "b");

//Change to new parameters
	qs.changeTo( {a:1} );

```