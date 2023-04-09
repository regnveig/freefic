result = [];
var children = document.getElementById('vs4__listbox').children;
for (var i = 0; i < children.length; i++) {
	var child = children[i];
	result.push(child.innerText);
}
JSON.stringify(result); 
