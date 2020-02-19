var texto;
var texto2;
var texto3;
var texto4;
var text;
var numero;

numero = 0;
text = "Soy un estudiante de programación en el nivel medio superior, actualmente sé programar en JAVA, Python y un diseño de páginas web empleando HTML5 y CSS3.Mi grado de estudios actual se encuentra en el nivel medio superior por el momento sin terminar; sin embargo no pasará mucho tiempo para que concluya mis estudios en este nivel. Me considero capaz para desempeñar cualquier función que se me asigne, ya que aprendo con rápidez, aunque me gusta mas la idea de manejar algun dispositivo o sistema";
texto = "Actualmente me dedico de manera exclusiva al estudio; sin embargo, es posible que ingrese en el campo laboral, ya que es interesante la idea de desarrollar proyectos fuera de lo academico, además de que será necesario en algun día";
texto2 = "Como experiencia puedo decir que he participado en distintos proyectos a lo largo de mi carrera estudiantil, como por ejemplo la presentacion de talleres en la feria del talento, así como diversos talleres sobre computación que trataban de informar al público ( manejo de office, animaciones en Scratch, etc); posteriormente he realizado proyectos con alumnos pertenecientes a mi misma institución para presentar en la Expobatiz. Me especializo en la parte del desarrollo de lo que tenga que ver con el manejo de una aplicacion";
texto3 = "El idioma que domino es el español y tengo un nivel de inglés intermedio";
texto4 = "Ingeniero Luis Alfonso Martínez Alfaro, desarrollo de proyectos por 3 años";

function agregar_contador(){
	numero += 1;
	
	if (numero == 1) {
		document.getElementById('division').innerHTML = texto;
		document.getElementyById("imagen").src = "trabajo.jpg";
	}
	else if (numero == 2) {
		document.getElementById('division').innerHTML = texto2;
	}
	else if (numero == 3){
		document.getElementById('division').innerHTML = texto3;
	}
	else if (numero == 4) {
		document.getElementById('division').innerHTML = texto4;
	}
	else if (numero ==5) {
		document.getElementById('division').innerHTML = text;
		
		numero = 0;
	}
}


