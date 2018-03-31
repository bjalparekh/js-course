module.exports = function urlify(str) {
	return str.trimmer().replaced(' ', '%20');
	throw "NotImplemented"
}


String.prototype.replaced = function(a, b) {
	const subStr = new String(a);
	let str = this
	for(let i =0;i<str.length;i++) {
		for(let k = 0; k<subStr.length; k++) {
			if(str[i] === subStr[k]) {
				if(str.substr(i, subStr.length) === a) {
          let newStr = str.substr(0, i);
					str = newStr.concat(b).concat(str.substr(i+subStr.length));
				}
			}
		}
	}

  return str
}

String.prototype.trimmer = function() {
	let _self = this;
	for(let i=0;i<_self.length;i++) {
		if(_self[i] !== " ") {
			_self = _self.substr(i)
			break;
		}
	}
  console.log(_self.length)
  for(let i=_self.length-1;i>-1;i--) {
    if(_self[i] !== ' ') {
      return _self.substr(0, i+1)
    }
  }
}

var a = '  Bijal  '.trimmer()

console.log(a)
