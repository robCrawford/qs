describe("Querystring tests", function(){

	//Set initial params
	if(!qs.string){
		qs.set({a:1, b:2});
	}
	//Flag to suppress any further URL changes
	qs.noGo = true;


	it("Should set and read params", function(){

		expect(qs.string).toBe("?a=1&b=2");

		expect(qs.get()).toEqual({a:'1', b:'2'});

		qs.set({a:9, o:0});

		expect(qs.string).toBe("?a=9&b=2&o=0");

		expect(qs.toString()).toEqual("?a=9&b=2&o=0");

		expect(qs.toObject()).toEqual({a:'9', b:'2', o:'0'});

		expect(qs.get()).toEqual({a:'9', b:'2', o:'0'});
	
	});

	it("Should remove and read params", function(){
		
		qs.remove("a", "b");

		expect(qs.toString()).toBe("?o=0");

		expect(qs.toObject()).toEqual({o:'0'});

	});

	it("Should merge in params", function(){
		
		var tempQS = qs.get({z:77});

		expect(tempQS).toEqual({
			o: '0', z: '77'
		});

		tempQS = qs.toObject({z:88});

		expect(tempQS).toEqual({
			o: '0', z: '88'
		});
		
		tempQS = qs.toString({z:99});

		expect(tempQS).toEqual('?o=0&z=99');

	});

	it("Should change querystring", function(){
		
		//Object
		qs.changeTo({w:5, x:7});

		expect(qs.toObject()).toEqual({w:'5', x:'7'});

		expect(qs.toString()).toEqual("?w=5&x=7");

		//String, no question mark
		qs.changeTo("h=9&i=10");

		expect(qs.get()).toEqual({h:'9', i:'10'});

		//String with question mark
		qs.changeTo("?j=9&k=10");
		
		expect(qs.get()).toEqual({j:'9', k:'10'});

	});

});