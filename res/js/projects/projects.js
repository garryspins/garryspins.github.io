const projects_list = [
	{
		"Date":"Oct 2020",
		"Finished": [
			["24th","New Website"],	
			["12th","LightRP's F4","https://lightrp.co/"],
			["11th","LightRP's Scoreboard","https://lightrp.co/"],
			["10th","LightRP's Website","https://lightrp.co/"],
			["10th","LightRP's HUD","https://lightrp.co/"]
		],
		"Unfinished": [
			["23rd","RazerUI"]
		]
	},
	{
		"Date":"Nov 2020",
		"Finished": [
			["2nd","Elemental Server's F4"]
		],
		"InProgress": [
			["3rd","Acrylic UI"]
		]
	}
]



for(var date of projects_list) {
	var show = document.getElementById("ProjectShow");
	show.innerHTML += `<div class="Year">${date.Date}</div>`
	if(!(typeof date.Finished === "undefined")){
		show.innerHTML += `<div class="subYear">Finished</div>`
		for(var fin of date.Finished) {
			if(typeof fin[2] === "undefined") {
				show.innerHTML += `<span>${fin[0]} - ${fin[1]}</span><br>`
			} else {
				show.innerHTML += `<span>${fin[0]} - <a ent href="${fin[2]}">${fin[1]}</a></span><br>`
			}
		}
	}
	if(!(typeof date.Unfinished === "undefined")){
		show.innerHTML += `<br><br><div class="subYear">Unfinished</div>`
		for(var fin of date.Unfinished) {
			if(typeof fin[2] === "undefined") {
				show.innerHTML += `<span>${fin[0]} - ${fin[1]}</span><br>`
			} else {
				show.innerHTML += `<span>${fin[0]} - <a ent href="${fin[2]}">${fin[1]}</a></span><br>`
			}
		}
	}
	if(!(typeof date.InProgress === "undefined")){
		show.innerHTML += `<br><br><div class="subYear">In Progress</div>`
		for(var fin of date.InProgress) {
			if(typeof fin[2] === "undefined") {
				show.innerHTML += `<span>${fin[0]} - ${fin[1]}</span><br>`
			} else {
				show.innerHTML += `<span>${fin[0]} - <a ent href="${fin[2]}">${fin[1]}</a></span><br>`
			}
		}
	}

	show.innerHTML += `<br><br><br><br>`
}