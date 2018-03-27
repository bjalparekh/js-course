const expect = require('expect');
const is_permutation = require('../src/01.is_permutations');

describe("is_permutation", () => {
	it("a: toto is palindrome permutation", ()=> {
		expect(is_permutation('toto')).toBeTruthy();
	});
	
	it("a: tactcoa is a palindrome permutation", ()=> {
		expect(is_permutation('tactcoa')).toBeFalsy();
	});
	
	it("a: bijal is not a palindrome permutation", ()=> {
		expect(is_permutation('bijal')).toBeFalsy();
	});
})