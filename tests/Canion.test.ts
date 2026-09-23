import { describe, it, expect } from "vitest";
import { _Tanque } from "../src/Tanque";
import { Canion } from "../src/Canion";
import { _EscudoConPorcentaje } from "../src/EscudoConPorcentaje";

describe("Cañón", () => {
  it("hace más daño que la pistola", () => {
    const defensor = new _Tanque(new _EscudoConPorcentaje(0));
    const canion = new Canion(1);

    canion.disparar(defensor); // daño 2 → tanque muere
    expect(defensor.estaVivo()).toBe(false);
    expect(canion.tieneMuniciones()).toBe(false);
  });

  it("no dispara si no tiene municiones", () => {
    const defensor = new _Tanque(new _EscudoConPorcentaje(0));
    const canion = new Canion(0);

    canion.disparar(defensor); // sin municiones
    expect(defensor.estaVivo()).toBe(true);
    expect(canion.tieneMuniciones()).toBe(false);
  });
});
