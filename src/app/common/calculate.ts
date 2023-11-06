export function sumaX(dataX: number[]): number {
    return dataX.reduce((acc, x) => acc + x, 0);
}


export function sumaXY(dataX: number[], dataY: number[]): number {
    return dataX.reduce((acc, x, index) => acc + x * dataY[index], 0);
}

// Función para calcular la suma de los cuadrados de los valores de Y
export function sumaYY(dataY: number[]): number {
    return dataY.reduce((acc, y) => acc + y * y, 0);
}

export function sumSquared(arr: number[]): number {
    // Esta función suma los cuadrados de los elementos de un arreglo.
    const squared = arr.map((value) => value * value);
    return sumaX(squared);
}