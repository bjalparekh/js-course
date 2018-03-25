const linked_list = require('../src/03.linked_list').linked_list;
const delete_node = require('../src/05.partition_linked_list').linked_list;
const Node = require('../src/03.linked_list').Node;

describe("Delete node Linked List", () => {
	it("Deletes the specified element", () => {
		const root = linked_list([5, 8, 7, 1, 4, 9, 3, 2, 6, 10]);
		const ok = delete_node(root.next.next.next.next); //deleting 1 from the list
		expect(ok).toBeTruthy();
		expect(root.next.next.next.next.value).toEqual('5->8->7->4->9->3->2->6->10');
	});
});
