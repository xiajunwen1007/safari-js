// ==UserScript==
// @name         scholar download
// @namespace    https://twitter.com/threadripper_
// @version      0.1.2
// @description  add scihub download button to google scholar
// @author       @threadripper_
// @match        https://scholar.google.com/*
// @grant        none
// ==/UserScript==

(function() {
var papers = document.querySelectorAll('.gs_ri');
papers.forEach(function(item){
	var paper_link = "https://sci-hub.se/" + item.querySelector('.gs_rt a').href;
	var down_but = `<a target="_blank" href="${paper_link}" style= "color:rgb(26, 13, 171); font-weight: bold;">download</a>`;
	item.querySelector('.gs_ri .gs_fl').insertAdjacentHTML('beforeend', down_but);
});
})();
