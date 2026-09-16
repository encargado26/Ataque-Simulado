import { describe, it, expect } from "vitest";
import { Tanque } from "../src/Tanque";

describe("Tanque", () => {
	it("deberia estar vivo al inicio", () => {
		const tanque = new Tanque();
		expect(tanque.estaVivo()).toBe(true);
	});

	it("deberia seguir vivo despues de recibir un disparo", () => {
		const tanque = new Tanque();
		tanque.recibirDisparo(1);
		expect(tanque.estaVivo()).toBe(true);
	});

	it("deberia morir cuando recibe dos disparos", () => {
		const tanque = new Tanque();
		tanque.recibirDisparo(1);
		tanque.recibirDisparo(1);
		expect(tanque.estaVivo()).toBe(false);
	});

	it("deberia disparar correctamente", () => {
		const tanque = new Tanque();
		expect(() => tanque.disparar()).not.toThrow();
	});
});