/****** Clase humano *********/
class Humano {
  ///////////////////////////// Constructor /////////////////////////////////

  constructor(nombre, siglo, realidad) {
    if (nombre.length >= 5) {
      this._nombre = nombre;
    } else {
      throw new Error("El nombre debe contener al menos 5 caracteres");
    }

    if (typeof siglo === "number") {
      this._siglo = siglo;
    } else {
      throw new Error("El siglo debe ser un número");
    }

    if (typeof realidad === "number" && realidad > 0) {
      this._realidad = realidad;
    } else {
      throw new Error("La realidad debe ser un número postivo");
    }
  }

  ///////////////////////////// Setters /////////////////////////////////
  setNombre(nombre) {
    if (typeof nombre === "string" && nombre.length >= 5) {
      this._nombre = nombre;
    } else {
      throw new Error("El nombre debetener al menos 5 caracteres");
    }
  }

  setSiglo(siglo) {
    if (typeof siglo === "number") {
      this._siglo = siglo;
    } else {
      throw new Error("El siglo debe ser un numero");
    }
  }

  setRealidad(realidad) {
    if (typeof realidad === "number" && realidad > 0) {
      this._realidad = realidad;
    } else {
      throw new Error("La realidad debe ser un número mayor que 0.");
    }
  }

  ///////////////////////////// Getters /////////////////////////////////
  getNombre() {
    return this._nombre;
  }

  getSiglo() {
    return this._siglo;
  }

  getRealidad() {
    return this._realidad;
  }

  ///////////////////////////// ToString /////////////////////////////////
  toString() {
    return `${this._nombre} es del siglo ${this._siglo} y de la version ${this._realidad} de la realidad`;
  }
}



/******* Clase Eterno *********/
class Eterno extends Humano {
  ///////////////////////////// Constructor /////////////////////////////////

  constructor(nombre, siglo, realidad, cargo) {
    super(nombre, siglo, realidad);

    if (siglo >= 23) {
      this._siglo = siglo;
    } else {
      throw new Error("El siglo no puede ser menos que el siglo XXIII,");
    }
    this.setCargo(cargo);
  }

  ///////////////////////////// Setters /////////////////////////////////

  setSiglo(siglo) {
    if (siglo >= 23) {
      this._siglo = siglo;
    } else {
      throw new Error("El siglo no puede ser menos que el siglo XXIII,");
    }
  }

  setCargo(cargo) {
    let cargos = new Set(["Aprendiz", "Tecnico", "Ejecutor", "Jefe"]);
    if (cargos.has(cargo)) {
      this._cargo = cargo;
    } else {
      throw new Error(
        'El cargo debe ser "Aprendiz","Tecnico","Ejectutor" o "Jefe"'
      );
    }
  }

  ///////////////////////////// Getters /////////////////////////////////

  getCargo() {
    return this._cargo;
  }

  ///////////////////////////// ToString /////////////////////////////////

  toString() {
    return `${this._nombre} es un ${this._cargo} del siglo ${this._siglo} de la realidad ${this._realidad}`;
  }
}



/************** Clase Eternidad *****************/
class Eternidad {
  ///////////////////////////// Constructor /////////////////////////////////
  constructor(objeto_jefe, descripcion) {
    this.setJefe(objeto_jefe);
    this.setDescripcion(descripcion);
    this._eternos = [];
  }

  ///////////////////////////// Setters /////////////////////////////////

  setJefe(objeto_jefe) {
    if (objeto_jefe.getCargo() == "Jefe" && objeto_jefe instanceof Eterno) {
      this._jefe = objeto_jefe;
    } else {
      throw new Error("El objeto jefe debe ser un eterno y debe ser jefe");
    }
  }

  setDescripcion(descripcion) {
    if (typeof descripcion === "string" && descripcion.length > 10) {
      this._descripcion = descripcion.substring(0, 200);
    } else {
      throw new Error("La descripción debe tener un minimo de 10 caracteres");
    }
  }

  ///////////////////////////// Getters /////////////////////////////////
  getJefe() {
    return this._jefe;
  }

  getDescripcion() {
    return this._descripcion;
  }

