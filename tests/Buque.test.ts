import { describe, it, expect } from "vitest";
import { _Buque } from "../src/Buque";
import { _EscudoConPorcentaje } from "../src/EscudoConPorcentaje";

describe("Buque sin escudo", () => {
  it("comienza con 3 vidas", () => {
    const buque = new _Buque();
    expect(buque.estaVivo()).toBe(true);
  });

  it("resiste dos disparos y muere en el tercero", () => {
    const atacante = new _Buque();
    const defensor = new _Buque();

    atacante.disparar(defensor); // vida 3 → 2
    expect(defensor.estaVivo()).toBe(true);

    atacante.disparar(defensor); // vida 2 → 1
    expect(defensor.estaVivo()).toBe(true);

    atacante.disparar(defensor); // vida 1 → 0
    expect(defensor.estaVivo()).toBe(false);
  });
});

describe("Buque con escudo al 100%", () => {
  it("resiste más disparos gracias al escudo", () => {
    const atacante = new _Buque();
    const defensor = new _Buque(new _EscudoConPorcentaje(100));

    atacante.disparar(defensor); // escudo baja a 75%
    expect(defensor.estaVivo()).toBe(true);

    atacante.disparar(defensor); // escudo baja a 50%
    expect(defensor.estaVivo()).toBe(true);

    atacante.disparar(defensor); // escudo baja a 25%
    expect(defensor.estaVivo()).toBe(true);

    atacante.disparar(defensor); // escudo roto baja 1 vida, vida pasa de 3 → 2
    expect(defensor.estaVivo()).toBe(true);

    atacante.disparar(defensor); // baja 1 vida, vida pasa de 2 → 1
    expect(defensor.estaVivo()).toBe(true);

    atacante.disparar(defensor); // baja 1 vida, vida pasa de 1 → 0
	expect(defensor.estaVivo()).toBe(false);
  });
});
