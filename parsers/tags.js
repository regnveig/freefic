var localvarname = "parsed_info";
if (localStorage.getItem(localvarname) === null) {
	localStorage.setItem(localvarname, "{}");
};
if (document.getElementsByClassName('jsPageJumper').length > 0) {
	var counter = document.getElementsByClassName('jsPageJumper')[0];
	var page = counter.getAttribute('value');
	var maxpages = counter.getAttribute('max');
} else {
	var page = "1";
	var maxpages = "1";
}
var catid = window.location.href.split('?')[0].split('/').lastItem;
var pageid = catid + ':' + page + '/' + maxpages;
var result = JSON.parse(localStorage.getItem(localvarname));
result[pageid] = [];
var children = document.getElementsByClassName('list-unstyled list-tags columned tag-highlight')[0].children;
for (var i = 0; i < children.length; i++) {
	var child = children[i];
	var newItem = {};
	newItem['fb_tagid'] = parseInt(child.getElementsByClassName('font-bold')[0].getAttribute('href').slice(6));
	newItem['fb_catid'] = parseInt(catid);
	newItem['name'] = child.getElementsByClassName('font-bold')[0].getAttribute('title');
	if (child.getElementsByClassName('text-muted tag-synonyms').length > 0) {
		newItem['synonims'] = child.getElementsByClassName('text-muted tag-synonyms')[0].innerText.split(', ');
	} else {
		newItem['synonims'] = [];
	}
	newItem['description'] = child.getElementsByClassName('text-muted small')[0].innerText;
	result[pageid].push(newItem);
}
localStorage.setItem(localvarname, JSON.stringify(result));
console.log(Object.keys(result));

// var localvarname = "parsed_info";
// localStorage.setItem(localvarname, "{}");
// localStorage.getItem(localvarname);
