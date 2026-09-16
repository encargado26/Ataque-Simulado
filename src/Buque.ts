import { Combatiente } from "./Combatiente";

export class Buque implements Combatiente {
	private vida: number = 3;

	disparar(): void {
		console.log("Buque dispara");
	}

	recibirDisparo(danio: number): void {
		this.vida -= danio;
	}

	estaVivo(): boolean {
		return this.vida > 0;
	}
}