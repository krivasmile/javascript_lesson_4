"use strict";

function makeBuffer() {
	let string = "";

	return {
		add: function(str) {
			if (typeof str == "string") {
				str += " ";
				string = string + str;
			}
			else {
				string = string + str;
			}
		},
		print: function() {
			return string;
		},
		clear: function(){
			string = "";
		}
	}
}

var buffer = makeBuffer();

buffer.add(0);
buffer.add(1);
buffer.add(2);
buffer.add(true);

console.log(buffer.print());

var buffer2 = makeBuffer();

buffer2.add("Java");
buffer2.add("Is");
buffer2.add("My");
buffer2.add("Dream!");

console.log(buffer2.print());
console.log("--------------------------------");

console.log("CLEAR:");
buffer.clear();
console.log(buffer.print()); //empty
console.log(buffer2.print());


