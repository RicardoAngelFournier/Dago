var nombre = window.prompt("Enter your name: ");
alert("Tu nombre es " + nombre);

var puestos = 'Docente';
//var nombre = 'Ricardo Angel Fournier Delgado';
var email = 'ricardo123@ejemplo.com';
var anioservicio = document.getElementById("anioservicio").value;
var letra1 = 'a';
var letra2 = 'b';

document.write('Hola '+ puestos +' :' + nombre + ' tu correo es: ' + email + ' gracias por tus: ' + anioservicio + ' años de servicio');
document.write('<br><hr>');

//JS  creando objetos
document.write('<br><hr>');

var coche={
    tipo: 'auto',
    marca:'Ford',
    modelo:2012
}
document.write('el coche de tipo: '+coche.tipo+' de la marca: '+coche.marca + ' del año: '+ coche.modelo);

document.write('<br><hr>');
//JS  creando objetos diferente metodo
var coche1= new Object();
coche1.tipo='camion';
coche1.marca='nissan';
coche1.modelo='2000';
document.write('el coche de tipo: '+coche1.tipo+' de la marca: '+coche1.marca + ' del año: '+ coche1.modelo);
