module.exports = function is_permutation(a, b) {
	// check if two strings are permutations of each other
	const c = a.split("").sort().join(''),
	d = b.split("").sort().join('');
	return c === d;

	throw "NotImplemented";
}