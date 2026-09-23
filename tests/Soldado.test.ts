import { describe, it, expect } from "vitest";
import { Soldado } from "../src/Soldado";
import { _EscudoConPorcentaje } from "../src/EscudoConPorcentaje";
import { Pistola } from "../src/Pistola";

describe("Soldado sin escudo", () => {
  it("muere con un solo disparo de otro soldado armado", () => {
    const soldado1 = new Soldado(new _EscudoConPorcentaje(0), new Pistola(1)); // atacante con pistola
    const soldado2 = new Soldado(new _EscudoConPorcentaje(0)); // defensor sin escudo

    soldado1.disparar(soldado2); // acción real
    expect(soldado2.estaVivo()).toBe(false);
  });
});

describe("Soldado con escudo al 100%", () => {
  it("resiste 4 disparos y muere en el quinto", () => {
    const atacante = new Soldado(new _EscudoConPorcentaje(0), new Pistola(5)); // atacante con 5 balas
    const defensor = new Soldado(new _EscudoConPorcentaje(100));

    atacante.disparar(defensor); // escudo baja a 75%
    expect(defensor.estaVivo()).toBe(true);

    atacante.disparar(defensor); // escudo baja a 50%
    expect(defensor.estaVivo()).toBe(true);

    atacante.disparar(defensor); // escudo baja a 25%
    expect(defensor.estaVivo()).toBe(true);

    atacante.disparar(defensor); // escudo roto
    expect(defensor.estaVivo()).toBe(false); // defensor muere

  });
});