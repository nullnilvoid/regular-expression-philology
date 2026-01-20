// To make a navbar for slides

console.log("navbar.js added");
const navbarId = "mycssnavbar"

function newNavbar(){
	if (document.querySelector("section.level1.present")){
		return;
	}

	const h2Arr = document.querySelectorAll(".present h2");
	let h2Present = document.querySelector(".level2.present h2"); // should be only one element

	const navbarDiv = document.createElement("div");
	let prevSect;

	navbarDiv.id = navbarId;
	while (!h2Present) {
		if (typeof prevSect==="undefined"){
			prevSect = document.querySelector("section.level2.present").previousElementSibling;
		} else {
			prevSect = prevSect.previousElementSibling;
		}
		h2Present = prevSect.querySelector("h2");
	}

	h2Arr.forEach((e, i)=>{
			const navbarSubDiv = document.createElement("div");
			//console.log(e.innerText);
			//console.log(h2Present.innerText);
			if (e.innerText == h2Present.innerText) {
				navbarSubDiv.className = "navbarsub present";
			} else {
				navbarSubDiv.className = "navbarsub";
			}
			/*
			const p = document.createElement("p");
			const t = document.createTextNode(e.innerText);
			p.appendChild(t);
			navbarSubDiv.appendChild(p);
			navbarDiv.appendChild(navbarSubDiv);
			*/
			const a = document.createElement("a");
			const t = document.createTextNode(e.innerText);
			a.appendChild(t);
			a.href = "#/"+e.parentElement.id;
			navbarSubDiv.appendChild(a);
			navbarDiv.appendChild(navbarSubDiv);


	});
	//console.log(navbarDiv);
	const element = document.querySelector("section.level2.present");
	element.insertBefore(navbarDiv, element.firstChild);
}

function updateNavbar(){
	const navbarDiv = document.querySelector(".level2.present #"+navbarId);
	if (navbarDiv == null) {
		newNavbar();
	}
	/*
	 else {
		// update class
		const h2Present = document.querySelector(".level2.present h2"); // should be only one element
		const navbarSubDivArr = document.getElementById(navbarId).children;
		navbarSubDivArr.forEach((e, i)=>{
			if (!!h2Present){
				if (e.innerText == h2Present.innerText){
					e.className = "navbarsubPresent";
				} else {
					e.className = "navbarsub";
				}
			}
		});
	}
*/
}

Reveal.on("slidechanged", event => { /*console.log("change");*/ updateNavbar() });
Reveal.on("ready", event => { /*console.log("ready");*/ newNavbar() });





