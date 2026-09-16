import { describe, it, expect } from "vitest";
import { _Tanque } from "../src/Tanque";

describe("Tanque", () => {
	it("deberia estar vivo al inicio", () => {
		const tanque = new _Tanque();
		expect(tanque.estaVivo()).toBe(true);
	});

	it("deberia seguir vivo despues de recibir un disparo", () => {
		const tanque = new _Tanque();
		tanque.recibirDisparo(1);
		expect(tanque.estaVivo()).toBe(true);
	});

	it("deberia morir cuando recibe dos disparos", () => {
		const tanque = new _Tanque();
		tanque.recibirDisparo(1);
		tanque.recibirDisparo(1);
		expect(tanque.estaVivo()).toBe(false);
	});

	it("deberia disparar correctamente", () => {
		const tanque = new _Tanque();
		expect(() => tanque.disparar()).not.toThrow();
	});
});