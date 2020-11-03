const blog_pages = [
	{
		"Date":"Oct 2020",
		"Pages": [
			["24th","New Website", `For a long long long time I've been contemplating recoding my website to look less.. horrible.<br>Today I finally did, dont get me wrong its still horrible just not AS horrible.<br><br>I plan on writing blog pages quite a bit over the lifespan of this website.<br>Constantly improving it and everything so yea.... thats really all there is to say.<br>`]
		]
	}
]

const qs = window.location.search;
const up = new URLSearchParams(qs);
var   pageName = up.get("page")
var   gay = true
var   active = ""

function writeText(str) {return new Promise(function(resolve, reject) {var success = false;function listener(e) {e.clipboardData.setData("text/plain", str);e.preventDefault();success = true;}document.addEventListener("copy", listener);document.execCommand("copy");document.removeEventListener("copy", listener);success ? resolve(): reject();});};

function setBlog(page,name) {
	document.getElementById("BlogName").innerHTML = name
	document.getElementById("Title").innerHTML = name+" | Orions Site"
	var show = document.getElementById("BlogShow");
	active = name
	show.innerHTML = `
		<meta property="og:title" content="Orions Site | ${name}">
	`
	show.innerHTML += page
	show.innerHTML += `<br><br><br><br><br><br><br><br>
	<div onclick="resetBlog()" style="margin-top:25px;">
		<img draggable="false" clk style="filter: invert(40%)" src="https://image.flaticon.com/icons/png/512/93/93634.png" width="100px">
	</div><br>
	<div onclick="copyBlog()" style="margin-top:25px;">
		<img draggable="false" clk style="filter: invert(40%)" src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Chain_link_icon.png" width="100px">
	</div>`
}

function copyBlog() {
	writeText("https://garryspins.github.io/blog/index.html?page="+encodeURI(active))
}

function makeList(el,page) {
	el.innerHTML += `<div class="Year">${page.Date}</div>`
	for(var txt of page.Pages) {
		var ttt = txt[2].replace(/"/g, '\\\"').replace(/'/g, '\\\"');
		el.innerHTML += `<span>${txt[0]} - <a style="text-decoration:underline;" clk onclick='setBlog("${ttt}","${txt[1]}")'>${txt[1]}</a></span>`
	}
	el.innerHTML += "<br><br><br><br>"

	if(pageName != null && pageName.toLowerCase() == txt[1].toLowerCase()) {
		setBlog(ttt,txt[1])
		pageName = null
	}
}

function resetBlog() {
	document.getElementById("BlogName").innerHTML = " Blog Pages "
	document.getElementById("Title").innerHTML = "Blog | Orions Site"
	var show = document.getElementById("BlogShow")
	show.innerHTML = `<meta property="og:title" content="Orions Site">`
	for(var page of blog_pages) {
		makeList(show,page)
	}
}

var show = document.getElementById("BlogShow");
resetBlog(show)