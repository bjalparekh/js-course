const linked_list = require('../src/03.linked_list').linked_list;
const Node = require('../src/03.linked_list').Node;

describe("Linked List", () => {
	it("Creates a linked list from array", () => {
		const root = linked_list([5, 8, 3, 7, 2, 1, 9, 6, 10])
		expect(linked_list(root.next.value)).toEqual(5);
		expect(linked_list(root.next.next.value)).toEqual(8);
		expect(linked_list(root.next.next.next.value)).toEqual(3);
		expect(linked_list(root.next.next.next.next.value)).toEqual(7);
		expect(linked_list(root.next.next.next.next.next.value)).toEqual(2);
		expect(linked_list(root.next.next.next.next.next.next.value)).toEqual(1);
		expect(linked_list(root.next.next.next.next.next.next.next.value)).toEqual(9);
		expect(linked_list(root.next.next.next.next.next.next.next.next.value)).toEqual(6);
		expect(linked_list(root.next.next.next.next.next.next.next.next.next.value)).toEqual(10);
		expect(linked_list(root.next.next.next.next.next.next.next.next.next.next)).toEqual(null);
	});
});
