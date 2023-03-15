//Obtiene los datos del usario
const url = 'https://randomuser.me/api/?gender=male';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
		let persona = data.results;
		return persona.map(function(pers) {
			document.getElementById('foto').src = `${pers.picture.large}`;
			document.getElementById('nombre').innerHTML = `${pers.name.first} ${pers.name.last}`
			document.getElementById('domicilio').innerHTML = `${pers.location.city} | ${pers.location.state} | ${pers.location.country}`;
			document.getElementById('datoscontacto').innerHTML = `<i class='bx bx-envelope'></i> ${pers.email} <i class='bx bx-mobile-alt'></i> ${pers.phone}`;
			document.getElementById('email').innerHTML = `${pers.email}`;
			document.getElementById('telefono').innerHTML = `${pers.phone}`;
	})
})
.catch(function(error) {
		console.log(error);
});

//Funcion que muestra la informacion adicional 
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		var elem = this.lastChild;
		if (content.style.maxHeight){
			content.style.maxHeight = null;
			elem.classList.remove("bx-up-arrow-circle");
			elem.classList.add("bx-down-arrow-circle");
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
			elem.classList.remove("bx-down-arrow-circle");
			elem.classList.add("bx-up-arrow-circle");
		} 
	});
}

//Funcion que abre y cierra el menu para dispositivos moviles
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".abrir-menu");
const closeMenuBtn = document.querySelector(".cerrar-menu");

function toggleMenu() {
	menu.classList.toggle("menu_abierto");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);