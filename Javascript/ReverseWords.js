let str = "This is a sunny day";
let ans = "";
let temp = "";
console.log("original string : " + str);
for (let i = 0; i < str.length; i++) {
	const char = str[i];
	if (char != ' ') {
		temp += char;
	} else {
		ans += reverse(temp) + " ";
		temp = "";
	}
}
if (temp.length > 0) {
	ans += temp;
}
ans = ans.trimEnd();
console.log("string with reversed words : " + ans);

function reverse(temp) {
	let res = "";
	for (let i = temp.length - 1; i >= 0; i--) {
		res += temp[i];
	}
	return res;
}