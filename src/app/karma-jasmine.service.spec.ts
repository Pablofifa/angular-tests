import { TestBed } from '@angular/core/testing';
import { KarmaJasmineService } from './karma-jasmine.service';

describe('KarmaJasmineService', () => {
  let service: KarmaJasmineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(KarmaJasmineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería sumar dos números correctamente', () => {
    const resultado = service.sumar(2, 3);
    expect(resultado).toBe(5);
  });

  it('debería sumar números negativos correctamente', () => {
    const resultado = service.sumar(-5, -3);
    expect(resultado).toBe(-8);
  });

  it('debería sumar un número positivo y un número negativo correctamente', () => {
    const resultado = service.sumar(10, -5);
    expect(resultado).toBe(5);
  });

   it('debería restar dos números correctamente', () => {
    const resultado = service.restar(2, 3);
    expect(resultado).toBe(-1);
  });

  it('debería multiplicar dos números correctamente', () => {
    const resultado = service.multiplicar(2, 3);
    expect(resultado).toBe(6);
  });

  it('debería dividir dos números correctamente', () => {
    const resultado = service.dividir(2, 3);
    expect(resultado).toBe(0.6666666666666666);
  });
/*Función para verificar si un número es par
Función para verificar si una cadena es un palíndromo
Función para calcular el factorial de un número*/
  
it('debería verificar si un número es par', () => {
  const resultado = service.esPar(22);
  expect(resultado).toBe(true);
});

it('debería verificar si una cadena es un palíndromo', () => {
  const resultado = service.esPalindromo("Pablo");
  expect(resultado).toBe(false);
});

it('debería calcular el factorial de un número', () => {
  const resultado = service.factorial(5);
  expect(resultado).toBe(120);
});

});
