// To make a navbar for slides

console.log("navbar0.js added");
const navbar0Id = "mycssnavbar_0"

function newNavbar0(){
	if (document.querySelector("section.level1.present")){
		return;
	}

	const h1Arr = document.querySelectorAll("h1");
	let h1Present = document.querySelector("section.present h1"); // should be only one element

	const navbarDiv = document.createElement("div");
	navbarDiv.id = navbar0Id;

	h1Arr.forEach((e, i)=>{
			const navbarSubDiv = document.createElement("div");
			//console.log(e.innerText);
			//console.log(h2Present.innerText);
			navbarSubDiv.className = "navbarsub_0";
			if (i==0) {
				navbarSubDiv.className += " imp"; // navbarsub_0 imp
			}
			if (e.innerText == h1Present.innerText) {
				navbarSubDiv.className += " present"; //navbarsub_0 present
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
	element.append(navbarDiv)
}

function updateNavbar0(){
	if (document.querySelector("section.level1.present")){
		return;
	}
	const navbarDiv = document.querySelector("section.level2.present #"+navbar0Id);
	if (navbarDiv == null) {
		newNavbar0();
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

Reveal.on("slidechanged", event => { /*console.log("change");*/ updateNavbar0() });
Reveal.on("ready", event => { /*console.log("ready");*/ newNavbar0() });





