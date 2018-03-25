class Node{
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

module.exports = {
	linked_list: function(root) {
		// write code to find the kth element from the end of a linked list
		// e.g 
		// input = 5, 8, 3, 7, 2, 1, 9, 10, 6
		// k = 4
		// output = 1
		throw "NotImplemented"
	},
	Node: Node,
	print_list: (root) => {
		let list = '';
		let ptr = root;
		while(ptr.next) {
			list = `${list}${ptr.next.value}->`;
			ptr = ptr.next;
		}
		return list;
	},
}