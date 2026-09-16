import { describe, it, expect } from "vitest";
import { Soldado } from "../src/Soldado";
import { EscudoConPorcentaje } from "../src/Escudoconporcentaje";

describe("Soldado con escudo", () => {
  it("debería estar vivo al inicio", () => {
    const soldado = new Soldado();
    expect(soldado.estaVivo()).toBe(true);
  });

  it("debería morir cuando recibe un disparo sin escudo o cuando el escudo ya recibio sus dos disparos ", () => {
    const soldado = new Soldado(new EscudoConPorcentaje(0));
    soldado.recibirDisparo(1);
    expect(soldado.estaVivo()).toBe(false);
  });

  it("debería resistir un disparo con escudo al 100%", () => {
    const soldado = new Soldado(new EscudoConPorcentaje(100));
    soldado.recibirDisparo(1);
    expect(soldado.estaVivo()).toBe(true);
  });

  it("debería resistir un disparo con escudo al 50%", () => {
    const soldado = new Soldado(new EscudoConPorcentaje(50));
    soldado.recibirDisparo(1);
    expect(soldado.estaVivo()).toBe(true);
  });

  it("debería disparar correctamente", () => {
    const soldado = new Soldado();
    expect(() => soldado.disparar()).not.toThrow();
  });
});