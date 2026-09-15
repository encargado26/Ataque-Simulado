import {describe, it, expect} from "vitest";
import { Soldado } from "../src/Soldado";

describe("Soldado", () => {
    it("deberia estar vivo al inicio", () => {
        const soldado = new Soldado();
        expect(soldado.estaVivo()).toBe(true);
    });

    it("deberia morir cuando recibe un disparo", () => {
        const soldado = new Soldado();
        soldado.recibirDisparo(1);
        expect(soldado.estaVivo()).toBe(false);
    });

    it("deberia disparar correctamente", () => {
        const soldado = new Soldado();
        expect(() => soldado.disparar()).not.toThrow();
    });
});
