const projects_list = [
	{
		"Date":"Nov 2020",
		"Finished": [
			["2nd","Elemental Server's F4"	,["lua.png"]],
			["4th", "Cursors"				,["lua.png","md.png"], "https://wiki.facepunch.com/gmod/Cursors"]
		],
		"InProgress": [
			["3rd","Acrylic UI"				,["lua.png"]]
		]
	},
	{
		"Date":"Oct 2020",
		"Finished": [
			["24th","New Website"			,["html.webp","css.webp","js.png"]],	
			["12th","LightRP's F4"			,["lua.png"]	,"https://lightrp.co/",],
			["11th","LightRP's Scoreboard"	,["lua.png"]	,"https://lightrp.co/",],
			["10th","LightRP's Website"		,["lua.png"]	,"https://lightrp.co/",],
			["10th","LightRP's HUD"			,["lua.png"]	,"https://lightrp.co/",]
		],
		"Unfinished": [
			["23rd","RazerUI" 				,["lua.png"]]
		]
	}
]

const cats = [
	["Finished","Finished"],
	["InProgress","In Progress"],
	["Unfinished","Unfinished"]
]

for(var date of projects_list) {
	var show = document.getElementById("ProjectShow");
	show.innerHTML += `<div class="Year">${date.Date}</div>`
	for(var thing of cats) {
		if(!(typeof date[thing[0]] === "undefined")){
			show.innerHTML += `<div class="subYear">${thing[1]}</div>`
			for(var fin of date[thing[0]]) {
				var langs = ``
				//3=langs
				if(typeof fin[2] != "undefined") {
					for(lang of fin[2]) {
						langs+=`<img style="padding-top:2px;float:right;" height="15px" width="auto" src="../res/img/langs/${lang}">`
						console.log(langs)
					}
				}
				if(typeof fin[3] === "undefined") {
					show.innerHTML += `<span style="padding-top:5px;width:100%;">${fin[0]} - ${fin[1]}${langs}</span><br>`
				} else {
					show.innerHTML += `<span style="padding-top:5px;width:100%;">${fin[0]} - <a ent href="${fin[3]}">${fin[1]}</a>${langs}</span><br>`
				}
			}
		}
		show.innerHTML += `<br><br>`
	}
}