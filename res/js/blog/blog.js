const blog_pages = [
	{
		"Date":"Oct 2020",
		"Pages": [
			["24th","New Website", `For a long long long time I've been contemplating recoding my website to look less.. horrible.<br>Today I finally did, dont get me wrong its still horrible just not AS horrible.<br><br>I plan on writing blog pages quite a bit over the lifespan of this website.<br>Constantly improving it and everything so yea.... thats really all there is to say.<br>`]
		]
	},
	{
		"Date":"Nov 2020",
		"Pages" : [
			["4th","Why I Hate Discord", `My original Discord account was made on 12/12/2016, <br>I remember back when you had to use apngs for your animated avatars, you could use emotes globally and everything that Nitro has was free. Those were the days man, youd get together with 1 or 2 of your friends who had Discord and youd play like Stick Fight or something like that. I havent had an experience like those old days on discord since 2017, before I joined Revival.<br><br>If you remember the times Im talking about then youll know why new Discord sucks so bad. Ive broken it down into 4 major things that I hate about Discord<br>- Pedophilia / Furries<br>- Issues and Support<br>- Fabricated Power Dynamic by Moderators<br>- <b>Nitro</b><br><br> I'll start with the Pedophilia problem on the platform. You <b>cannot</b> join any decently sized server without encountering someone who wants to diddle you if youre under the age of 18. This is expected for any platform, even Youtube and Facebook have these issues so its not super surprising. What is surprising however is Discords lack of accountability and responsibility relating to the issue. What I mean by this is lets just say you report someone on Discord for Pedophilia with definite proof of it, Discord will take 0 action banning them, however if you say 'The N Word' you will get banned for the rest of your life for hate speech and hurting someones feelings. Pedophiles are a real danger to the platform as has been showed for the last 6~ years, My theory about why this is even a problem is that all the official Discord staff are 42yo cuckhold soyboys who have never worked a day in their lives so they love to feel the power of diddling children, why would pedos hurt pedos right? well that was a mouthful time for the next portion.<br><br>Since I can remember on Discord there has been tons of issues that till this day arent resolved, one of the major ones is the desktop client crashing every 20 minutes, this issue however can be blamed on Electron because chromium is a slow piece of garbage system which should have been deprecated the second that IE got deprecated, thats a rant for anotherday though. One of the other big issues that Discord systemically has is their support system, I touched on this subject a little bit previously but I'll go over it again cause its kind of amazing how stupid it is. Lets just say you report someone for doing something very illegal and stupid such as... Doxxing you, Discord will do the very professional thing of telling you to "block them" even though that doesnt do jack relating to doxxing since they can still leak your information without you knowing, you can give them the most substantial proof possible (the message ID and link) and they will go out of their way to tell you to piss off and to suck it up. Discord loves to promote illegal activity because their entire staff team is a giant piece of trash.<br><br> Discord Server Moderators are another problem plaguing Discord in #general, they have no real life skills or anything so they have to attempt to make you feel like garbage to make themselves feel like they made an impact on you, its like using a metal spatula on a nonstick pan, youd only do it because you absolutely have to or you just want to make your mark no matter how small it is.<br><br>Now to the big one which makes me furious, <b><i>Nitro</i></b>, This overpriced piece of garbage that is one of the main causes for most people to hate the platform. Before I really started ranting I went on about what life was like in early 2017~, That was before Nitro really took off even if it did exist. When Nitro became mandatory for all that stuff thats when Discord really became stupid and I started hating it. I bet to you right now if Discord for whatever selfless reason removes Nitro and reverts it back to the way it was in the good ol days theyd instantly be a much less hated company.<br><br><br>The only reason people use it still is because all their friends are on it, its the only reason Facebook is still alive. If there is ever another platform that doesnt suck as bad as it then I'll switch over in a heartbeat but since its the only one of its kind with its popularity we're all stuck using it. God have mercy on us and the trannies who run Discord.`]
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
	show.innerHTML += `<br><br><br><br><pre>Sincerely Orion, Professional Soydev</pre><br><br><br><br><br><br><br><br>
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