const fs = require('fs');
const Auto = require('./auto');

class RegistroAutomotor {
  constructor() {
    this.autos = [];
    this.loadAutosFromFile();
  }

  loadAutosFromFile() {
    const autosJson = fs.readFileSync('autos.json', 'utf-8');
    const autosObj = JSON.parse(autosJson);
    this.autos = autosObj.map(auto => new Auto(auto));
  }

  saveAutosToFile() {
    const autosObj = this.autos.map(auto => auto.toJSON());
    const autosJson = JSON.stringify(autosObj, null, 2);
    fs.writeFileSync('autos.json', autosJson);
  }

  altaAuto(auto) {
    this.autos.push(new Auto(auto));
    this.saveAutosToFile();
  }

  buscarAuto(patente) {
    return this.autos.find(auto => auto.patente === patente);
  }

  actualizarAuto(patente, datosAuto) {
    const auto = this.buscarAuto(patente);
    if (!auto) {
      throw new Error(`No se encontró un auto con patente ${patente}`);
    }
    Object.assign(auto, datosAuto);
    this.saveAutosToFile();
  }

  borrarAuto(patente) {
    const index = this.autos.findIndex(auto => auto.patente === patente);
    if (index === -1) {
      throw new Error(`No se encontró un auto con patente ${patente}`);
    }
    this.autos.splice(index, 1);
    this.saveAutosToFile();
  }
}

module.exports = RegistroAutomotor;
