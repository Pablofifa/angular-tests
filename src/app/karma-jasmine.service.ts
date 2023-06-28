import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KarmaJasmineService {

  constructor() { }

  sumar(a: number, b: number): number {
    return a + b;
  }

  restar(a: number, b: number): number {
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }

  dividir(a: number, b: number): number {
    return a / b;
  }

  esPar(numero) { if(numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  esPalindromo(cadena) {
    const cadenaLimpia = cadena.replace(/\W/g, '').toLowerCase();
    const cadenaInversa = cadenaLimpia.split('').reverse().join('');
    return cadenaLimpia === cadenaInversa;
  }
  
  factorial(numero) { let resultado = 1;
    for(let i = 2; i <= numero; i++){
      resultado *= i;
    }
    return resultado;
  }

}