  ///////////////////////////// Reclutar Eterno /////////////////////////////////
  reclutarEterno(eterno) {
    if (eterno instanceof Eterno && !this._eternos.includes(eterno)) {
      this._eternos.push(eterno);
      return true;
    }
    return false;
  }

  ///////////////////////////// Cesar Etesrno /////////////////////////////////

  cesarEterno(titulo) {
    let salida = false;
    for (let i = 0; i <= this._eternos.length; i++) {
      if (this._eternos[i] !== undefined) {
        if (this._eternos[i].getNombre() == titulo) {
          delete this._eternos[i];
          salida = true;
        }
      }
    }

    return salida;
  }

  ///////////////////////////// Listar Cargo /////////////////////////////////
  listadoCargo(cargo) {
    let eternosfiltrados = this._eternos.filter((eterno) => eterno.getCargo() === cargo);
    let eternosfiltradosString = [];
    for (const eterno of eternosfiltrados) {
      eternosfiltradosString.push(eterno.getNombre());
    }
    return `Eternos que tengan el cargo ${cargo} : ${eternosfiltradosString.join(",")} `;
  }


  ///////////////////////////// listado ordeandor  /////////////////////////////////
  listadoOrdenado() {
    let eternosOrdenadosAlf = [...this._eternos];
    eternosOrdenadosAlf = eternosOrdenadosAlf.sort((et1, et2) =>et1.getNombre().localeCompare(et2.getNombre()));
    let salida = "";
    let cont = 1;

    for (let eterno of eternosOrdenadosAlf) {
      if (eterno !== undefined) {
        salida += `Eterno ${cont} : Nombre: ${eterno.getNombre()}, siglo : ${eterno.getSiglo()}, cargo : ${eterno.getCargo()}. `;
        cont++;
      }
    }
    return salida;
  }



  ///////////////////////////// ToString  /////////////////////////////////
  toString() {
    let salida2 = `<table>
                    <tr>
                      <th>Nombre</th>
                      <th>Siglo</th>
                      <th>Cargo</th>
                    </tr>`;
    for (const eterno of this._eternos) {
      if (eterno !== undefined) {
        salida2 += `<tr>
                    <td>${eterno.getNombre()}</td>
                    <td>${eterno.getSiglo()}</td>
                    <td>${eterno.getCargo()}</td>
                  </tr>`;
      }
    }
    salida2 += "</table>";
    return salida2;
  }
}

//Creando humanos
try {
  let marty = new Humano("Martyss", 20, 1);
  let arnold = new Humano("Arnold", 21, 1);
  let matthew = new Humano("Matthew", 23, 1);
  console.log(matthew.toString());
} catch (e) {
  document.write(`Error: ${e}`);
}

try {
  let eterno1 = new Eterno("Jose Nogales", 23, 3, "Jefe");
  let eterno2 = new Eterno("Matias", 25, 6, "Jefe");
  let eterno3 = new Eterno("Roberto", 23, 3, "Aprendiz");
  let eterno4 = new Eterno("Noah Galvez", 23, 3, "Aprendiz");
  let eterno5 = new Eterno("Luciana", 27, 8, "Jefe");
  let eterno6 = new Eterno("Marcos", 29, 7, "Tecnico");
  let eterno7 = new Eterno("Carlos", 28, 6, "Tecnico");
  let eterno8 = new Eterno("Marcela", 26, 5, "Ejecutor");
  let eterno9 = new Eterno("Elizabeth", 24, 4, "Jefe");
  let eterno10 = new Eterno("Fabian", 23, 3, "Aprendiz");
  console.log(eterno10.toString());

  let eternidad = new Eternidad(eterno2,"La Eternidad es una organización bondadosa o no");


  eternidad.reclutarEterno(eterno3);
  eternidad.reclutarEterno(eterno4);
  eternidad.reclutarEterno(eterno6);
  eternidad.reclutarEterno(eterno7);
  eternidad.reclutarEterno(eterno8);
  eternidad.reclutarEterno(eterno10);

  console.log("Se elimina a el eterno Matias : "+eternidad.cesarEterno("Carlos"));


  console.log(eternidad.listadoCargo("Aprendiz"));
  console.log("Listado ordenador :"+eternidad.listadoOrdenado());

  document.write(eternidad.toString());

} catch (e) {
  document.write(`Error : ${e}`);
}





