
//(11 pts) Define a function charCount that takes a string as an argument and returns an object containing character count of letters.
//```javascript
//let result = charCount("Pack my box with five dozen liquor jugs.");
//let aCount = result.a;
//let spaceCount = result[' '];
//console.log(aCount); // Should output 1
//console.log(spaceCount); // Should output 7

		function charCount(alainasString) {
			if ( alainasString.match(/a/g) != null  ) { this.a = alainasString.match(/a/g).length } else { this.a = 0 };
			if ( alainasString.match(/b/g) != null  ) { this.b = alainasString.match(/b/g).length } else { this.b = 0 };
			if ( alainasString.match(/c/g) != null  ) { this.c = alainasString.match(/c/g).length } else { this.c = 0 };
			if ( alainasString.match(/d/g) != null  ) { this.d = alainasString.match(/d/g).length } else { this.d = 0 };
			if ( alainasString.match(/e/g) != null  ) { this.e = alainasString.match(/e/g).length } else { this.e = 0 };
			if ( alainasString.match(/f/g) != null  ) { this.f = alainasString.match(/f/g).length } else { this.f = 0 };
			if ( alainasString.match(/g/g) != null  ) { this.g = alainasString.match(/g/g).length } else { this.g = 0 };
			if ( alainasString.match(/h/g) != null  ) { this.h = alainasString.match(/h/g).length } else { this.h = 0 };
			if ( alainasString.match(/i/g) != null  ) { this.i = alainasString.match(/i/g).length } else { this.i = 0 };
			if ( alainasString.match(/j/g) != null  ) { this.j = alainasString.match(/j/g).length } else { this.j = 0 };
			if ( alainasString.match(/k/g) != null  ) { this.k = alainasString.match(/k/g).length } else { this.k = 0 };
			if ( alainasString.match(/l/g) != null  ) { this.l = alainasString.match(/l/g).length } else { this.l = 0 };
			if ( alainasString.match(/m/g) != null  ) { this.m = alainasString.match(/m/g).length } else { this.m = 0 };
			if ( alainasString.match(/n/g) != null  ) { this.n = alainasString.match(/n/g).length } else { this.n = 0 };
			if ( alainasString.match(/o/g) != null  ) { this.o = alainasString.match(/o/g).length } else { this.o = 0 };
			if ( alainasString.match(/p/g) != null  ) { this.p = alainasString.match(/p/g).length } else { this.p = 0 };
			if ( alainasString.match(/q/g) != null  ) { this.q = alainasString.match(/q/g).length } else { this.q = 0 };
			if ( alainasString.match(/r/g) != null  ) { this.r = alainasString.match(/r/g).length } else { this.r = 0 };
			if ( alainasString.match(/s/g) != null  ) { this.s = alainasString.match(/s/g).length } else { this.s = 0 };
			if ( alainasString.match(/t/g) != null  ) { this.t = alainasString.match(/t/g).length } else { this.t = 0 };
			if ( alainasString.match(/u/g) != null  ) { this.u = alainasString.match(/u/g).length } else { this.u = 0 };
			if ( alainasString.match(/v/g) != null  ) { this.v = alainasString.match(/v/g).length } else { this.v = 0 };
			if ( alainasString.match(/w/g) != null  ) { this.w = alainasString.match(/w/g).length } else { this.w = 0 };
			if ( alainasString.match(/x/g) != null  ) { this.x = alainasString.match(/x/g).length } else { this.x = 0 };
			if ( alainasString.match(/y/g) != null  ) { this.y = alainasString.match(/y/g).length } else { this.y = 0 };
			if ( alainasString.match(/z/g) != null  ) { this.z = alainasString.match(/z/g).length } else { this.z = 0 };
			if ( alainasString.match(/ /g) != null  ) { this.sp = alainasString.match(/ /g).length } else { this.sp = 0 };
		}
let result = new charCount("Pack my box with five dozen liquor jugs.");
let aCount = result.a;
let spaceCount = result.sp;
console.log(aCount); 
console.log(spaceCount); 
