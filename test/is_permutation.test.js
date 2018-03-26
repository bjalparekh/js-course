const expect = require('expect');
const is_permutation = require('../src/01.is_permutations');

describe("is_permutation", () => {
	it("a: abcde ; b: ecdba are permutations", ()=> {
		expect(is_permutation('abcde', 'ecdba')).toBeTruthy();
	});
	
	it("a: abcaccde ; b: ecacdba are not permutations", ()=> {
		expect(is_permutation('abcaccde', 'ecacdba')).toBeFalsy();
	});
})