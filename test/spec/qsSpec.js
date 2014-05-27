describe("Querystring tests", function(){

	//Set initial params
	if(!qs.string){
		qs.set({a:1, b:2});
	}
	//Flag to suppress any further URL changes
	qs.noGo = true;


	it("Should set and read params", function(){

		spyOn(qs, "changeTo").and.callThrough(); //Won't change URL because of noGo flag above

		qs.set({a:9, o:0});

		expect(qs.string).toBe("?a=9&b=2&o=0");

		expect(qs.toString()).toEqual("?a=9&b=2&o=0");

		expect(qs.toObject()).toEqual({a:'9', b:'2', o:'0'});
	
	});

});