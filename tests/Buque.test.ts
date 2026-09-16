import { describe, it, expect } from "vitest";
import { Buque } from "../src/Buque";

describe("Buque", () => {
	it("comienza con 3 vidas", () => {
		const buque = new Buque();
		expect(buque.estaVivo()).toBe(true);
	});

	it("pierde una vida al ser atacado", () => {
		const buque = new Buque();
		buque.recibirDisparo(1);
		expect(buque.estaVivo()).toBe(true);
	});

	it("debería resistir dos disparos y seguir vivo", () => {
    	const buque = new Buque();
    	buque.recibirDisparo(1);
    	buque.recibirDisparo(1);
    	expect(buque.estaVivo()).toBe(true);
	});

	it("se hunde al perder sus 3 vidas", () => {
		const buque = new Buque();
		buque.recibirDisparo(1);
		buque.recibirDisparo(1);
		buque.recibirDisparo(1);
		expect(buque.estaVivo()).toBe(false);
	});

	it("debería poder disparar correctamente", () => {
    const buque = new Buque();
    expect(() => buque.disparar()).not.toThrow();
  });
});