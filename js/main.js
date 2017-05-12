function mostrarData(){
	var nombre = document.getElementById("nombre").value;
	var cont = document.getElementsByClassName("datos-completos");
	cont[0].innerHTML += "Nombre cliente: " + nombre + "<br>";

	var apellido= document.getElementById("apellido").value;
	var cont1 = document.getElementsByClassName("datos-completos");
	cont1[0].innerHTML += "Apellido cliente: " + apellido + "<br>";

	var correo = document.getElementById("correo").value;
	var cont1 = document.getElementsByClassName("datos-completos");
	cont1[0].innerHTML += "Correo electrónico cliente: " + correo + "<br>";

	var direccion = document.getElementById("direccion").value;
	var cont1 = document.getElementsByClassName("datos-completos");
	cont1[0].innerHTML += "Dirección cliente: " + direccion + "<br>";

	var telefono = document.getElementById("telefono").value;
	var cont1 = document.getElementsByClassName("datos-completos");
	cont1[0].innerHTML += "Teléfono cliente: " + telefono + "<br>";
}