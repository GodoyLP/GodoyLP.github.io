/*EXPERIENCA LABORAL*/

class Expereincia {
  constructor(fechaDsd, fechaHst, puesto, actividad1, actividad2, actividad3, actividad4, actividad5, actividad6) {
    this.fechaDsd = fechaDsd;
    this.fechaHst = fechaHst;
    this.puesto = puesto;
    this.actividad1 = actividad1;
    this.actividad2 = actividad2;
    this.actividad3 = actividad3;
    this.actividad4 = actividad4;
    this.actividad5 = actividad5;
    this.actividad6 = actividad6;
  }
}


/*Todas las expecienca laborales oredenad de la primera a la ultima orden cronologico*/
let experiencia1 = new Expereincia("02/2016","04/2016", "Puesto Mantenimiento y soporte técnico en Empresa Nelo Diseño S.A.",
  "Control de equipamiento y reparación.", "Mantenimiento de equipos informático e impresora.","Actualizacion de software", "Conexiones de redes.", "Antivirus.", "Conexiones remotas.");
let experiencia2 = new Expereincia("06/2016","01/2017","Puesto vendedor técnico en Home PC.","Asesoramiento y venta de insumos informáticos.",
"Creación de inventarios de insumos.","Mantenimiento y reparación de ordenadores personales e impresoras.","Soporte técnico.","Ateción al cliente","Creación de ticket.",);
let experiencia3 = new Expereincia( "02/2017","08/2018",  "Puesto administración aula virtual en forma particular (free lance)",
  "Crear permisos a los estudiantes.",  "Postear material de estudio.",  "Creación de tareas hogareñas.",  "Preparación de material administrativo del docente.","Comunicación con tutores.","Envio y recepcion de e-mail.",);
let experiencia4 = new Expereincia("02/2018","12/2019","Puesto Clases particulares y soporte técnico en forma particular.",
"Clases didácticas de acuerdo a las necesidades del alumno.","Creación de apuntes de estudio.","Mantenimiento de equipos e impresoras.","Conexiones de redes.","Instalaciones de programas, antivirus y configuración.","Reparaciones forma virtual.",);
let experiencia5 = new Expereincia("10/2018", "08/2019", "Puesto C.A.U. Instalaciones en Empresa YPF S.A.", "Entrega de activos informático.", "Instalación de imagen corporativa.", "Instalación de programas homologados.",
"Reposición de activos informáticos.", "Control de los activos informáticos en actividad.", "Apertura y cierre de peticiones en HP Manager.",);
let experiencia6 = new Expereincia("08/2019","02/2020","Puesto Soporte Técnico en Empresa Banco Credicoop.","Remplazo de activos informático."," Mudanza de puesto de trabajo.",
"Migración de datos.","Creacion de imagens corporativa.","Instalación de imagen corporativa.","Instalación de programas homologados.",);
let experiencia7 = new Expereincia("02/2020","Actualidad","Puesto Soporte Técnico Administrativo En forma particular.",
"Creación plataforma virtual y administración.","Creación de actividades y trabajos prácticos.","Administración de correos y respuesta.","Llenado de planillas y documentación.","Mantención de ordenadores personales.","Conexión remota.",);
let experiencia8 = new Expereincia("01/2023","Actualidad","Reparacion Celular & Pcs (forma particular).","Dectecion de fallas.","Cambio de componentes defectuoso.","Instalcion de software.","Actualizaciones","Cambio de pantalla.","Remplazo de componente IC",);


/*funcion muestra una expereincia laboral*/
function experienciaLAboral(experiencia) {
  document.write(
    "<h7 class=" + "card-title shadow p-3 mb-5 bg-white rounded" + ">De " +experiencia.fechaDsd +" hasta " +experiencia.fechaHst +"</h7><h5 class=" +
    "card-subtitle" + "><strong>" + experiencia.puesto + ":</strong></h5><p class=" + "card-text" + "><ul>" +
    "<li>" + experiencia.actividad1+ "</li>" +
    "<li>" + experiencia.actividad2+ "</li>" +
    "<li>" + experiencia.actividad3+ "</li>" +
    "<li>" + experiencia.actividad4+ "</li>" +
    "<li>" + experiencia.actividad5+ "</li>" +
    "<li>" + experiencia.actividad16+ "</li></ul></p>"
  );
}


function fechaDesde_fechaHasta(experiencia) {
  document.write("De " + experiencia.fechaDsd + " hasta " + experiencia.fechaHst);
}
