/* 
Producto Escalar
•Cargue dos arreglos de dimensión N números (la cantidad es ingresada por el usuario)
•Calcule el producto escalar entre los dos arreglos
 */

let largo: number = Number(
  prompt(`Ingrese la cantida de posiciones del arreglo:`)
);
let arreglo1: number[] = new Array(largo);
let arreglo2: number[] = new Array(largo);
let productoArreglo: number = 0;

function productoEscalar(vectorA: number[], vectorB: number[]): number {
  let productoEsc: number = 0;
  let prod: number = 0;
  for (let i: number = 0; i < vectorA.length; i++) {
    prod = vectorA[i] * vectorB[i];
    productoEsc = productoEsc + prod;
  }
  return productoEsc;
}

for (let i: number = 0; i <= largo - 1; i++) {
  arreglo1[i] = Number(
    prompt(`ingrese valor para posicion ${i + 1} del Primer Arreglo`)
  );
  arreglo2[i] = Number(
    prompt(`ingrese valor para posicion ${i + 1} del segundo Arreglo`)
  );
}

productoArreglo = productoEscalar(arreglo1, arreglo2);

console.log(`El producto Escalar es: ${productoArreglo}`);
