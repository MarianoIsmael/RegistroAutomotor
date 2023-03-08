const RegistroAutomotor = require('./registro-automotor');

const registro = new RegistroAutomotor();

registro.altaAuto({
  patente: 'ABC123',
  marca: 'Ford',
  modelo: 'Fiesta',
  color: 'Rojo',
  anio: 2010,
});

const auto = registro.buscarAuto('ABC123');
console.log(auto);

registro.actualizarAuto('ABC123', { color: 'Azul' });
const autoActualizado = registro.buscarAuto('ABC123');
console.log(autoActualizado);

registro.borrarAuto('ABC123');
const autoBorrado = registro.buscarAuto('ABC123');
console.log(autoBorrado);
