// INFRAESTRUCTURA: persistencia local (localStorage para reservas, sessionStorage para el borrador).
const CLAVE_RESERVAS = 'tutoriaux.reservas';
const CLAVE_BORRADOR = 'tutoriaux.borrador';

function leer(storage, clave, porDefecto) {
  try {
    const v = storage.getItem(clave);
    return v ? JSON.parse(v) : porDefecto;
  } catch {
    return porDefecto;
  }
}
function escribir(storage, clave, valor) {
  try {
    storage.setItem(clave, JSON.stringify(valor));
  } catch {
    /* almacenamiento no disponible: se ignora */
  }
}

export const repositorioReservas = {
  listar: () => leer(localStorage, CLAVE_RESERVAS, []),
  guardarTodas: (lista) => escribir(localStorage, CLAVE_RESERVAS, lista),
};

export const repositorioBorrador = {
  obtener: () => leer(sessionStorage, CLAVE_BORRADOR, {}),
  guardar: (b) => escribir(sessionStorage, CLAVE_BORRADOR, b),
  limpiar: () => sessionStorage.removeItem(CLAVE_BORRADOR),
};
