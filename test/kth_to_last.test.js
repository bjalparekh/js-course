const kth_to_last = require('../src/04.kth_to_last').kth_to_last;
const Node = require('../src/04.kth_to_last').Node;

function create_list(list = []) {
	let root = new Node(null);
	list.reduce((ll, e) => {
		let node = new Node(e);
		ll.next = node;
		return ll.next;
	}, root);
	return root;
}

describe("Kth to last", () => {
	it("4 th element success", () => {
		const root = create_list([5, 8, 3, 7, 2, 1, 9, 6, 10])
		expect(kth_to_last(root)).toEqual(1);
	});

	it("4 th element for empty list", () => {
		const root = create_list([])
		expect(kth_to_last(root)).toEqual(null);
	});

	it("4 th element, for a shorter list", () => {
		const root = create_list([5, 8, 3])
		expect(kth_to_last(root)).toEqual(null);
	});
});
