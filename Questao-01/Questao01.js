function checarTipoTriangulo(ladoA, ladoB, ladoC) {
  let tipoTriangulo
  if (ladoA == ladoB && ladoB == ladoC) {
    tipoTriangulo = "equilátero"
  } else if (ladoA == ladoB || ladoA == ladoC || ladoC == ladoB) {
    tipoTriangulo = "isosceles"

  } else {
    tipoTriangulo = "escaleno"
  }

  return tipoTriangulo
}