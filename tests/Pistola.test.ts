import { describe, it, expect } from "vitest";
import { Soldado } from "../src/Soldado";
import { Pistola } from "../src/Pistola";
import { _EscudoConPorcentaje } from "../src/EscudoConPorcentaje";

describe("Pistola", () => {
  it("dispara y consume municiones", () => {
    const defensor = new Soldado(new _EscudoConPorcentaje(0));
    const pistola = new Pistola(2);

    pistola.disparar(defensor); // primer disparo
    expect(defensor.estaVivo()).toBe(false); // soldado muere
    expect(pistola.tieneMuniciones()).toBe(true);

    pistola.disparar(defensor); // segundo disparo
    expect(pistola.tieneMuniciones()).toBe(false);
  });

  it("no dispara si no tiene municiones", () => {
    const defensor = new Soldado(new _EscudoConPorcentaje(0));
    const pistola = new Pistola(0);

    pistola.disparar(defensor); // sin municiones
    expect(defensor.estaVivo()).toBe(true); // no recibe daño
    expect(pistola.tieneMuniciones()).toBe(false);
  });
});