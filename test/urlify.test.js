const urlify = require('../src/02.urlify');

describe.only("urlify", () => {
	it("BijalParekh", ()=> {
		expect(urlify('BijalParekh')).toEqual('BijalParekh');
	})
	
	it("Bijal Bharath Kumar Parekh", ()=> {
		expect(urlify('Bijal Bharath Kumar Parekh')).toEqual('Bijal%20Bharath%20Kumar%20Parekh');
	})
	
	it("Bijal Parekh  ", ()=> {
		expect(urlify('Bijal Parekh  ')).toEqual('Bijal%20Parekh');
	})
	
	it("  Bijal Parekh", ()=> {
		expect(urlify('  Bijal Parekh')).toEqual('Bijal%20Parekh');
	})
})