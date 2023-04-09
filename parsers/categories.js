var result = [];
var children = document.getElementsByClassName('list-unstyled list-tags columned tag-highlight')[0].children;
for (var i = 0; i < children.length; i++) {
	var child = children[i];
	var newItem = {};
	newItem['fb_catid'] = parseInt(child.getElementsByTagName('a')[0].getAttribute('href').slice(16));
	newItem['name'] = child.getElementsByTagName('a')[0].getAttribute('title');
	newItem['description'] = child.getElementsByClassName('small-text text-muted')[0].innerText;
	result.push(newItem);
}
JSON.stringify(result); 
