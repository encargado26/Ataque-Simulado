import { describe, it, expect } from "vitest";
import { Soldado } from "../src/Soldado";
import { _EscudoConPorcentaje } from "../src/EscudoConPorcentaje";

describe("Soldado sin escudo", () => {
  it("muere con un solo disparo de otro soldado", () => {
    const soldado1 = new Soldado(); // atacante
    const soldado2 = new Soldado(); // defensor

    soldado1.disparar(soldado2); // acción real
    expect(soldado2.estaVivo()).toBe(false);
  });

  it("resiste 4 disparos y muere en el quinto", () => {
    const atacante = new Soldado();
    const defensor = new Soldado(new _EscudoConPorcentaje(100));

    atacante.disparar(defensor); // escudo baja a 75%
    expect(defensor.estaVivo()).toBe(true);

    atacante.disparar(defensor); // escudo sigue al 50%
    expect(defensor.estaVivo()).toBe(true);

    atacante.disparar(defensor); // escudo baja a 25%
    expect(defensor.estaVivo()).toBe(true);

    atacante.disparar(defensor); // escudo roto, daño directo
    expect(defensor.estaVivo()).toBe(true);

    atacante.disparar(defensor); // soldado muere
    expect(defensor.estaVivo()).toBe(false);
  });
});