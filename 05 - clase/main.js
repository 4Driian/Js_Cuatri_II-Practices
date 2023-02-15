const personaProto = {
  saludar() {
    return `Hola! Soy ${this.nombre}! Mucho gusto!`
  },
  caminar() {
    return `Hola! Soy ${this.nombre}! Estoy caminando!`
  },
  comer() {
    return `Hola! Soy ${this.nombre}! Estoy comiendo..`
  }
};

const estudianteProto =  {
  estudiar() {
    return `Hola! Soy ${this.nombre}! Ahora estoy estudiando`
  },
  dormir() {
    return `Hola! Soy ${this.nombre}! Estoy Ocupado!`
  }
};

const profesorProto = {
  enseñar() {
    return `Hola! Soy ${this.nombre}!Estoy dando clases`
  },
  calificar() {
    return `Hola! Soy ${this.nombre}!Estoy calificando`
  }
};

function estudianteConstructor (nombre, edad, escuela) {
  this.nombre = nombre;
  this.edad = edad;
  this.escuela = escuela;
}

estudianteConstructor.prototype = estudianteProto;

function profesorConstructor (nombre, carrera, escuela) {
  this.nombre = nombre;
  this.carrera = carrera;
  this.escuela = escuela;
}

profesorConstructor.prototype = profesorProto;

const estudiante1 = new estudianteConstructor("Adrian", 20, "CETAV");

const estudiante2 = new estudianteConstructor("Francisco", 20, "UCR");

const profesor1 = new profesorConstructor("Chico", "Ingeniería en computadores", "TEC");

const profesor2 = new profesorConstructor("Pancho", "Técnico en redes", "UNA");