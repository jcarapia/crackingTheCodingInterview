var sample_input = '{([])}';


var balancedParens = function(input) {
	var stack = [];
	var pairs = {
		'{' : '}',
		'[' : ']',
		'(' : ')'
	};

	for(var i = 0; i < input.length; i++) {
		
		var char = input[i];
		
		if(pairs[char]){
			stack.push(char)
		} else if (char === '}' || char === ']' || char === ')') {
			if(pairs[stack.pop()] !== char) {
				return false
			}
			console.log(stack)
		}
	}
	return stack.length === 0;
}

console.log(balancedParens(sample_input))