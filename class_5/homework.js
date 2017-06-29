
//(11 pts) Define a function charCount that takes a string as an argument and returns an object containing character count of letters.
//```javascript
//let result = charCount("Pack my box with five dozen liquor jugs.");
//let aCount = result.a;
//let spaceCount = result[' '];
//console.log(aCount); // Should output 1
//console.log(spaceCount); // Should output 7

function charCount(alainasString) {
	let counts = {};
	for (let i = 0; i < alainasString.length; i++) {
		let char = alainasString.charAt(i);
		if (counts[char]) {
			counts[char]++;
		} else {
			counts[char] = 1;
		}
	}
	return counts;
}
let result = charCount("Pack my box with five dozen liquor jugs.");
let aCount = result.a;
let spaceCount = result[' '];
console.log(aCount); // Should output 1
console.log(spaceCount); // Should output 7
console.log(result);