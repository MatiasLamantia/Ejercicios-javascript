
// Definición de la clase Persona utilizando la sintaxis de clases de ES6

class Persona {
  constructor(nombre,edad){
    this._nombre = nombre;
    this._edad = edad;
  };

  // Método para obtener una descripción de la persona
  toString(){
    return "Nombre: " + this._nombre + ", Edad :"+ this._edad;
  }
}

// Definición de la clase Profesor que hereda de Persona



class Profesor extends Persona {
  constructor(nombre, edad, especialidad) {
    super(nombre, edad);
    this._especialidad = especialidad;
    this._asignatura = [];
  }

  // Método para agregar una asignatura al profesor
  agregarAsignatura(asignatura) {
    this._asignatura.push(asignatura);
  }

  // Método para obtener una descripción del profesor
  toString() {
    return super.toString() + ", Especialidad: " + this._especialidad + ", Asignaturas :" + this._asignatura.toString();
  }
}

// Definición de la clase Asignatura

class Asignatura {
  constructor(nombre,profesor,horario){
    this._nombre = nombre;
    this._profesor = profesor;
    this._horarios = [];
    this._horarios.push(horario);

  }

  // Método para asignar un horario a la asignatura
  asignarHorario(horario){
    this._horarios.push(horario);
  }

  toString(){
    return 'Nombre : ' + this._nombre + ', Profesor : ' + this._profesor + ', Horarios :' + this._horarios.toString();
  }
}

// Definición de la clase Horario

class Horario {
  constructor(dia,horaInicio,horaFin){
    this._dia = dia;
    this._horaInicio = horaInicio;
    this._horaFin = horaFin;
  }

  // Método para obtener una descripción del horario
  toString(){
    return 'Dia :'+ this._dia + ', hora Incio :'+ this._horaInicio + ', hora fin :'+ this._horaFin;
  }
}

// Definición de la clase Estudiante que hereda de Persona

class Estudiante extends Persona {
 constructor (nombre,edad,nivelAcademico){
  super(nombre, edad);
  this._nivelAcademico= nivelAcademico;
  this._asignatura = [];
 }

  // Método para agregar una asignatura al estudiante
 agregarAsignatura(asignatura){
  this._asignatura.push(asignatura);
 }

  // Método para obtener una descripción del estudiante
  toString(){
    return super.toString() + " Nivel academico :" + this._nivelAcademico + ", Asignaturas : " + this._asignatura.toString();
  }
}


// Crear instancias de Personas, Profesores, Asignaturas, Horarios y Estudiantes
persona1 = new Persona("Matias",19);
persona2 = new Persona("jose",18);


profesor1 = new Profesor("Juan",29,"Programacion");
profesor1.agregarAsignatura("Lenguaje de marcas");

profesor2 = new Profesor("Luis",35,"Interfaces");
profesor2.agregarAsignatura("Sistemas informaticos");
profesor2.agregarAsignatura("Programacion");

estudiante1 = new Estudiante("Pablo",20,"Programacion");
estudiante2 = new Estudiante("Marcos",23,"Interfaces");

asignatura1 = new Asignatura("Programacion","Juan","8:30-14:00");
asignatura2 = new Asignatura("Interfaces","Luis","7:30-15:00");

Horario1 = new Horario("Martes","18:30","20:30");
Horario2 = new Horario("Viernes","16:30","18:30");



// Asigna horarios a las asignaturas
asignatura1.asignarHorario(Horario1);
asignatura2.asignarHorario(Horario2);

// Agrega asignaturas a los estudiantes
estudiante1.agregarAsignatura(asignatura1);
estudiante2.agregarAsignatura(asignatura2);

// Muestra las descripciones de los profesores, estudiantes, las asignaturas y sus horarios
console.log(profesor1.toString());
console.log(profesor2.toString());

console.log(estudiante1.toString());
console.log(estudiante2.toString());

console.log(asignatura1.toString());
console.log(asignatura2.toString());



