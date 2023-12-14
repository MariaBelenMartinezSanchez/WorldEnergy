// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function formulario() {
	var nombre = new String();
	var correo = new String();
	var comentario = new String();
	var telefono = new Number();
	document.write("Nombre completo",'<BR/>');
	nombre = prompt();
	document.write("Telefono",'<BR/>');
	telefono = Number(prompt());
	document.write("Correo electronico",'<BR/>');
	correo = prompt();
	document.write("Ingrese su comentario o solicitud",'<BR/>');
	comentario = prompt();
	document.write("Su respuesta a sido registrada",'<BR/>');
}

