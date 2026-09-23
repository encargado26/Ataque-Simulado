import { describe, it, expect } from "vitest";
import { _Tanque } from "../src/Tanque";
import { _EscudoConPorcentaje } from "../src/EscudoConPorcentaje";

describe("Tanque sin escudo", () => {
  it("resiste un disparo y muere en el segundo", () => {
    const atacante = new _Tanque();
    const defensor = new _Tanque(new _EscudoConPorcentaje(0));

    atacante.disparar(defensor); // vida pasa de 2 → 1
    expect(defensor.estaVivo()).toBe(true);

    atacante.disparar(defensor); // vida pasa de 1 → 0
    expect(defensor.estaVivo()).toBe(false);
  });
});

describe("Tanque con escudo al 100%", () => {
  it("resiste más disparos gracias al escudo", () => {
    const atacante = new _Tanque();
    const defensor = new _Tanque(new _EscudoConPorcentaje(100));

    atacante.disparar(defensor); // escudo baja a 75%
    expect(defensor.estaVivo()).toBe(true);

    atacante.disparar(defensor); // escudo baja a 50%
    expect(defensor.estaVivo()).toBe(true);

    atacante.disparar(defensor); // escudo baja a 25%
    expect(defensor.estaVivo()).toBe(true);

    atacante.disparar(defensor); // escudo roto baja 1 vida, vida pasa de 2 → 1
    expect(defensor.estaVivo()).toBe(true);

    atacante.disparar(defensor); // vida pasa de 1 → 0
    expect(defensor.estaVivo()).toBe(false);
  });
});