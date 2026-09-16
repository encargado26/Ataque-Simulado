import { describe, it, expect } from "vitest";
import { Soldado } from "../src/Soldado";
import { EscudoConPorcentaje } from"../src/Escudoconporcentaje";

describe("Soldado con escudo dinámico", () => {
  it("sobrevive al primer disparo con escudo al 100%", () => {
    const soldado = new Soldado(new EscudoConPorcentaje(100));
    soldado.recibirDisparo(1); // escudo baja a 50%
    expect(soldado.estaVivo()).toBe(true);
  });

  it("sobrevive al segundo disparo con escudo al 50%", () => {
    const soldado = new Soldado(new EscudoConPorcentaje(100));
    soldado.recibirDisparo(1); // escudo baja a 50%
    soldado.recibirDisparo(1); // escudo baja a 0%
    expect(soldado.estaVivo()).toBe(true);
  });

  it("muere al tercer disparo cuando el escudo ya no protege", () => {
  const soldado = new Soldado(new EscudoConPorcentaje(100));
  soldado.recibirDisparo(1); // escudo baja a 50%
  soldado.recibirDisparo(1); // escudo baja a 0%
  soldado.recibirDisparo(1); // sin escudo → daño completo
  expect(soldado.estaVivo()).toBe(false);
});

it("deberia disparar correctamente", () => {
    const soldado = new Soldado(new EscudoConPorcentaje(100));
    expect(() => soldado.disparar()).not.toThrow();
  });
});