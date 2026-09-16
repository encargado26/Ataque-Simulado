import { describe, it, expect } from "vitest";
import { Soldado } from "../src/Soldado";
import { _EscudoConPorcentaje } from "../src/EscudoConPorcentaje";

describe("Soldado con escudo dinámico", () => {
  it("sobrevive al primer disparo con escudo al 100%", () => {
    const soldado = new Soldado(new _EscudoConPorcentaje(100));
    soldado.recibirDisparo(1); // escudo baja a 50%
    expect(soldado.estaVivo()).toBe(true);
  });

  it("sobrevive al segundo disparo con escudo al 50%", () => {
    const soldado = new Soldado(new _EscudoConPorcentaje(100));
    soldado.recibirDisparo(1); // escudo baja a 50%
    soldado.recibirDisparo(1); // escudo baja a 0%
    expect(soldado.estaVivo()).toBe(true);
  });

  it("muere al tercer disparo cuando el escudo ya no protege", () => {
  const soldado = new Soldado(new _EscudoConPorcentaje(100));
  soldado.recibirDisparo(1); // escudo baja a 50%
  soldado.recibirDisparo(1); // escudo baja a 0%
  soldado.recibirDisparo(1); // sin escudo → daño completo
  expect(soldado.estaVivo()).toBe(false);
});

it("deberia disparar correctamente", () => {
    const soldado = new Soldado(new _EscudoConPorcentaje(100));
    expect(() => soldado.disparar()).not.toThrow();
    soldado.recibirDisparo(1);
    expect(soldado.estaVivo()).toBe(true);
  });

  it("soldado 1 dispara correctamente", () => {
    const soldado1 = new Soldado(new _EscudoConPorcentaje(100));
    const soldado2 = new Soldado(new _EscudoConPorcentaje(100));
    expect(() => soldado1.disparar()).not.toThrow();
    soldado2.recibirDisparo(1);
    expect(soldado2.estaVivo()).toBe(true);
  });

  it("soldado 2 dispara correctamente", () => {
    const soldado1 = new Soldado(new _EscudoConPorcentaje(100));
    const soldado2 = new Soldado(new _EscudoConPorcentaje(100));
    expect(() => soldado2.disparar()).not.toThrow();
    soldado1.recibirDisparo(1);
    expect(soldado1.estaVivo()).toBe(true);
  });
});