
/* variables globales datos personales del postulante*/

const datosPostulante = {
  nombre: ['Luis', 'Pedro'],
  apellido: 'Godoy',
  fecha_naciemiento: 14/01/1979,
  nacionalidad: 'Argentino',
  genero: 'masculino',
  direccion: 'Bartolme Hidalgo 1823',
  celular: '11-3879-0135',
  telefono: '11-4750-6270',
  email: 'luispedrogodoy@gmail.com',
}

function descripcionPostulante() {
  document.write("Soy una persona proactiva, alta responsabilidad, buena comunicación,"+
  " con ganas de trabajar, aprender y desarrollarme dentro de la empresa. Tengo experiencia en soporte"+
  " técnico y conocimiento de base de datos, programación y me encuentro promediando la carrera de Analista"+
  " de sistemas de computación.");
}

/*inicio funcones pagina datosPersonales */

function nombreCompleto() {
 document.write(datosPostulante.nombre[0]+" "+datosPostulante.nombre[1]+" "+datosPostulante.apellido);
}

function fichaPersonal(){
  document.write("Nombre y Apellido : "+ datosPostulante.nombre[0]+" "+datosPostulante.nombre[1]+" "+datosPostulante.apellido +
  "<br>Genero : "+datosPostulante.genero + "<br>Nacionalidad : " + datosPostulante.nacionalidad + "<br>Direccion: "+
  datosPostulante.direccion+"<br>Celular: "+datosPostulante.celular+"<br>Telefono : "+datosPostulante.telefono+
  "<br>E-mail :"+datosPostulante.email);
}
/*fin funcones pagina datosPersonales */

/**BOTONOS**/
/*boton telefono mostrar numero*/
function telefono() {
  alert("Puedes llamar a "+datosPostulante.nombre[0] +" al siguiente celular\n"+datosPostulante.celular );
};


/*boton whatsapp abrir en la web*/
function whatsapp() {
  Object.assign(document.createElement("a"), {
    target: "_blank",
    href: "https://wa.me/1138790135"
  }).click();
};

/*boton telegramapp abrir en la web*/
function telegram() {
  Object.assign(document.createElement("a"), {
    target: "_blank",
    href: "https://t.me/1138790135"
  }).click();
};

/*boton gmail abrir en la web*/
function gmail() {
  if (window.confirm("Quiere enviar e-mail a "+datosPostulante.nombre+"?")){
    window.open(enviar_gmail(), "Gracias!");
  }
};

/*boton imprimir */
function impresora() {
  window.print();

}

/*funcion abre para enviar gamil en la web*/
function enviar_gmail() {
  Object.assign(document.createElement("a"), {
    target: "_blank",
    href: "https://mail.google.com/mail/u/0/?hl=es-419#inbox?compose=DmwnWrRqhKQDGddmNpTSnNhjhmBvWksFqwhdHdkHGNQQDFhHXTTZNJlFZTLGRQDJKqpvBRwKpgnq"
    //href: "https://mail.google.com/mail/u/0/?hl=es-419#inbox?compose=new"
  }).click();
};

/*boton abre pagina datoPersonal.html*/
function datosPersoanles() {
  Object.assign(document.createElement("a"), {
    href: "datoPersonal.html"
  }).click();
};

/*boton abre pagina expereincia.html*/
function experiencia() {
  Object.assign(document.createElement("a"), {
    href: "experiencia.html"
  }).click();
};

/*boton abre pagina formacion.html*/
function formacion() {
  Object.assign(document.createElement("a"), {
    href: "formacion.html"
  }).click();
};

/*boton abre la paginia de inicio index.html*/
function home() {
  Object.assign(document.createElement("a"), {
    href: "index.html"
  }).click();
};


