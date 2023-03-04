
/* variables globales datos concocimiento / cuersos aca se debe setear el valor de conocimento en %*/

const conocimiento = {
    curso: [['Ingles', '--porcentajeIngles', '40%'],
    ['Paquete office', '--progresoOffice', '90%'],
    ['Navegadores', '--progresoNavegadores', '70%'],
    ['Entorno DOS', '--progresoDos', '60%'],
    ['SO Linux', '--progresoLinux', ' 50%'],
    ['SO Windows', '--progresoWin', '80%'],
    ['Html', '--progresoHtml', '60%'],
    ['S.Q.L', '--progresoSql', '60%'],
    ['SAP Abap', '--progresoAbpa', '40%'],
    ['C++', '--progresoCmasmas', '80%'],
    ['Java', '--progresoJava', '80%'],
    ['UML', '--progresoUml', '70%'],
    ['Redes', '--progresoRedes', '40%']],
    nivel: ['Inical', 'Medio', 'Avanzado'],
}




var r = document.querySelector(':root');

//funcion get para el mostrar porcentaje de conocimento
function myFunction_get() {
    var rs = getComputedStyle(r);
    alert("The value of --progresoRedes is: " + rs.getPropertyValue('--progresoRedes'));
}

//funcion set para el porcentaje de conocimento
function myFunction_set(pos) {
    r.style.setProperty(conocimiento.curso[pos][1], conocimiento.curso[pos][2]);
}

//funcion muestra ejemplo Redes 15% Nivel ( Inical)
function conocimientoCurso(pos) {
    myFunction_set(pos);

    if (conocimiento.curso[pos][2] > '70%') {
        document.write(conocimiento.curso[pos][0] +" "+conocimiento.curso[pos][2]+" Nivel ( "+conocimiento.nivel[2]+")");
    } else if (conocimiento.curso[pos][2] > '40%' && conocimiento.curso[pos][2] < '70%') {
        document.write(conocimiento.curso[pos][0] +" "+conocimiento.curso[pos][2]+" Nivel ( "+conocimiento.nivel[1]+")");
    } else {
        document.write(conocimiento.curso[pos][0] +" "+conocimiento.curso[pos][2]+" Nivel ( "+conocimiento.nivel[0]+")");
    }
}















