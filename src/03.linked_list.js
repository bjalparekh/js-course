class Node{
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

module.exports = {
	linked_list: function(arr = []) {
		// write code to create a linked list
		// e.g 
		// input = [5, 8, 3, 7, 2, 1, 9, 10, 6]
		// k = 4
		// output = root pointing to the initial node
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